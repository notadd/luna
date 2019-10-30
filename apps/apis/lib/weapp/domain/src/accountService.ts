import { Injectable } from '@nestjs/common';
import { getRepository } from '@notadd/magnus-typeorm';
import { Account } from '../../../entities/account';
import { Setting } from '../../../entities/setting';
import { Auth } from '../../core/lib';
import { WebAppError } from '../../webapp.error';

@Injectable()
export class AccountService {
  constructor(public auth: Auth) {}
  /**
   * 登录凭证
   * @param jsCode
   */
  async accountLogin(jsCode: string): Promise<any> {
    const settingRepo = getRepository(Setting);
    const setting = await settingRepo.findOne({
      where: { key: 'weixin-account' }
    });
    if (setting) {
      const appid = setting.value[`appid`];
      const secret = setting.value[`secret`];
      const result = await this.auth.code2Session(appid, secret, jsCode);
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
      throw new WebAppError('03', `系统繁忙，请稍后重试`);
    }
    throw new WebAppError('04', `配置异常`);
  }

  /**
   * 保存
   */
  async saveAccount(openid: string): Promise<Account> {
    try {
      const accountRepo = await getRepository(Account);
      const account = accountRepo.create({ openid });
      return await accountRepo.save(account);
    } catch (e) {
      throw new WebAppError(`05`, `${e.message}`);
    }
  }

  /**
   * 更新账户信息
   */
  async updateAccount(entity: any): Promise<void> {
    const accountRepo = await getRepository(Account);
    const account = await accountRepo.findOne({
      where: { openid: entity.openid }
    });
    if (!account) {
      throw new WebAppError(`01`, `账户不存在`);
    }
    try {
      await accountRepo.update({ id: account.id }, { ...account, ...entity });
    } catch (e) {
      throw new WebAppError(`02`, `${e.message}`);
    }
  }
}
