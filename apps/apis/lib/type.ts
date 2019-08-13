import { findTiXianLog } from "./graphql/apiTiXianLog";

export interface FindMemberInput {
    page?: number;
    psize?: number;
}

export interface FindMemberResult {
    code: number;
    message: string;
    count: number;
    data: FindMemberData[];
}

export interface FindMemberData {
    id: number;
    nickname: string;
    avatar: string;
    mobile: string;
    // 余额
    fee: number;
    // 金币
    fee2: number;
    // 钻石
    fee3: number;
    gameCount: number;
}

export interface FindRoomTypeResult {
    code: number;
    message: string;
    data: FindRoomTypeData[];
}
export interface FindRoomTypeData {
    id: number;
    title: string;
    roomCount: number;
}

export interface FindRoomInput {
    page: number;
    psize: number;
}

export interface FindRoomResult {
    code: number;
    message: string;
    count: number;
    data: FindRoomData[];
}

export interface FindRoomData {
    id: number;
    status: number;
    memberName: string[];
    createUserName: string;
}

export interface FindTiXianLogInput {
    page: number;
    psize: number;
}

export interface FindTiXianLogData {
    id: number;
    moneyCount: number;
    nickname: string;
    status: number;
    createDate: string;
}

export interface FindTiXianLogResult {
    code: number;
    message: string;
    count: number;
    data: FindTiXianLogData[];
}
