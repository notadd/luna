export interface CreateActivityId {
  /** 动态消息的 ID */
  activity_id?: string;
  /** activity_id 的过期时间戳。默认24小时后过期 */
  expiration_time?: number;
  /** 错误码 */
  errcode?: number;
}

export interface SetUpdatableMsgError {
  errcode: number;
  errmsg: string;
}

export interface TemplateInfo {
  parameter_list: ParameterList[];
}

export interface ParameterList {
  name: string;
  value: string;
}

export abstract class UpdatableMessage {
  /** 创建被分享动态消息的 activity_id */
  abstract async createActivityId(
    access_token: string
  ): Promise<CreateActivityId>;

  /**
   * 修改被分享的动态消息
   * @param access_token 
   * @param activity_id 动态消息的 ID，
   * @param target_state 动态消息修改后的状态
   * @param template_info 动态消息对应的模板信息
   */
  abstract async setUpdatableMsg(
    access_token: string,
    activity_id: string,
    target_state: number,
    template_info: TemplateInfo
  ): Promise<SetUpdatableMsgError>;
}
