import { Injectable } from '@nestjs/common';
import { Setting, Member } from '../../../entities';
import { WebAppError } from '../../webapp.error';
import { Auth } from '../../core/lib';
import { Db } from '../../core/repository/db';

@Injectable()
export class MemberService {
	constructor(public auth: Auth, public db: Db) { }
	/**
	 * 登录凭证
	 * @param jsCode
	 */
	async memberLogin(jsCode: string): Promise<any> {
		try {
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
					throw new WebAppError('01', result.errmsg);
				} else if (result.errcode === 45011) {
					throw new WebAppError('02', result.errmsg);
				}
				throw new WebAppError('03', `系统繁忙,请稍后重试`);
			} else {
				throw new WebAppError('04', `配置异常`);
			}
		} catch (e) {
			throw new WebAppError(`${e.code || `05`}`, e.message);
		}
	}

	/**
	 * 保存
	 */
	async memberSave(openid: string): Promise<Member> {
		try {
			const memberRepo = this.db.getConnection().getRepository(Member);
			const member = memberRepo.create({ openid });
			return await memberRepo.save(member);
		} catch (e) {
			throw new WebAppError(`01`, `${e.message}`);
		}
	}

	/**
	 * 更新账户信息
	 */
	async updateMember(entity: any): Promise<void> {
		try {
			const accountRepo = this.db.getConnection().getRepository(Member);
			const account = await accountRepo.findOne({
				where: { openid: entity.openid }
			});
			if (!account) {
				throw new WebAppError(`01`, `账户不存在`);
			}
			await accountRepo.update({ id: account.id }, { ...account, ...entity });
		} catch (e) {
			throw new WebAppError(`${e.code || `02`}`, e.message);
		}
	}
}
