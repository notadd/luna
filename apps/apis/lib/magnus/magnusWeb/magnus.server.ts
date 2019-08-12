import {
    Double,
    Float,
    Int32,
    Uint32,
    Sint32,
    Fixed32,
    Sfixed32,
    Int64,
    Uint64,
    Sint64,
    Fixed64,
    Sfixed64,
    Bool,
    String,
    Bytes,
    Empty
} from '@notadd/magnus-core';
import { Observable } from 'rxjs';

export interface RoomTypeInput {
	/*id*/
	id?: number;
	/*类型名*/
	title?: string;
	rooms?: RoomInput[];
}
export interface TixianLogInput {
	relations?: string[];
	id?: number;
	/*提现人*/
	member?: MemberInput;
	memberId?: number;
	/*提现数量*/
	count?: number;
	/*提现状态*/
	status?: number;
	/*提现时间*/
	createDate?: string;
}
export interface GameLogInput {
	relations?: string[];
	id?: number;
	/*输赢*/
	status?: number;
	/*注码*/
	count?: number;
	/*开始时间*/
	startTime?: number;
	/*结束时间*/
	endTime?: number;
	/*房间*/
	room?: RoomInput;
	roomId?: number;
	member?: MemberInput;
	memberId?: number;
	/*提现时间*/
	createDate?: string;
}
export interface TicketInput {
	id?: number;
	title?: string;
	/*领取记录*/
	logs?: TicketLogInput[];
}
export interface TicketLogInput {
	relations?: string[];
	id?: number;
	ticket?: TicketInput;
	ticket_Id?: number;
	member?: MemberInput;
	member_id?: number;
	/*提现时间*/
	createDate?: string;
}
export interface MemberInput {
	relations?: string[];
	id?: number;
	/*昵称*/
	nickname?: string;
	/*头像*/
	avatar?: string;
	/*电话*/
	mobile?: string;
	/*微信id*/
	openid?: string;
	/*余额*/
	fee?: number;
	/*金币*/
	fee2?: number;
	/*钻石*/
	fee3?: number;
	/*用户加入的房间*/
	rooms?: RoomInput[];
	/*用户创建的房间*/
	createRooms?: RoomInput[];
	/*提现记录*/
	tixianLogs?: TixianLogInput[];
	/*游戏记录*/
	gameLogs?: GameLogInput[];
	/*用户领取的劵*/
	ticketLogs?: TicketLogInput[];
	/*提现时间*/
	createDate?: string;
}
export interface RoomInput {
	relations?: string[];
	/*id*/
	id?: number;
	/*房间密码*/
	password?: string;
	/*房间类型*/
	roomType?: RoomTypeInput;
	roomTypeId?: number;
	/*自动开启*/
	autoStart?: boolean;
	/*房主*/
	owner?: MemberInput;
	ownerId?: number;
	/*加入房间的人*/
	members?: MemberInput[];
	gameLogs?: GameLogInput[];
	/*提现时间*/
	createDate?: string;
}
export interface RoomInputWhere {
	/*id 不等于*/
	id_Not?: number;
	/*id 在制定内，如[1,2]*/
	id_In?: number[];
	/*id 不在制定内,如[1,2]*/
	id_NotIn?: number[];
	/*id 小于*/
	id_Lt?: number;
	/*id 小于等于*/
	id_Lte?: number;
	/*id 大于*/
	id_Gt?: number;
	/*id 大于等于*/
	id_Gte?: number;
	/*id*/
	id?: number;
	/*房间密码 不等于*/
	password_Not?: string;
	/*房间密码 在制定内，如[1,2]*/
	password_In?: string[];
	/*房间密码 不在制定内,如[1,2]*/
	password_NotIn?: string[];
	/*房间密码 小于*/
	password_Lt?: string;
	/*房间密码 小于等于*/
	password_Lte?: string;
	/*房间密码 大于*/
	password_Gt?: string;
	/*房间密码 大于等于*/
	password_Gte?: string;
	/*房间密码 包含*/
	password_Contains?: string;
	/*房间密码 不包含*/
	password_NotContains?: string;
	/*房间密码 开头等于*/
	password_StartsWith?: string;
	/*房间密码 开头不等于*/
	password_NotStartsWith?: string;
	/*房间密码 结尾等于*/
	password_EndsWith?: string;
	/*房间密码 结尾不等于*/
	password_NotEndsWith?: string;
	/*房间密码*/
	password?: string;
	/**/
	roomTypeId_Not?: number;
	/**/
	roomTypeId_In?: number[];
	/**/
	roomTypeId_NotIn?: number[];
	/**/
	roomTypeId_Lt?: number;
	/**/
	roomTypeId_Lte?: number;
	/**/
	roomTypeId_Gt?: number;
	/**/
	roomTypeId_Gte?: number;
	roomTypeId?: number;
	/**/
	ownerId_Not?: number;
	/**/
	ownerId_In?: number[];
	/**/
	ownerId_NotIn?: number[];
	/**/
	ownerId_Lt?: number;
	/**/
	ownerId_Lte?: number;
	/**/
	ownerId_Gt?: number;
	/**/
	ownerId_Gte?: number;
	ownerId?: number;
	/*提现时间 不等于*/
	createDate_Not?: string;
	/*提现时间 在制定内，如[1,2]*/
	createDate_In?: string[];
	/*提现时间 不在制定内,如[1,2]*/
	createDate_NotIn?: string[];
	/*提现时间 小于*/
	createDate_Lt?: string;
	/*提现时间 小于等于*/
	createDate_Lte?: string;
	/*提现时间 大于*/
	createDate_Gt?: string;
	/*提现时间 大于等于*/
	createDate_Gte?: string;
	/*提现时间 包含*/
	createDate_Contains?: string;
	/*提现时间 不包含*/
	createDate_NotContains?: string;
	/*提现时间 开头等于*/
	createDate_StartsWith?: string;
	/*提现时间 开头不等于*/
	createDate_NotStartsWith?: string;
	/*提现时间 结尾等于*/
	createDate_EndsWith?: string;
	/*提现时间 结尾不等于*/
	createDate_NotEndsWith?: string;
	/*提现时间*/
	createDate?: string;
	AND?: RoomInputWhere[];
	OR?: RoomInputWhere[];
	NOT?: RoomInputWhere[];
}
export interface RoomInputOrder {
	relations?: string;
	/*id
排序可选值为ASC或者DESC*/
	id?: string;
	/*房间密码
排序可选值为ASC或者DESC*/
	password?: string;
	/*房间类型
排序可选值为ASC或者DESC*/
	roomType?: string;
	roomTypeId?: string;
	/*自动开启
排序可选值为ASC或者DESC*/
	autoStart?: string;
	/*房主
排序可选值为ASC或者DESC*/
	owner?: string;
	ownerId?: string;
	/*加入房间的人
排序可选值为ASC或者DESC*/
	members?: string;
	gameLogs?: string;
	/*提现时间
排序可选值为ASC或者DESC*/
	createDate?: string;
}
export interface PageLimitInput {
/*页码*/	page?: number;
/*每页数量*/	psize?: number;
}
export interface RoomType {
	/*id*/
	id?: number;
	/*类型名*/
	title?: string;
	rooms?: Room[];
	getRooms(where?: RoomInputWhere, order?: RoomInputOrder, limit?: PageLimitInput, __selection?: string): Room[];
}
export interface MemberInputWhere {
	/**/
	id_Not?: number;
	/**/
	id_In?: number[];
	/**/
	id_NotIn?: number[];
	/**/
	id_Lt?: number;
	/**/
	id_Lte?: number;
	/**/
	id_Gt?: number;
	/**/
	id_Gte?: number;
	id?: number;
	/*昵称 不等于*/
	nickname_Not?: string;
	/*昵称 在制定内，如[1,2]*/
	nickname_In?: string[];
	/*昵称 不在制定内,如[1,2]*/
	nickname_NotIn?: string[];
	/*昵称 小于*/
	nickname_Lt?: string;
	/*昵称 小于等于*/
	nickname_Lte?: string;
	/*昵称 大于*/
	nickname_Gt?: string;
	/*昵称 大于等于*/
	nickname_Gte?: string;
	/*昵称 包含*/
	nickname_Contains?: string;
	/*昵称 不包含*/
	nickname_NotContains?: string;
	/*昵称 开头等于*/
	nickname_StartsWith?: string;
	/*昵称 开头不等于*/
	nickname_NotStartsWith?: string;
	/*昵称 结尾等于*/
	nickname_EndsWith?: string;
	/*昵称 结尾不等于*/
	nickname_NotEndsWith?: string;
	/*昵称*/
	nickname?: string;
	/*头像 不等于*/
	avatar_Not?: string;
	/*头像 在制定内，如[1,2]*/
	avatar_In?: string[];
	/*头像 不在制定内,如[1,2]*/
	avatar_NotIn?: string[];
	/*头像 小于*/
	avatar_Lt?: string;
	/*头像 小于等于*/
	avatar_Lte?: string;
	/*头像 大于*/
	avatar_Gt?: string;
	/*头像 大于等于*/
	avatar_Gte?: string;
	/*头像 包含*/
	avatar_Contains?: string;
	/*头像 不包含*/
	avatar_NotContains?: string;
	/*头像 开头等于*/
	avatar_StartsWith?: string;
	/*头像 开头不等于*/
	avatar_NotStartsWith?: string;
	/*头像 结尾等于*/
	avatar_EndsWith?: string;
	/*头像 结尾不等于*/
	avatar_NotEndsWith?: string;
	/*头像*/
	avatar?: string;
	/*电话 不等于*/
	mobile_Not?: string;
	/*电话 在制定内，如[1,2]*/
	mobile_In?: string[];
	/*电话 不在制定内,如[1,2]*/
	mobile_NotIn?: string[];
	/*电话 小于*/
	mobile_Lt?: string;
	/*电话 小于等于*/
	mobile_Lte?: string;
	/*电话 大于*/
	mobile_Gt?: string;
	/*电话 大于等于*/
	mobile_Gte?: string;
	/*电话 包含*/
	mobile_Contains?: string;
	/*电话 不包含*/
	mobile_NotContains?: string;
	/*电话 开头等于*/
	mobile_StartsWith?: string;
	/*电话 开头不等于*/
	mobile_NotStartsWith?: string;
	/*电话 结尾等于*/
	mobile_EndsWith?: string;
	/*电话 结尾不等于*/
	mobile_NotEndsWith?: string;
	/*电话*/
	mobile?: string;
	/*微信id 不等于*/
	openid_Not?: string;
	/*微信id 在制定内，如[1,2]*/
	openid_In?: string[];
	/*微信id 不在制定内,如[1,2]*/
	openid_NotIn?: string[];
	/*微信id 小于*/
	openid_Lt?: string;
	/*微信id 小于等于*/
	openid_Lte?: string;
	/*微信id 大于*/
	openid_Gt?: string;
	/*微信id 大于等于*/
	openid_Gte?: string;
	/*微信id 包含*/
	openid_Contains?: string;
	/*微信id 不包含*/
	openid_NotContains?: string;
	/*微信id 开头等于*/
	openid_StartsWith?: string;
	/*微信id 开头不等于*/
	openid_NotStartsWith?: string;
	/*微信id 结尾等于*/
	openid_EndsWith?: string;
	/*微信id 结尾不等于*/
	openid_NotEndsWith?: string;
	/*微信id*/
	openid?: string;
	/*余额 不等于*/
	fee_Not?: number;
	/*余额 在制定内，如[1,2]*/
	fee_In?: number[];
	/*余额 不在制定内,如[1,2]*/
	fee_NotIn?: number[];
	/*余额 小于*/
	fee_Lt?: number;
	/*余额 小于等于*/
	fee_Lte?: number;
	/*余额 大于*/
	fee_Gt?: number;
	/*余额 大于等于*/
	fee_Gte?: number;
	/*余额*/
	fee?: number;
	/*金币 不等于*/
	fee2_Not?: number;
	/*金币 在制定内，如[1,2]*/
	fee2_In?: number[];
	/*金币 不在制定内,如[1,2]*/
	fee2_NotIn?: number[];
	/*金币 小于*/
	fee2_Lt?: number;
	/*金币 小于等于*/
	fee2_Lte?: number;
	/*金币 大于*/
	fee2_Gt?: number;
	/*金币 大于等于*/
	fee2_Gte?: number;
	/*金币*/
	fee2?: number;
	/*钻石 不等于*/
	fee3_Not?: number;
	/*钻石 在制定内，如[1,2]*/
	fee3_In?: number[];
	/*钻石 不在制定内,如[1,2]*/
	fee3_NotIn?: number[];
	/*钻石 小于*/
	fee3_Lt?: number;
	/*钻石 小于等于*/
	fee3_Lte?: number;
	/*钻石 大于*/
	fee3_Gt?: number;
	/*钻石 大于等于*/
	fee3_Gte?: number;
	/*钻石*/
	fee3?: number;
	/*提现时间 不等于*/
	createDate_Not?: string;
	/*提现时间 在制定内，如[1,2]*/
	createDate_In?: string[];
	/*提现时间 不在制定内,如[1,2]*/
	createDate_NotIn?: string[];
	/*提现时间 小于*/
	createDate_Lt?: string;
	/*提现时间 小于等于*/
	createDate_Lte?: string;
	/*提现时间 大于*/
	createDate_Gt?: string;
	/*提现时间 大于等于*/
	createDate_Gte?: string;
	/*提现时间 包含*/
	createDate_Contains?: string;
	/*提现时间 不包含*/
	createDate_NotContains?: string;
	/*提现时间 开头等于*/
	createDate_StartsWith?: string;
	/*提现时间 开头不等于*/
	createDate_NotStartsWith?: string;
	/*提现时间 结尾等于*/
	createDate_EndsWith?: string;
	/*提现时间 结尾不等于*/
	createDate_NotEndsWith?: string;
	/*提现时间*/
	createDate?: string;
	AND?: MemberInputWhere[];
	OR?: MemberInputWhere[];
	NOT?: MemberInputWhere[];
}
export interface MemberInputOrder {
	relations?: string;
	id?: string;
	/*昵称
排序可选值为ASC或者DESC*/
	nickname?: string;
	/*头像
排序可选值为ASC或者DESC*/
	avatar?: string;
	/*电话
排序可选值为ASC或者DESC*/
	mobile?: string;
	/*微信id
排序可选值为ASC或者DESC*/
	openid?: string;
	/*余额
排序可选值为ASC或者DESC*/
	fee?: string;
	/*金币
排序可选值为ASC或者DESC*/
	fee2?: string;
	/*钻石
排序可选值为ASC或者DESC*/
	fee3?: string;
	/*用户加入的房间
排序可选值为ASC或者DESC*/
	rooms?: string;
	/*用户创建的房间
排序可选值为ASC或者DESC*/
	createRooms?: string;
	/*提现记录
排序可选值为ASC或者DESC*/
	tixianLogs?: string;
	/*游戏记录
排序可选值为ASC或者DESC*/
	gameLogs?: string;
	/*用户领取的劵
排序可选值为ASC或者DESC*/
	ticketLogs?: string;
	/*提现时间
排序可选值为ASC或者DESC*/
	createDate?: string;
}
export interface GameLog {
	relations?: string[];
	id?: number;
	/*输赢*/
	status?: number;
	/*注码*/
	count?: number;
	/*开始时间*/
	startTime?: number;
	/*结束时间*/
	endTime?: number;
	/*房间*/
	room?: Room;
	roomId?: number;
	member?: Member;
	memberId?: number;
	/*提现时间*/
	createDate?: string;
}
export interface GameLogInputWhere {
	/**/
	id_Not?: number;
	/**/
	id_In?: number[];
	/**/
	id_NotIn?: number[];
	/**/
	id_Lt?: number;
	/**/
	id_Lte?: number;
	/**/
	id_Gt?: number;
	/**/
	id_Gte?: number;
	id?: number;
	/*输赢 不等于*/
	status_Not?: number;
	/*输赢 在制定内，如[1,2]*/
	status_In?: number[];
	/*输赢 不在制定内,如[1,2]*/
	status_NotIn?: number[];
	/*输赢 小于*/
	status_Lt?: number;
	/*输赢 小于等于*/
	status_Lte?: number;
	/*输赢 大于*/
	status_Gt?: number;
	/*输赢 大于等于*/
	status_Gte?: number;
	/*输赢*/
	status?: number;
	/*注码 不等于*/
	count_Not?: number;
	/*注码 在制定内，如[1,2]*/
	count_In?: number[];
	/*注码 不在制定内,如[1,2]*/
	count_NotIn?: number[];
	/*注码 小于*/
	count_Lt?: number;
	/*注码 小于等于*/
	count_Lte?: number;
	/*注码 大于*/
	count_Gt?: number;
	/*注码 大于等于*/
	count_Gte?: number;
	/*注码*/
	count?: number;
	/*开始时间 不等于*/
	startTime_Not?: number;
	/*开始时间 在制定内，如[1,2]*/
	startTime_In?: number[];
	/*开始时间 不在制定内,如[1,2]*/
	startTime_NotIn?: number[];
	/*开始时间 小于*/
	startTime_Lt?: number;
	/*开始时间 小于等于*/
	startTime_Lte?: number;
	/*开始时间 大于*/
	startTime_Gt?: number;
	/*开始时间 大于等于*/
	startTime_Gte?: number;
	/*开始时间*/
	startTime?: number;
	/*结束时间 不等于*/
	endTime_Not?: number;
	/*结束时间 在制定内，如[1,2]*/
	endTime_In?: number[];
	/*结束时间 不在制定内,如[1,2]*/
	endTime_NotIn?: number[];
	/*结束时间 小于*/
	endTime_Lt?: number;
	/*结束时间 小于等于*/
	endTime_Lte?: number;
	/*结束时间 大于*/
	endTime_Gt?: number;
	/*结束时间 大于等于*/
	endTime_Gte?: number;
	/*结束时间*/
	endTime?: number;
	/**/
	roomId_Not?: number;
	/**/
	roomId_In?: number[];
	/**/
	roomId_NotIn?: number[];
	/**/
	roomId_Lt?: number;
	/**/
	roomId_Lte?: number;
	/**/
	roomId_Gt?: number;
	/**/
	roomId_Gte?: number;
	roomId?: number;
	/**/
	memberId_Not?: number;
	/**/
	memberId_In?: number[];
	/**/
	memberId_NotIn?: number[];
	/**/
	memberId_Lt?: number;
	/**/
	memberId_Lte?: number;
	/**/
	memberId_Gt?: number;
	/**/
	memberId_Gte?: number;
	memberId?: number;
	/*提现时间 不等于*/
	createDate_Not?: string;
	/*提现时间 在制定内，如[1,2]*/
	createDate_In?: string[];
	/*提现时间 不在制定内,如[1,2]*/
	createDate_NotIn?: string[];
	/*提现时间 小于*/
	createDate_Lt?: string;
	/*提现时间 小于等于*/
	createDate_Lte?: string;
	/*提现时间 大于*/
	createDate_Gt?: string;
	/*提现时间 大于等于*/
	createDate_Gte?: string;
	/*提现时间 包含*/
	createDate_Contains?: string;
	/*提现时间 不包含*/
	createDate_NotContains?: string;
	/*提现时间 开头等于*/
	createDate_StartsWith?: string;
	/*提现时间 开头不等于*/
	createDate_NotStartsWith?: string;
	/*提现时间 结尾等于*/
	createDate_EndsWith?: string;
	/*提现时间 结尾不等于*/
	createDate_NotEndsWith?: string;
	/*提现时间*/
	createDate?: string;
	AND?: GameLogInputWhere[];
	OR?: GameLogInputWhere[];
	NOT?: GameLogInputWhere[];
}
export interface GameLogInputOrder {
	relations?: string;
	id?: string;
	/*输赢
排序可选值为ASC或者DESC*/
	status?: string;
	/*注码
排序可选值为ASC或者DESC*/
	count?: string;
	/*开始时间
排序可选值为ASC或者DESC*/
	startTime?: string;
	/*结束时间
排序可选值为ASC或者DESC*/
	endTime?: string;
	/*房间
排序可选值为ASC或者DESC*/
	room?: string;
	roomId?: string;
	member?: string;
	memberId?: string;
	/*提现时间
排序可选值为ASC或者DESC*/
	createDate?: string;
}
export interface Room {
	relations?: string[];
	/*id*/
	id?: number;
	/*房间密码*/
	password?: string;
	/*房间类型*/
	roomType?: RoomType;
	roomTypeId?: number;
	/*自动开启*/
	autoStart?: boolean;
	/*房主*/
	owner?: Member;
	ownerId?: number;
	/*加入房间的人*/
	members?: Member[];
	getMembers(where?: MemberInputWhere, order?: MemberInputOrder, limit?: PageLimitInput, __selection?: string): Member[];
	gameLogs?: GameLog[];
	getGameLogs(where?: GameLogInputWhere, order?: GameLogInputOrder, limit?: PageLimitInput, __selection?: string): GameLog[];
	/*提现时间*/
	createDate?: string;
}
export interface TixianLog {
	relations?: string[];
	id?: number;
	/*提现人*/
	member?: Member;
	memberId?: number;
	/*提现数量*/
	count?: number;
	/*提现状态*/
	status?: number;
	/*提现时间*/
	createDate?: string;
}
export interface TixianLogInputWhere {
	/**/
	id_Not?: number;
	/**/
	id_In?: number[];
	/**/
	id_NotIn?: number[];
	/**/
	id_Lt?: number;
	/**/
	id_Lte?: number;
	/**/
	id_Gt?: number;
	/**/
	id_Gte?: number;
	id?: number;
	/**/
	memberId_Not?: number;
	/**/
	memberId_In?: number[];
	/**/
	memberId_NotIn?: number[];
	/**/
	memberId_Lt?: number;
	/**/
	memberId_Lte?: number;
	/**/
	memberId_Gt?: number;
	/**/
	memberId_Gte?: number;
	memberId?: number;
	/*提现数量 不等于*/
	count_Not?: number;
	/*提现数量 在制定内，如[1,2]*/
	count_In?: number[];
	/*提现数量 不在制定内,如[1,2]*/
	count_NotIn?: number[];
	/*提现数量 小于*/
	count_Lt?: number;
	/*提现数量 小于等于*/
	count_Lte?: number;
	/*提现数量 大于*/
	count_Gt?: number;
	/*提现数量 大于等于*/
	count_Gte?: number;
	/*提现数量*/
	count?: number;
	/*提现状态 不等于*/
	status_Not?: number;
	/*提现状态 在制定内，如[1,2]*/
	status_In?: number[];
	/*提现状态 不在制定内,如[1,2]*/
	status_NotIn?: number[];
	/*提现状态 小于*/
	status_Lt?: number;
	/*提现状态 小于等于*/
	status_Lte?: number;
	/*提现状态 大于*/
	status_Gt?: number;
	/*提现状态 大于等于*/
	status_Gte?: number;
	/*提现状态*/
	status?: number;
	/*提现时间 不等于*/
	createDate_Not?: string;
	/*提现时间 在制定内，如[1,2]*/
	createDate_In?: string[];
	/*提现时间 不在制定内,如[1,2]*/
	createDate_NotIn?: string[];
	/*提现时间 小于*/
	createDate_Lt?: string;
	/*提现时间 小于等于*/
	createDate_Lte?: string;
	/*提现时间 大于*/
	createDate_Gt?: string;
	/*提现时间 大于等于*/
	createDate_Gte?: string;
	/*提现时间 包含*/
	createDate_Contains?: string;
	/*提现时间 不包含*/
	createDate_NotContains?: string;
	/*提现时间 开头等于*/
	createDate_StartsWith?: string;
	/*提现时间 开头不等于*/
	createDate_NotStartsWith?: string;
	/*提现时间 结尾等于*/
	createDate_EndsWith?: string;
	/*提现时间 结尾不等于*/
	createDate_NotEndsWith?: string;
	/*提现时间*/
	createDate?: string;
	AND?: TixianLogInputWhere[];
	OR?: TixianLogInputWhere[];
	NOT?: TixianLogInputWhere[];
}
export interface TixianLogInputOrder {
	relations?: string;
	id?: string;
	/*提现人
排序可选值为ASC或者DESC*/
	member?: string;
	memberId?: string;
	/*提现数量
排序可选值为ASC或者DESC*/
	count?: string;
	/*提现状态
排序可选值为ASC或者DESC*/
	status?: string;
	/*提现时间
排序可选值为ASC或者DESC*/
	createDate?: string;
}
export interface TicketLogInputWhere {
	/**/
	id_Not?: number;
	/**/
	id_In?: number[];
	/**/
	id_NotIn?: number[];
	/**/
	id_Lt?: number;
	/**/
	id_Lte?: number;
	/**/
	id_Gt?: number;
	/**/
	id_Gte?: number;
	id?: number;
	/**/
	ticket_Id_Not?: number;
	/**/
	ticket_Id_In?: number[];
	/**/
	ticket_Id_NotIn?: number[];
	/**/
	ticket_Id_Lt?: number;
	/**/
	ticket_Id_Lte?: number;
	/**/
	ticket_Id_Gt?: number;
	/**/
	ticket_Id_Gte?: number;
	ticket_Id?: number;
	/**/
	member_id_Not?: number;
	/**/
	member_id_In?: number[];
	/**/
	member_id_NotIn?: number[];
	/**/
	member_id_Lt?: number;
	/**/
	member_id_Lte?: number;
	/**/
	member_id_Gt?: number;
	/**/
	member_id_Gte?: number;
	member_id?: number;
	/*提现时间 不等于*/
	createDate_Not?: string;
	/*提现时间 在制定内，如[1,2]*/
	createDate_In?: string[];
	/*提现时间 不在制定内,如[1,2]*/
	createDate_NotIn?: string[];
	/*提现时间 小于*/
	createDate_Lt?: string;
	/*提现时间 小于等于*/
	createDate_Lte?: string;
	/*提现时间 大于*/
	createDate_Gt?: string;
	/*提现时间 大于等于*/
	createDate_Gte?: string;
	/*提现时间 包含*/
	createDate_Contains?: string;
	/*提现时间 不包含*/
	createDate_NotContains?: string;
	/*提现时间 开头等于*/
	createDate_StartsWith?: string;
	/*提现时间 开头不等于*/
	createDate_NotStartsWith?: string;
	/*提现时间 结尾等于*/
	createDate_EndsWith?: string;
	/*提现时间 结尾不等于*/
	createDate_NotEndsWith?: string;
	/*提现时间*/
	createDate?: string;
	AND?: TicketLogInputWhere[];
	OR?: TicketLogInputWhere[];
	NOT?: TicketLogInputWhere[];
}
export interface TicketLogInputOrder {
	relations?: string;
	id?: string;
	ticket?: string;
	ticket_Id?: string;
	member?: string;
	member_id?: string;
	/*提现时间
排序可选值为ASC或者DESC*/
	createDate?: string;
}
export interface Ticket {
	id?: number;
	title?: string;
	/*领取记录*/
	logs?: TicketLog[];
	getTicketLogs(where?: TicketLogInputWhere, order?: TicketLogInputOrder, limit?: PageLimitInput, __selection?: string): TicketLog[];
}
export interface TicketLog {
	relations?: string[];
	id?: number;
	ticket?: Ticket;
	ticket_Id?: number;
	member?: Member;
	member_id?: number;
	/*提现时间*/
	createDate?: string;
}
export interface Member {
	relations?: string[];
	id?: number;
	/*昵称*/
	nickname?: string;
	/*头像*/
	avatar?: string;
	/*电话*/
	mobile?: string;
	/*微信id*/
	openid?: string;
	/*余额*/
	fee?: number;
	/*金币*/
	fee2?: number;
	/*钻石*/
	fee3?: number;
	/*用户加入的房间*/
	rooms?: Room[];
	getRooms(where?: RoomInputWhere, order?: RoomInputOrder, limit?: PageLimitInput, __selection?: string): Room[];
	/*用户创建的房间*/
	createRooms?: Room[];
	getCreateRooms(where?: RoomInputWhere, order?: RoomInputOrder, limit?: PageLimitInput, __selection?: string): Room[];
	/*提现记录*/
	tixianLogs?: TixianLog[];
	getTixianLogs(where?: TixianLogInputWhere, order?: TixianLogInputOrder, limit?: PageLimitInput, __selection?: string): TixianLog[];
	/*游戏记录*/
	gameLogs?: GameLog[];
	getGameLogs(where?: GameLogInputWhere, order?: GameLogInputOrder, limit?: PageLimitInput, __selection?: string): GameLog[];
	/*用户领取的劵*/
	ticketLogs?: TicketLog[];
	getTicketLogs(where?: TicketLogInputWhere, order?: TicketLogInputOrder, limit?: PageLimitInput, __selection?: string): TicketLog[];
	/*提现时间*/
	createDate?: string;
}
export interface RoomTypeInputWhere {
	/*id 不等于*/
	id_Not?: number;
	/*id 在制定内，如[1,2]*/
	id_In?: number[];
	/*id 不在制定内,如[1,2]*/
	id_NotIn?: number[];
	/*id 小于*/
	id_Lt?: number;
	/*id 小于等于*/
	id_Lte?: number;
	/*id 大于*/
	id_Gt?: number;
	/*id 大于等于*/
	id_Gte?: number;
	/*id*/
	id?: number;
	/*类型名 不等于*/
	title_Not?: string;
	/*类型名 在制定内，如[1,2]*/
	title_In?: string[];
	/*类型名 不在制定内,如[1,2]*/
	title_NotIn?: string[];
	/*类型名 小于*/
	title_Lt?: string;
	/*类型名 小于等于*/
	title_Lte?: string;
	/*类型名 大于*/
	title_Gt?: string;
	/*类型名 大于等于*/
	title_Gte?: string;
	/*类型名 包含*/
	title_Contains?: string;
	/*类型名 不包含*/
	title_NotContains?: string;
	/*类型名 开头等于*/
	title_StartsWith?: string;
	/*类型名 开头不等于*/
	title_NotStartsWith?: string;
	/*类型名 结尾等于*/
	title_EndsWith?: string;
	/*类型名 结尾不等于*/
	title_NotEndsWith?: string;
	/*类型名*/
	title?: string;
	AND?: RoomTypeInputWhere[];
	OR?: RoomTypeInputWhere[];
	NOT?: RoomTypeInputWhere[];
}
export interface Setting {
	/*id*/
	id?: number;
	/*key*/
	key?: string;
	/*value*/
	value?: string;
}
export interface SettingInput {
	/*id*/
	id?: number;
	/*key*/
	key?: string;
	/*value*/
	value?: string;
}
export interface SettingInputWhere {
	/*id 不等于*/
	id_Not?: number;
	/*id 在制定内，如[1,2]*/
	id_In?: number[];
	/*id 不在制定内,如[1,2]*/
	id_NotIn?: number[];
	/*id 小于*/
	id_Lt?: number;
	/*id 小于等于*/
	id_Lte?: number;
	/*id 大于*/
	id_Gt?: number;
	/*id 大于等于*/
	id_Gte?: number;
	/*id*/
	id?: number;
	/*key 不等于*/
	key_Not?: string;
	/*key 在制定内，如[1,2]*/
	key_In?: string[];
	/*key 不在制定内,如[1,2]*/
	key_NotIn?: string[];
	/*key 小于*/
	key_Lt?: string;
	/*key 小于等于*/
	key_Lte?: string;
	/*key 大于*/
	key_Gt?: string;
	/*key 大于等于*/
	key_Gte?: string;
	/*key 包含*/
	key_Contains?: string;
	/*key 不包含*/
	key_NotContains?: string;
	/*key 开头等于*/
	key_StartsWith?: string;
	/*key 开头不等于*/
	key_NotStartsWith?: string;
	/*key 结尾等于*/
	key_EndsWith?: string;
	/*key 结尾不等于*/
	key_NotEndsWith?: string;
	/*key*/
	key?: string;
	/*value 不等于*/
	value_Not?: string;
	/*value 在制定内，如[1,2]*/
	value_In?: string[];
	/*value 不在制定内,如[1,2]*/
	value_NotIn?: string[];
	/*value 小于*/
	value_Lt?: string;
	/*value 小于等于*/
	value_Lte?: string;
	/*value 大于*/
	value_Gt?: string;
	/*value 大于等于*/
	value_Gte?: string;
	/*value 包含*/
	value_Contains?: string;
	/*value 不包含*/
	value_NotContains?: string;
	/*value 开头等于*/
	value_StartsWith?: string;
	/*value 开头不等于*/
	value_NotStartsWith?: string;
	/*value 结尾等于*/
	value_EndsWith?: string;
	/*value 结尾不等于*/
	value_NotEndsWith?: string;
	/*value*/
	value?: string;
	AND?: SettingInputWhere[];
	OR?: SettingInputWhere[];
	NOT?: SettingInputWhere[];
}
export interface TicketInputWhere {
	/**/
	id_Not?: number;
	/**/
	id_In?: number[];
	/**/
	id_NotIn?: number[];
	/**/
	id_Lt?: number;
	/**/
	id_Lte?: number;
	/**/
	id_Gt?: number;
	/**/
	id_Gte?: number;
	id?: number;
	/**/
	title_Not?: string;
	/**/
	title_In?: string[];
	/**/
	title_NotIn?: string[];
	/**/
	title_Lt?: string;
	/**/
	title_Lte?: string;
	/**/
	title_Gt?: string;
	/**/
	title_Gte?: string;
	/**/
	title_Contains?: string;
	/**/
	title_NotContains?: string;
	/**/
	title_StartsWith?: string;
	/**/
	title_NotStartsWith?: string;
	/**/
	title_EndsWith?: string;
	/**/
	title_NotEndsWith?: string;
	title?: string;
	AND?: TicketInputWhere[];
	OR?: TicketInputWhere[];
	NOT?: TicketInputWhere[];
}
export interface RoomTypeInputOrder {
	/*id
排序可选值为ASC或者DESC*/
	id?: string;
	/*类型名
排序可选值为ASC或者DESC*/
	title?: string;
	rooms?: string;
}
export interface SettingInputOrder {
	/*id
排序可选值为ASC或者DESC*/
	id?: string;
	/*key
排序可选值为ASC或者DESC*/
	key?: string;
	/*value
排序可选值为ASC或者DESC*/
	value?: string;
}
export interface TicketInputOrder {
	id?: string;
	title?: string;
	/*领取记录
排序可选值为ASC或者DESC*/
	logs?: string;
}
export interface MemberPartial {
	relations?: string[];
	id?: number;
	/*昵称*/
	nickname?: string;
	/*头像*/
	avatar?: string;
	/*电话*/
	mobile?: string;
	/*微信id*/
	openid?: string;
	/*余额*/
	fee?: number;
	/*金币*/
	fee2?: number;
	/*钻石*/
	fee3?: number;
	/*用户加入的房间*/
	rooms?: RoomInput[];
	/*用户创建的房间*/
	createRooms?: RoomInput[];
	/*提现记录*/
	tixianLogs?: TixianLogInput[];
	/*游戏记录*/
	gameLogs?: GameLogInput[];
	/*用户领取的劵*/
	ticketLogs?: TicketLogInput[];
	/*提现时间*/
	createDate?: string;
}
export interface RoomPartial {
	relations?: string[];
	/*id*/
	id?: number;
	/*房间密码*/
	password?: string;
	/*房间类型*/
	roomType?: RoomTypeInput;
	roomTypeId?: number;
	/*自动开启*/
	autoStart?: boolean;
	/*房主*/
	owner?: MemberInput;
	ownerId?: number;
	/*加入房间的人*/
	members?: MemberInput[];
	gameLogs?: GameLogInput[];
	/*提现时间*/
	createDate?: string;
}
export interface RoomTypePartial {
	/*id*/
	id?: number;
	/*类型名*/
	title?: string;
	rooms?: RoomInput[];
}
export interface SettingPartial {
	/*id*/
	id?: number;
	/*key*/
	key?: string;
	/*value*/
	value?: string;
}
export interface TixianLogPartial {
	relations?: string[];
	id?: number;
	/*提现人*/
	member?: MemberInput;
	memberId?: number;
	/*提现数量*/
	count?: number;
	/*提现状态*/
	status?: number;
	/*提现时间*/
	createDate?: string;
}
export interface GameLogPartial {
	relations?: string[];
	id?: number;
	/*输赢*/
	status?: number;
	/*注码*/
	count?: number;
	/*开始时间*/
	startTime?: number;
	/*结束时间*/
	endTime?: number;
	/*房间*/
	room?: RoomInput;
	roomId?: number;
	member?: MemberInput;
	memberId?: number;
	/*提现时间*/
	createDate?: string;
}
export interface TicketPartial {
	id?: number;
	title?: string;
	/*领取记录*/
	logs?: TicketLogInput[];
}
export interface TicketLogPartial {
	relations?: string[];
	id?: number;
	ticket?: TicketInput;
	ticket_Id?: number;
	member?: MemberInput;
	member_id?: number;
	/*提现时间*/
	createDate?: string;
}
export interface Query {
	/*通过指定条件获取一条数据*/
	getMember<T>(/*条件*/entity: MemberInputWhere, __selection?: string): Promise<T & Member>;
	/*通过指定条件获取一条数据*/
	getRoom<T>(/*条件*/entity: RoomInputWhere, __selection?: string): Promise<T & Room>;
	/*通过指定条件获取一条数据*/
	getRoomType<T>(/*条件*/entity: RoomTypeInputWhere, __selection?: string): Promise<T & RoomType>;
	/*通过指定条件获取一条数据*/
	getSetting<T>(/*条件*/entity: SettingInputWhere, __selection?: string): Promise<T & Setting>;
	/*通过指定条件获取一条数据*/
	getTixianLog<T>(/*条件*/entity: TixianLogInputWhere, __selection?: string): Promise<T & TixianLog>;
	/*通过指定条件获取一条数据*/
	getGameLog<T>(/*条件*/entity: GameLogInputWhere, __selection?: string): Promise<T & GameLog>;
	/*通过指定条件获取一条数据*/
	getTicket<T>(/*条件*/entity: TicketInputWhere, __selection?: string): Promise<T & Ticket>;
	/*通过指定条件获取一条数据*/
	getTicketLog<T>(/*条件*/entity: TicketLogInputWhere, __selection?: string): Promise<T & TicketLog>;
	/*通过制定条件获取一组数据*/
	findMember<T>(/*条件*/entity: MemberInputWhere, order: MemberInputOrder, limit?: PageLimitInput, __selection?: string): Promise<T & Member[]>;
	/*通过制定条件获取一组数据*/
	findRoom<T>(/*条件*/entity: RoomInputWhere, order: RoomInputOrder, limit?: PageLimitInput, __selection?: string): Promise<T & Room[]>;
	/*通过制定条件获取一组数据*/
	findRoomType<T>(/*条件*/entity: RoomTypeInputWhere, order: RoomTypeInputOrder, limit?: PageLimitInput, __selection?: string): Promise<T & RoomType[]>;
	/*通过制定条件获取一组数据*/
	findSetting<T>(/*条件*/entity: SettingInputWhere, order: SettingInputOrder, limit?: PageLimitInput, __selection?: string): Promise<T & Setting[]>;
	/*通过制定条件获取一组数据*/
	findTixianLog<T>(/*条件*/entity: TixianLogInputWhere, order: TixianLogInputOrder, limit?: PageLimitInput, __selection?: string): Promise<T & TixianLog[]>;
	/*通过制定条件获取一组数据*/
	findGameLog<T>(/*条件*/entity: GameLogInputWhere, order: GameLogInputOrder, limit?: PageLimitInput, __selection?: string): Promise<T & GameLog[]>;
	/*通过制定条件获取一组数据*/
	findTicket<T>(/*条件*/entity: TicketInputWhere, order: TicketInputOrder, limit?: PageLimitInput, __selection?: string): Promise<T & Ticket[]>;
	/*通过制定条件获取一组数据*/
	findTicketLog<T>(/*条件*/entity: TicketLogInputWhere, order: TicketLogInputOrder, limit?: PageLimitInput, __selection?: string): Promise<T & TicketLog[]>;
	/*通过制定条件获取一组数据*/
	countMember<T>(__selection?: string): Promise<T & number>;
	/*通过制定条件获取一组数据*/
	countRoom<T>(__selection?: string): Promise<T & number>;
	/*通过制定条件获取一组数据*/
	countRoomType<T>(__selection?: string): Promise<T & number>;
	/*通过制定条件获取一组数据*/
	countSetting<T>(__selection?: string): Promise<T & number>;
	/*通过制定条件获取一组数据*/
	countTixianLog<T>(__selection?: string): Promise<T & number>;
	/*通过制定条件获取一组数据*/
	countGameLog<T>(__selection?: string): Promise<T & number>;
	/*通过制定条件获取一组数据*/
	countTicket<T>(__selection?: string): Promise<T & number>;
	/*通过制定条件获取一组数据*/
	countTicketLog<T>(__selection?: string): Promise<T & number>;
}
export interface Mutation {
	/*没有就插入，有就更新*/
	saveMember<T>(/*要保存的数据*/entity: MemberInput, __selection?: string): Promise<T & Member>;
	/*没有就插入，有就更新*/
	saveRoom<T>(/*要保存的数据*/entity: RoomInput, __selection?: string): Promise<T & Room>;
	/*没有就插入，有就更新*/
	saveRoomType<T>(/*要保存的数据*/entity: RoomTypeInput, __selection?: string): Promise<T & RoomType>;
	/*没有就插入，有就更新*/
	saveSetting<T>(/*要保存的数据*/entity: SettingInput, __selection?: string): Promise<T & Setting>;
	/*没有就插入，有就更新*/
	saveTixianLog<T>(/*要保存的数据*/entity: TixianLogInput, __selection?: string): Promise<T & TixianLog>;
	/*没有就插入，有就更新*/
	saveGameLog<T>(/*要保存的数据*/entity: GameLogInput, __selection?: string): Promise<T & GameLog>;
	/*没有就插入，有就更新*/
	saveTicket<T>(/*要保存的数据*/entity: TicketInput, __selection?: string): Promise<T & Ticket>;
	/*没有就插入，有就更新*/
	saveTicketLog<T>(/*要保存的数据*/entity: TicketLogInput, __selection?: string): Promise<T & TicketLog>;
	/*插入数据*/
	insertMember<T>(/*要插入的数据*/entity: MemberInput, __selection?: string): Promise<T & Member>;
	/*插入数据*/
	insertRoom<T>(/*要插入的数据*/entity: RoomInput, __selection?: string): Promise<T & Room>;
	/*插入数据*/
	insertRoomType<T>(/*要插入的数据*/entity: RoomTypeInput, __selection?: string): Promise<T & RoomType>;
	/*插入数据*/
	insertSetting<T>(/*要插入的数据*/entity: SettingInput, __selection?: string): Promise<T & Setting>;
	/*插入数据*/
	insertTixianLog<T>(/*要插入的数据*/entity: TixianLogInput, __selection?: string): Promise<T & TixianLog>;
	/*插入数据*/
	insertGameLog<T>(/*要插入的数据*/entity: GameLogInput, __selection?: string): Promise<T & GameLog>;
	/*插入数据*/
	insertTicket<T>(/*要插入的数据*/entity: TicketInput, __selection?: string): Promise<T & Ticket>;
	/*插入数据*/
	insertTicketLog<T>(/*要插入的数据*/entity: TicketLogInput, __selection?: string): Promise<T & TicketLog>;
	/*更新数据*/
	updateMember<T>(/**/where: MemberPartial, entity: MemberInput, __selection?: string): Promise<T & Member>;
	/*更新数据*/
	updateRoom<T>(/**/where: RoomPartial, entity: RoomInput, __selection?: string): Promise<T & Room>;
	/*更新数据*/
	updateRoomType<T>(/**/where: RoomTypePartial, entity: RoomTypeInput, __selection?: string): Promise<T & RoomType>;
	/*更新数据*/
	updateSetting<T>(/**/where: SettingPartial, entity: SettingInput, __selection?: string): Promise<T & Setting>;
	/*更新数据*/
	updateTixianLog<T>(/**/where: TixianLogPartial, entity: TixianLogInput, __selection?: string): Promise<T & TixianLog>;
	/*更新数据*/
	updateGameLog<T>(/**/where: GameLogPartial, entity: GameLogInput, __selection?: string): Promise<T & GameLog>;
	/*更新数据*/
	updateTicket<T>(/**/where: TicketPartial, entity: TicketInput, __selection?: string): Promise<T & Ticket>;
	/*更新数据*/
	updateTicketLog<T>(/**/where: TicketLogPartial, entity: TicketLogInput, __selection?: string): Promise<T & TicketLog>;
	/*res
删除*/
	deleteMember<T>(/*根据id删除*/id: number, __selection?: string): Promise<T & boolean>;
	/*res
删除*/
	deleteRoom<T>(/*根据id删除*/id: number, __selection?: string): Promise<T & boolean>;
	/*res
删除*/
	deleteRoomType<T>(/*根据id删除*/id: number, __selection?: string): Promise<T & boolean>;
	/*res
删除*/
	deleteSetting<T>(/*根据id删除*/id: number, __selection?: string): Promise<T & boolean>;
	/*res
删除*/
	deleteTixianLog<T>(/*根据id删除*/id: number, __selection?: string): Promise<T & boolean>;
	/*res
删除*/
	deleteGameLog<T>(/*根据id删除*/id: number, __selection?: string): Promise<T & boolean>;
	/*res
删除*/
	deleteTicket<T>(/*根据id删除*/id: number, __selection?: string): Promise<T & boolean>;
	/*res
删除*/
	deleteTicketLog<T>(/*根据id删除*/id: number, __selection?: string): Promise<T & boolean>;
}