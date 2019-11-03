interface PluginManagerErrorMsg {
    errcode: number;
    errmsg: string;
}
export abstract class PluginManager {
    /**
     * 向插件开发者发起使用插件的申请
     * @param access_token
     * @param action 此接口下填写 "apply"
     * @param plugin_appid 插件 appId
     * @param reason 申请使用理由
     */
    abstract async applyPlugin(
        access_token: string,
        action: "apply",
        plugin_appid: string,
        reason?: String
    ): Promise<PluginManagerErrorMsg>;

    /**
     * 获取当前所有插件使用方（供插件开发者调用）
     * @param access_token
     * @param action
     * @param page
     * @param num
     */
    abstract async getPluginDevApplyList(
        access_token: string,
        action: "dev_apply_list",
        page: number,
        num: number
    ): Promise<any>;
}
