export interface SubscribeMessageErrorMsg {
    errcode: number;
    errmsg: string;
}

export abstract class SubscribeMessage {
    /**
     * 发送订阅消息
     * @param touser 接收者（用户）的 openid
     * @param template_id 所需下发的订阅模板id
     * @param data 点击模板卡片后的跳转页面，仅限本小程序内的页面。支持带参数
     * @param page 模板内容，格式形如 { "key1": { "value": any }, "key2": { "value": any } }返回值
     */
    abstract async send(
        access_token: string,
        touser: string,
        template_id: string,
        data: Object,
        page?: string
    ): Promise<SubscribeMessageErrorMsg>;
}
