import axios from "axios";
import { Auth, Code2SesstionResult, GetAccessTokenResult, GetPaidUnionIdResult } from '../../core/lib';
import { Injectable } from "@nestjs/common";
@Injectable()
export class AuthImpl extends Auth {
  async code2Session(
    appid: string,
    secret: string,
    js_code: string
  ): Promise<Code2SesstionResult> {
    return await axios({
      method: "GET",
      url: `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${js_code}&grant_type=authorization_code`
    }).then(res => res.data);
  }
  async getPaidUnionId(
    access_token: string,
    openid: string,
    transaction_id?: string,
    mch_id?: string,
    out_trade_no?: string
  ): Promise<GetPaidUnionIdResult> {
    return await axios({
        method: 'GET',
        url: `https://api.weixin.qq.com/wxa/getpaidunionid?access_token=${access_token}&openid=${openid}`
    }).then(res => res.data);
  }
  async getAccessToken(
      appid: string,
      secret: string
  ): Promise<GetAccessTokenResult> {
    return await axios({
        method: 'GET',
        url: `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${secret}`
    }).then(res => res.data);
  }
}
