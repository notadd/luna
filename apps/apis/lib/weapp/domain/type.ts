export interface RoomFindInput {
    title?: string;
    roomLimitId?: number;
    roomTypeId?: number;
}

export interface RoomCreateInput {
    title: string;
    password?: string;
    /** 场地黄金白银青铜 */
    roomTypeId: number;
    /** 段位 */
    roomLimitId: number;
    isHidden: boolean;
    openId: string;
    startType: number;
}

export interface RoomType {
    id: number;
    title: string;
}

export interface RoomTypesFindResult {
    /** 房间段位 */
    roomLimitTypes: RoomType[];
    /** 房间场地 */
    roomTypes: RoomType[];
}

export interface TicketTitleAndCount {
    /** 卷的名字 */
    title: string;
    /** 卷的数量 */
    count: number;
}

export interface MemberTicketNumberResult {
    /** 用户的id */
    id: number;
    /** 用户的名字 */
    nickname: string;
    allTicketTitleAndCount: TicketTitleAndCount[]
}

export interface MemberHaveTicketCheck {
    openid: string;
    roomTypeId?: number;
    roomId?: number;
}
