import { getRepository } from "@notadd/magnus-typeorm";
import axios from "axios";
import { Account } from "../../entities/account";
import { Setting } from "../../entities/setting";
export class AccountService {
  constructor() {}

  /**
   * 登录凭证
   * @param jsCode
   */
  async accountLogin(jsCode: string): Promise<any> {
    const settingRepo = getRepository(Setting);
    const setting = await settingRepo.findOne({
      where: { key: "weixin-account" }
    });
    if (setting) {
      const appid = setting.value[`appid`];
      const secret = setting.value[`secret`];
      const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${jsCode}&grant_type=authorization_code`;
      return await axios.get(url).then(res => res.data);
    } else {
      throw Error("配置异常");
    }
  }

  /**
   * 保存
   */
  async saveAccount(openid: string): Promise<Account> {
    const accountRepo = await getRepository(Account);
    const account = accountRepo.create({ openid });
    return await accountRepo.save(account);
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
      throw new Error("账户不存在");
    }
    await accountRepo.update({ id: account.id }, { ...account, ...entity });
  }
}
