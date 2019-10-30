export interface Code2SesstionResult {
  /** 用户唯一标识 */
  openid: string;
  /** 会话密钥 */
  session_key: string;
  /** 用户在开放平台的唯一标识符，在满足 UnionID 下发条件的情况下会返回，详见 UnionID 机制说明。*/
  unionid: string;
  /** 错误码 */
  errcode: number;
  /** 错误信息 */
  errmsg: string;
}

export interface GetPaidUnionIdResult {
  /** 用户唯一标识，调用成功后返回 */
  unionid: string;
  /** 错误码 */
  errcode: number;
  /** 错误信息 */
  errmsg: string;
}

export interface GetAccessTokenResult {
  /** 获取到的凭证 */
  access_token: string;
  /** 凭证有效时间，单位：秒。目前是7200秒之内的值。 */
  expires_in: number;
  /** 错误码 */
  errcode: number;
  /** 错误信息 */
  errmsg: string;
}

export abstract class Auth {
  /**
   * 登录凭证校验
   * @param appid 小程序 appId
   * @param secret 小程序 appSecret
   * @param js_code 登录时获取的 code
   */
  abstract async code2Session(
    appid: string,
    secret: string,
    js_code: string
  ): Promise<Code2SesstionResult>;

  /**
   * 用户支付完成后，获取该用户的 UnionId，无需用户授权。
   * @param accessToken
   * @param openid
   * @param transactionId
   * @param mchId
   * @param outTradeNo
   */
  abstract async getPaidUnionId(
    access_token: string,
    openid: string,
    transaction_id?: string,
    mch_id?: string,
    out_trade_no?: string
  ): Promise<GetPaidUnionIdResult>;

  /**
   * 获取小程序全局唯一后台接口调用凭据（access_token）。
   * @param grant_type 填写 client_credential
   * @param appid
   * @param secret
   */
  abstract async getAccessToken(
    appid: string,
    secret: string
  ): Promise<GetAccessTokenResult>;
}
