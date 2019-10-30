export interface GetTempMediaResult {
  /** 数据类型 (MIME Type) */
  contentType?: string;
  /** 数据 Buffer */
  buffer?: Buffer;
  /** 错误码 */
  errCode?: number;
  /** 错误信息 */
  errMsg?: string;
}

export interface CommonErrorResult {
  /** 错误码 */
  errCode: number;
  /** 错误信息 */
  errMsg: string;
}

export type MsgType = "text" | "image" | "link" | "miniprogrampage";

export interface TextInput {
  content: string;
}

export interface ImageInput {
  /** 发送的图片的媒体ID，通过 新增素材接口 上传图片文件获得。 */
  media_id: string;
}

export interface LinkInput {
  /** 消息标题 */
  title: string;
  /** 图文链接消息 */
  description: string;
  /** 图文链接消息被点击后跳转的链接 */
  url: string;
  /** 图文链接消息的图片链接，支持 JPG、PNG 格式，较好的效果为大图 640 X 320，小图 80 X 80 */
  thumb_url: string;
}

export interface MiniprogrampageInput {
  title: string;
  pagepath: string;
  thumb_media_id: string;
}

export interface UploadTempMediaResult {
  /** 错误码 */
  errCode: number;
  /** 错误信息 */
  errMsg: string;
  /** 文件类型 */
  type: string;
  /** 媒体文件上传后，获取标识，3天内有效 */
  media_id: string;
  /** 媒体文件上传时间戳 */
  created_at: number;
}

export abstract class CustomerServiceMessage {
  /**
   * 获取客服消息内的临时素材。即下载临时的多媒体文件。目前小程序仅支持下载图片文件。
   * @param access_token 接口调用凭证
   * @param media_id 媒体文件 ID
   */
  abstract async getTempMedia(
    access_token: string,
    media_id: string
  ): Promise<GetTempMediaResult>;

  /**
   * 发送客服消息给用户。
   * @param access_token 接口调用凭证
   * @param touser 用户的 OpenID
   * @param msgtype 消息类型
   * @param text 文本消息，msgtype='text' 时必填
   * @param image 图片消息，msgtype='image' 时必填
   * @param link 图片消息，msgtype='link' 时必填
   * @param miniprogrampage 小程序卡片，msgtype='miniprogrampage' 时必填
   */
  abstract async send(
    access_token: string,
    touser: string,
    msgtype: MsgType,
    text?: TextInput,
    image?: ImageInput,
    link?: LinkInput,
    miniprogrampage?: MiniprogrampageInput
  ): Promise<CommonErrorResult>;

  /**
   * 下发客服当前输入状态给用户。
   * @param access_token 接口调用凭证
   * @param touser 用户的 OpenID
   * @param command 命令
   */
  abstract async setTyping(
    access_token: string,
    touser: string,
    command: "Typing" | "CancelTyping"
  ): Promise<CommonErrorResult>;

  /**
   * 把媒体文件上传到微信服务器。目前仅支持图片。
   * @param access_token 接口调用凭证
   * @param type 文件类型
   * @param media form-data 中媒体文件标识，有filename、filelength、content-type等信息
   */
  abstract async uploadTempMedia(
    access_token: string,
    media: Object,
    type: "image"
  ): Promise<UploadTempMediaResult>;
}
