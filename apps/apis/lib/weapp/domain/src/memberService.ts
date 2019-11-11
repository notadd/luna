import { Injectable } from '@nestjs/common';
import { Account, Member, Setting } from '../../../entities';
import { Auth } from '../../core/lib';
import { Db } from '../../core/repository/db';
import { ServiceError, TypeError, TypeOrmError } from '../../luna.error';

@Injectable()
export class MemberService {
    constructor(public auth: Auth, public db: Db) { }
	/**
	 * 登录凭证
	 * @param jsCode
	 */
    async memberLogin(jsCode: string): Promise<any> {
        if (!jsCode) {
            throw new TypeError(`01`, `jsCode不能为空`);
        }
        const settingRepo = this.db.getConnection().getRepository(Setting);
        const setting = await settingRepo.findOne({
            where: { key: 'weixin-account' }
        });
        if (setting) {
            const result = await this.auth.code2Session(
                setting.value[`appid`],
                setting.value[`secret`],
                jsCode
            );
            if (result.errcode === 0) {
                return {
                    openid: result.openid,
                    session_key: result.session_key,
                    unionid: result.unionid
                };
            } else if (result.errcode === 40029) {
                throw new ServiceError('01', result.errmsg);
            } else if (result.errcode === 45011) {
                throw new ServiceError('02', result.errmsg);
            }
            throw new ServiceError('03', `系统繁忙,请稍后重试`);
        } else {
            throw new ServiceError('04', `未获取到配置信息`);
        }
    }

	/**
	 * 保存
	 */
    async memberSave(openid: string): Promise<Member> {
        if (!openid) {
            throw new TypeError(`01`, `唯一编号不能为空`);
        }
        try {
            const memberRepo = this.db.getConnection().getRepository(Member);
            const member = memberRepo.create({ openid });
            return await memberRepo.save(member);
        } catch (e) {
            throw new TypeOrmError(`01`, e.message);
        }
    }

	/**
	 * 更新账户信息
	 */
    async updateMember(entity: any): Promise<void> {
        if (!entity) {
            throw new TypeError(`01`, `账户信息不能为空`)
        }
        const membertRepo = this.db.getConnection().getRepository(Member);
        const member = await membertRepo.findOne({
            where: { openid: entity.openid }
        });
        if (!member) {
            throw new ServiceError(`02`, `账户不存在`);
        }
        try {
            await membertRepo.update({ id: member.id }, { status: 1, ...member, ...entity });
        } catch (e) {
            throw new TypeOrmError(`03`, e.message);
        }
    }

    /**
     * 查找用户详细信息
     * @param openid 用户编号
     */
    async memberDetail(openid: string): Promise<any> {
        if (!openid) {
            throw new TypeError(`01`, `唯一编号不能为空`);
        }
        const membertRepo = this.db.getConnection().getRepository(Member);
        const member = await membertRepo.findOne({ where: { openid }, relations: ['account'] });
        if (!member) {
            throw new ServiceError(`02`, `用户不存在`);
        }
        return {
            id: member.id,
            nickname: member.nickname,
            avatarUrl: member.avatarUrl,
            country: member.country,
            province: member.province,
            city: member.city,
            status: member.status,
            fee: member.fee,
            fee2: member.fee2,
            fee3: member.fee3,
            steamId: member.account ? member.account.steamId : ``,
            level: member.account ? member.account.level : ``,
            createDate: member.createDate,
        }
    }

    /**
     * 用户绑定steamId
     * @param openid 用户唯一编号
     * @param steamId steamId
     */
    async memberBindSteamId(openid: string, steamId: string): Promise<void> {
        if (!openid || !steamId) {
            throw new TypeError(`01`, `用户唯一编号和steamId不能为空`);
        }
        const membertRepo = this.db.getConnection().getRepository(Member);
        const accountRepo = this.db.getConnection().getRepository(Account);
        const member = await membertRepo.findOne({ where: { openid } });
        if (!member) {
            throw new ServiceError(`02`, `用户不存在`);
        }
        if (member.accountId) {
            throw new ServiceError(`03`, `您已绑定过steam账户`);
        }
        const account = await accountRepo.findOne({ where: { steamId }, relations: ['member'] });
        if (account && account.member) {
            throw new ServiceError(`04`, `此steamId已被绑定`);
        }
        try {
            if (account) {
                await membertRepo.update(member.id, { accountId: account.id });
            } else {
                const newAccount = await accountRepo.save({ steamId })
                await membertRepo.update(member.id, { accountId: newAccount.id });
            }
        } catch (e) {
            throw new TypeOrmError(`05`, e.message);
        }
    }
}
