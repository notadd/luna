import { Repository, getRepository } from '@notadd/magnus-typeorm';
import { Setting } from '../../entities/setting';
import axios from 'axios';
export class AccountService {
  constructor() {}

  async accountLogin(): Promise<any> {
    const settingRepo = getRepository(Setting);
    const setting = await settingRepo.findOne({ where: { key: "weixin_account" } });
    console.log(setting)
    if (setting) {
        const appid = setting[`appid`];
        const secret = setting[`secret`];
        const jsCode = 'asddffs'
        const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${jsCode}&grant_type=authorization_code`
        return await axios.get(url).then(res => res.data);
    } else {
        throw Error('配置异常');
    }
  }
}
