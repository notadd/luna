export interface GetVisitTrendResult {
    /** 日期 */
    ref_date: string;
    /** 新增用户留存 */
    visit_uv_new: VisitUvNew;
    /** 活跃用户留存 */
    visit_uv: VisitUv;
}

export interface VisitUvNew {
    /** 标识，0开始，表示当天，1表示1天后。依此类推，key取值分别是：0,1,2,3,4,5,6,7,14,30 */
    key: number;
    /** key对应日期的新增用户数/活跃用户数（key=0时）或留存用户数（k>0时） */
    value: number;
}

export interface VisitUv {
    /** 标识，0开始，表示当天，1表示1天后。依此类推，key取值分别是：0,1,2,3,4,5,6,7,14,30 */
    key: number;
    /** key对应日期的新增用户数/活跃用户数（key=0时）或留存用户数（k>0时） */
    value: number;
}

export interface GetDailySummaryList {
    /** 日期，格式为 yyyymmdd */
    ref_date: string;
    /** 累计用户数 */
    visit_total: number;
    /** 转发次数 */
    share_pv: number;
    /** 转发人数 */
    share_uv: number;
}

export interface GetDailySummaryResult {
    list: GetDailySummaryList[];
}

export interface GetTrendList {
    /** 日期，格式为 yyyymmdd */
    ref_date: string;
    /** 打开次数 */
    session_cnt: number;
    /** 访问次数 */
    visit_pv: number;
    /** 访问人数 */
    visit_uv: number;
    /** 新用户数 */
    visit_uv_new: number;
    /** 人均停留时长 (浮点型，单位：秒) */
    stay_time_uv: number;
    /** 次均停留时长 (浮点型，单位：秒) */
    stay_time_session: number;
    /** 平均访问深度 (浮点型) */
    visit_depth: number;
}

export interface GetTrendResult {
    list: GetTrendList[];
}

export interface VisitUvNew {
    /** 分布类型 */
    index: number;
    /** 省份 */
    province: PortraitObj;
    /** 城市 */
    city: PortraitObj;
    /** 性别 */
    genders: PortraitObj;
    /** 终端类型，包括 iPhone，android，其他 */
    platforms: PortraitObj;
    /** 机型，如苹果 iPhone 6，OPPO R9 等 */
    devices: PortraitObj;
    /** 年龄，包括17岁以下、18-24岁等区间 */
    ages: PortraitObj;
}

export interface PortraitObj {
    /** 属性值id */
    id: number;
    /** 属性值名称，与id对应。如属性为 province 时，返回的属性值名称包括「广东」等。 */
    name: string;
    /** 该场景访问uv */
    access_source_visit_uv: number;
}

export interface GetUserPortraitResult {
    /** 时间范围，如："20170611-20170617" */
    ref_date: string;
    /** 新用户画像 */
    visit_uv_new: VisitUvNew;
    /** 活跃用户画像 */
    visit_uv: VisitUvNew;
}

export interface VisitUvNew {
    /** 分布类型 */
    index: number;
    /** 省份 */
    province: PortraitObj;
    /** 城市 */
    city: PortraitObj;
    /** 性别 */
    genders: PortraitObj;
    /** 终端类型，包括 iPhone，android，其他 */
    platforms: PortraitObj;
    /** 机型，如苹果 iPhone 6，OPPO R9 等 */
    devices: PortraitObj;
    /** 年龄，包括17岁以下、18-24岁等区间 */
    ages: PortraitObj;
}

export interface PortraitObj {
    /** 属性值id */
    id: number;
    /** 属性值名称，与id对应。如属性为 province 时，返回的属性值名称包括「广东」等。 */
    name: string;
    /** 该场景访问uv */
    access_source_visit_uv: number;
}

export interface GetUserPortraitResult {
    /** 时间范围，如："20170611-20170617" */
    ref_date: string;
    /** 新用户画像 */
    visit_uv_new: VisitUvNew;
    /** 活跃用户画像 */
    visit_uv: VisitUvNew;
}

export interface GetVisitDistributionResult {
    /** 日期，格式为 yyyymmdd */
    ref_date: string;
    /** 数据列表 */
    list: GetVisitDistributionItemList;
}

export interface GetVisitDistributionItemList {
    /** 分布类型 */
    index: number;
    /** 分布数据列表 */
    item_list: ItemList;
}

export interface ItemList {
    /** 场景 id */
    key: number;
    /** 该场景 id 访问 pv */
    value: number;
    /** 该场景 id 访问 uv */
    access_source_visit_uv: number;
}

export interface GetVisitPageResult {
    /** 页面路径 */
    page_path: string;
    /** 访问次数 */
    page_visit_pv: number;
    /** 访问人数 */
    page_visit_uv: number;
    /** 次均停留时长 */
    page_staytime_pv: number;
    /** 进入页次数 */
    entrypage_pv: number;
    /** 退出页次数 */
    exitpage_pv: number;
    /** 转发次数 */
    page_share_pv: number;
    /** 转发人数 */
    page_share_uv: number;
}

export abstract class Analysis {
    /**
     * 获取用户访问小程序日留存
     * @param access_token 接口调用凭证
     * @param begin_date 开始日期。格式为 yyyymmdd
     * @param end_date 结束日期，限定查询1天数据，允许设置的最大值为昨日。格式为 yyyymmdd
     */
    abstract async getDailyRetain(
        access_token: string,
        begin_date: string,
        end_date: string
    ): Promise<GetVisitTrendResult>;

    /**
     * 获取用户访问小程序月留存
     * @param access_token 接口调用凭证
     * @param begin_date 开始日期，为自然月第一天。格式为 yyyymmdd
     * @param end_date 结束日期，为自然月最后一天，限定查询一个月数据。格式为 yyyymmdd
     */
    abstract async getMonthlyRetain(
        access_token: string,
        begin_date: string,
        end_date: string
    ): Promise<GetVisitTrendResult>;

    /**
     * 获取用户访问小程序周留存
     * @param access_token 接口调用凭证
     * @param begin_date 开始日期，为自然月第一天。格式为 yyyymmdd
     * @param end_date 结束日期，为周日日期，限定查询一周数据。格式为 yyyymmdd
     */
    abstract async getWeeklyRetain(
        access_token: string,
        begin_date: string,
        end_date: string
    ): Promise<GetVisitTrendResult>;

    /**
     * 获取用户访问小程序数据概况
     * @param access_token 接口调用凭证
     * @param begin_date 开始日期。格式为 yyyymmdd
     * @param end_date 结束日期，限定查询1天数据，允许设置的最大值为昨日。格式为 yyyymmdd
     */
    abstract async getDailySummary(
        access_token: string,
        begin_date: string,
        end_date: string
    ): Promise<GetDailySummaryResult>;

    /**
     * 获取用户访问小程序数据日趋势
     * @param access_token 接口调用凭证
     * @param begin_date 开始日期。格式为 yyyymmdd
     * @param end_date 结束日期，限定查询1天数据，允许设置的最大值为昨日。格式为 yyyymmdd
     */
    abstract async getDailyVisitTrend(
        access_token: string,
        begin_date: string,
        end_date: string
    ): Promise<GetTrendResult[]>;
    /**
     * 获取用户访问小程序数据日趋势
     * @param access_token 接口调用凭证
     * @param begin_date 开始日期。格式为 yyyymmdd
     * @param end_date 结束日期，限定查询一个自然月的数据，允许设置的最大值为昨日。格式为 yyyymmdd
     */
    abstract async getMonthlyVisitTrend(
        access_token: string,
        begin_date: string,
        end_date: string
    ): Promise<GetTrendResult[]>;
    /**
     * 获取用户访问小程序数据日趋势
     * @param access_token 接口调用凭证
     * @param begin_date 开始日期。格式为 yyyymmdd
     * @param end_date 结束日期，限定查询一个自然周，允许设置的最大值为昨日。格式为 yyyymmdd
     */
    abstract async getWeeklyVisitTrend(
        access_token: string,
        begin_date: string,
        end_date: string
    ): Promise<GetTrendResult[]>;

    /**
     * 获取小程序新增或活跃用户的画像分布数据。
     * 时间范围支持昨天、最近7天、最近30天。
     * 其中，新增用户数为时间范围内首次访问小程序的去重用户数，
     * 活跃用户数为时间范围内访问过小程序的去重用户数。
     * @param access_token 接口调用凭证
     * @param begin_date 开始日期。格式为 yyyymmdd
     * @param end_date 结束日期，开始日期与结束日期相差的天数限定为0/6/29，分别表示查询最近1/7/30天数据，允许设置的最大值为昨日。格式为 yyyymmdd返回值
     */
    abstract async getUserPortrait(
        access_token: string,
        begin_date: string,
        end_date: string
    ): Promise<GetUserPortraitResult>;

    /**
     * 获取用户小程序访问分布数据
     * @param access_token 接口调用凭证
     * @param begin_date 开始日期。格式为 yyyymmdd
     * @param end_date 结束日期，限定查询 1 天数据，允许设置的最大值为昨日。格式为 yyyymmdd
     */
    abstract async getVisitDistribution(
        access_token: string,
        begin_date: string,
        end_date: string
    ): Promise<GetVisitDistributionResult>;

    /**
     * 目前只提供按 page_visit_pv 排序的 top200。
     * @param access_token 接口调用凭证
     * @param begin_date 开始日期。格式为 yyyymmdd
     * @param end_date 结束日期，限定查询1天数据，允许设置的最大值为昨日。格式为 yyyymmdd
     */
    abstract async getVisitPage(
        access_token: string,
        begin_date: string,
        end_date: string
    ): Promise<GetVisitPageResult>;
}
