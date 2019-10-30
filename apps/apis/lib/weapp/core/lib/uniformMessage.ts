export interface WeappTemplateMsg {
  /** 小程序模板ID */
  template_id: string;
  /** 小程序页面路径 */
  page: string;
  /** 小程序模板消息formid */
  form_id: string;
  /** 小程序模板数据 */
  data: string;
  /** 小程序模板放大关键词 */
  emphasis_keyword: string;
}

export interface MpTemplateMsg {
  /** 公众号appid，要求与小程序有绑定且同主体 */
  appid: string;
  /** 公众号模板id */
  template_id: string;
  /** 公众号模板消息所要跳转的url */
  url: string;
  /** 公众号模板消息所要跳转的小程序，小程序的必须与公众号具有绑定关系 */
  miniprogram: string;
  /** 公众号模板消息的数据 */
  data: string;
}

export interface UniformMessageErrorMsg {
  errcode?: number;
  errmsg?: string;
}

export abstract class UniformMessage {
  abstract async send(
    access_token: string,
    touser: string,
    mp_template_msg: MpTemplateMsg,
    weapp_template_msg?: WeappTemplateMsg
  ): Promise<UniformMessageErrorMsg>;
}
