export interface RoomFindInput {
    title?: string;
    roomLimitId?: number;
    roomTypeId?: number;
}

export interface RoomCreateInput {
    title: string;
    password: string;
    /** 场地黄金白银青铜 */
    roomTypeId: number;
    /** 段位 */
    roomLimitId: number;
    isHidden: boolean;
    openId: string;
    startType: string;
}