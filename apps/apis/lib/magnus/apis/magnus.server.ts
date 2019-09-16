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
        Empty,
        ID
    } from '@notadd/magnus-core';
    import { Observable } from 'rxjs';
    
export interface RoomType {
	/*id*/
	id?: number;
	/*类型名*/
	title?: string;
	rooms?: Room[];
}
/*段位限制*/
export interface RoomLimit {
	id?: number;
	title?: string;
	rooms?: Room[];
}
export interface GameLog {
	id?: number;
	/*输赢*/
	status?: number;
	/*注码*/
	count?: number;
	/*开始时间*/
	startTime?: string;
	/*结束时间*/
	endTime?: string;
	/*房间*/
	room?: Room;
	roomId?: number;
	members?: Member[];
	memberId?: number;
	/*提现时间*/
	createDate?: string;
}
export interface Room {
	/*房间名称*/
	title?: string;
	/*隐藏房间*/
	isHidden?: boolean;
	/*id*/
	id?: number;
	/*房间密码*/
	password?: string;
	/*开始方式*/
	startType?: string;
	/*房间类型、场地选择*/
	roomType?: RoomType;
	/*段位限制*/
	roomLimit?: RoomLimit;
	roomTypeId?: number;
	/*房主*/
	owner?: Member;
	/*房主id*/
	ownerId?: number;
	/*加入房间的人*/
	members?: Member[];
	/*游戏记录*/
	gameLogs?: GameLog[];
	/*提现时间*/
	createDate?: string;
}
export interface TixianLog {
	relations?: string[];
	id?: number;
	/*提现人*/
	member?: Member;
	memberId?: number;
	getMember(__selection?: string): Member;
	/*提现数量*/
	count?: number;
	/*提现状态*/
	status?: number;
	/*提现时间*/
	createDate?: string;
}
export interface Ticket {
	id?: number;
	/*名称*/
	title?: string;
	/*金币*/
	fee?: number;
	/*总数*/
	count?: number;
	/*领取记录*/
	logs?: TicketLog[];
	createDate?: string;
	updateDate?: string;
}
export interface TicketLog {
	relations?: string[];
	id?: number;
	ticket?: Ticket;
	ticket_Id?: number;
	member?: Member;
	member_id?: number;
	createDate?: string;
}
export interface Account {
	id?: number;
	nickname?: string;
	steamId?: string;
	member?: Member;
	level?: string;
}
export interface Member {
	id?: number;
	/*昵称*/
	nickname?: string;
	/*密码*/
	password?: string;
	/*头像*/
	avatar?: string;
	/*电话*/
	mobile?: string;
	/*微信id*/
	openid?: string;
	/*状态 0禁用 1正常*/
	status?: number;
	/*余额*/
	fee?: number;
	/*金币*/
	fee2?: number;
	/*钻石*/
	fee3?: number;
	/*用户加入的房间*/
	rooms?: Room[];
	/*用户创建的房间*/
	createRooms?: Room[];
	/*提现记录*/
	tixianLogs?: TixianLog[];
	/*游戏记录*/
	gameLogs?: GameLog[];
	/*用户领取的劵*/
	ticketLogs?: TicketLog[];
	/*提现时间*/
	createDate?: string;
	account?: Account;
}
export interface GameLogListResult {
	list?: GameLog[];
	count?: number;
}
export interface GameLogListMessages {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码
#### 6-8位
> 业务编码*/
	code?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: GameLogListResult;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
}
export interface GameLogWhere {
/* 在制定内，如[1,2,3,...]*/	id_In?: number[];
/* 小于*/	id_Lt?: number;
/* 小于等于*/	id_Lte?: number;
/* 大于*/	id_Gt?: number;
/* 大于等于*/	id_Gte?: number;
/* 指定范围[min,max]*/	id_Between?: number[];
/* 等于*/	id?: number;
/*输赢 等于*/	status?: number;
/*注码 等于*/	count?: number;
/*开始时间 包含,左{title: "a%"} 右边{title: "%a"} 包含{title: "%a%"}*/	startTime_Like?: string;
/*开始时间 等于*/	startTime?: string;
/*结束时间 包含,左{title: "a%"} 右边{title: "%a"} 包含{title: "%a%"}*/	endTime_Like?: string;
/*结束时间 等于*/	endTime?: string;
/* 等于*/	roomId?: number;
/* 等于*/	memberId?: number;
/*提现时间 小于*/	createDate_Lt?: Date;
/*提现时间 小于等于*/	createDate_Lte?: Date;
/*提现时间 大于*/	createDate_Gt?: Date;
/*提现时间 大于等于*/	createDate_Gte?: Date;
/*提现时间 指定范围[min,max]*/	createDate_Between?: Date[];
/*提现时间 等于*/	createDate?: string;
/**/	AND?: GameLogWhere[];
/**/	OR?: GameLogWhere[];
}
export interface GameLogOrder {
/* ASC 升序 DESC降序*/	id?: string;
/*输赢 ASC 升序 DESC降序*/	status?: string;
/*注码 ASC 升序 DESC降序*/	count?: string;
/* ASC 升序 DESC降序*/	roomId?: string;
/* ASC 升序 DESC降序*/	memberId?: string;
/*提现时间 ASC 升序 DESC降序*/	createDate?: string;
}
export interface LimitInput {
	page?: number;
	psize?: number;
}
export interface AccountListResult {
	list?: Account[];
	count?: number;
}
export interface AccountListMessages {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码
#### 6-8位
> 业务编码*/
	code?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: AccountListResult;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
}
export interface AccountWhere {
/* 在制定内，如[1,2,3,...]*/	id_In?: number[];
/* 小于*/	id_Lt?: number;
/* 小于等于*/	id_Lte?: number;
/* 大于*/	id_Gt?: number;
/* 大于等于*/	id_Gte?: number;
/* 指定范围[min,max]*/	id_Between?: number[];
/* 等于*/	id?: number;
/* 包含,左{title: "a%"} 右边{title: "%a"} 包含{title: "%a%"}*/	nickname_Like?: string;
/* 等于*/	nickname?: string;
/* 包含,左{title: "a%"} 右边{title: "%a"} 包含{title: "%a%"}*/	steamId_Like?: string;
/* 等于*/	steamId?: string;
/* 包含,左{title: "a%"} 右边{title: "%a"} 包含{title: "%a%"}*/	level_Like?: string;
/* 等于*/	level?: string;
/**/	AND?: AccountWhere[];
/**/	OR?: AccountWhere[];
}
export interface AccountOrder {
/* ASC 升序 DESC降序*/	id?: string;
}
export interface MemberListResult {
	list?: Member[];
	count?: number;
}
export interface MemberListMessages {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码
#### 6-8位
> 业务编码*/
	code?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: MemberListResult;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
}
export interface MemberWhere {
/* 在制定内，如[1,2,3,...]*/	id_In?: number[];
/* 小于*/	id_Lt?: number;
/* 小于等于*/	id_Lte?: number;
/* 大于*/	id_Gt?: number;
/* 大于等于*/	id_Gte?: number;
/* 指定范围[min,max]*/	id_Between?: number[];
/* 等于*/	id?: number;
/*昵称 包含,左{title: "a%"} 右边{title: "%a"} 包含{title: "%a%"}*/	nickname_Like?: string;
/*昵称 等于*/	nickname?: string;
/*密码 包含,左{title: "a%"} 右边{title: "%a"} 包含{title: "%a%"}*/	password_Like?: string;
/*密码 等于*/	password?: string;
/*头像 包含,左{title: "a%"} 右边{title: "%a"} 包含{title: "%a%"}*/	avatar_Like?: string;
/*头像 等于*/	avatar?: string;
/*电话 包含,左{title: "a%"} 右边{title: "%a"} 包含{title: "%a%"}*/	mobile_Like?: string;
/*电话 等于*/	mobile?: string;
/*微信id 包含,左{title: "a%"} 右边{title: "%a"} 包含{title: "%a%"}*/	openid_Like?: string;
/*微信id 等于*/	openid?: string;
/*状态 0禁用 1正常 等于*/	status?: number;
/*余额 等于*/	fee?: number;
/*金币 等于*/	fee2?: number;
/*钻石 等于*/	fee3?: number;
/*提现时间 小于*/	createDate_Lt?: Date;
/*提现时间 小于等于*/	createDate_Lte?: Date;
/*提现时间 大于*/	createDate_Gt?: Date;
/*提现时间 大于等于*/	createDate_Gte?: Date;
/*提现时间 指定范围[min,max]*/	createDate_Between?: Date[];
/*提现时间 等于*/	createDate?: string;
/**/	AND?: MemberWhere[];
/**/	OR?: MemberWhere[];
}
export interface MemberOrder {
/* ASC 升序 DESC降序*/	id?: string;
/*状态 0禁用 1正常 ASC 升序 DESC降序*/	status?: string;
/*余额 ASC 升序 DESC降序*/	fee?: string;
/*金币 ASC 升序 DESC降序*/	fee2?: string;
/*钻石 ASC 升序 DESC降序*/	fee3?: string;
/*提现时间 ASC 升序 DESC降序*/	createDate?: string;
}
export interface RoomListResult {
	list?: Room[];
	count?: number;
}
export interface RoomListMessages {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码
#### 6-8位
> 业务编码*/
	code?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: RoomListResult;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
}
export interface RoomWhere {
/*房间名称 包含,左{title: "a%"} 右边{title: "%a"} 包含{title: "%a%"}*/	title_Like?: string;
/*房间名称 等于*/	title?: string;
/*隐藏房间 等于*/	isHidden?: boolean;
/*id 在制定内，如[1,2,3,...]*/	id_In?: number[];
/*id 小于*/	id_Lt?: number;
/*id 小于等于*/	id_Lte?: number;
/*id 大于*/	id_Gt?: number;
/*id 大于等于*/	id_Gte?: number;
/*id 指定范围[min,max]*/	id_Between?: number[];
/*id 等于*/	id?: number;
/*房间密码 包含,左{title: "a%"} 右边{title: "%a"} 包含{title: "%a%"}*/	password_Like?: string;
/*房间密码 等于*/	password?: string;
/*开始方式 包含,左{title: "a%"} 右边{title: "%a"} 包含{title: "%a%"}*/	startType_Like?: string;
/*开始方式 等于*/	startType?: string;
/* 等于*/	roomTypeId?: number;
/*房主id 等于*/	ownerId?: number;
/*提现时间 小于*/	createDate_Lt?: Date;
/*提现时间 小于等于*/	createDate_Lte?: Date;
/*提现时间 大于*/	createDate_Gt?: Date;
/*提现时间 大于等于*/	createDate_Gte?: Date;
/*提现时间 指定范围[min,max]*/	createDate_Between?: Date[];
/*提现时间 等于*/	createDate?: string;
/**/	AND?: RoomWhere[];
/**/	OR?: RoomWhere[];
}
export interface RoomOrder {
/*id ASC 升序 DESC降序*/	id?: string;
/* ASC 升序 DESC降序*/	roomTypeId?: string;
/*房主id ASC 升序 DESC降序*/	ownerId?: string;
/*提现时间 ASC 升序 DESC降序*/	createDate?: string;
}
export interface RoomLimitListResult {
	list?: RoomLimit[];
	count?: number;
}
export interface RoomLimitListMessages {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码
#### 6-8位
> 业务编码*/
	code?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: RoomLimitListResult;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
}
export interface RoomLimitWhere {
/* 在制定内，如[1,2,3,...]*/	id_In?: number[];
/* 小于*/	id_Lt?: number;
/* 小于等于*/	id_Lte?: number;
/* 大于*/	id_Gt?: number;
/* 大于等于*/	id_Gte?: number;
/* 指定范围[min,max]*/	id_Between?: number[];
/* 等于*/	id?: number;
/* 包含,左{title: "a%"} 右边{title: "%a"} 包含{title: "%a%"}*/	title_Like?: string;
/* 等于*/	title?: string;
/**/	AND?: RoomLimitWhere[];
/**/	OR?: RoomLimitWhere[];
}
export interface RoomLimitOrder {
/* ASC 升序 DESC降序*/	id?: string;
}
export interface RoomTypeListResult {
	list?: RoomType[];
	count?: number;
}
export interface RoomTypeListMessages {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码
#### 6-8位
> 业务编码*/
	code?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: RoomTypeListResult;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
}
export interface RoomTypeWhere {
/*id 在制定内，如[1,2,3,...]*/	id_In?: number[];
/*id 小于*/	id_Lt?: number;
/*id 小于等于*/	id_Lte?: number;
/*id 大于*/	id_Gt?: number;
/*id 大于等于*/	id_Gte?: number;
/*id 指定范围[min,max]*/	id_Between?: number[];
/*id 等于*/	id?: number;
/*类型名 包含,左{title: "a%"} 右边{title: "%a"} 包含{title: "%a%"}*/	title_Like?: string;
/*类型名 等于*/	title?: string;
/**/	AND?: RoomTypeWhere[];
/**/	OR?: RoomTypeWhere[];
}
export interface RoomTypeOrder {
/*id ASC 升序 DESC降序*/	id?: string;
}
export interface Setting {
	/*id*/
	id?: number;
	/*key*/
	key?: string;
	/*value*/
	value?: string;
}
export interface SettingListResult {
	list?: Setting[];
	count?: number;
}
export interface SettingListMessages {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码
#### 6-8位
> 业务编码*/
	code?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: SettingListResult;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
}
export interface SettingWhere {
/*id 在制定内，如[1,2,3,...]*/	id_In?: number[];
/*id 小于*/	id_Lt?: number;
/*id 小于等于*/	id_Lte?: number;
/*id 大于*/	id_Gt?: number;
/*id 大于等于*/	id_Gte?: number;
/*id 指定范围[min,max]*/	id_Between?: number[];
/*id 等于*/	id?: number;
/*key 包含,左{title: "a%"} 右边{title: "%a"} 包含{title: "%a%"}*/	key_Like?: string;
/*key 等于*/	key?: string;
/*value 包含,左{title: "a%"} 右边{title: "%a"} 包含{title: "%a%"}*/	value_Like?: string;
/*value 等于*/	value?: string;
/**/	AND?: SettingWhere[];
/**/	OR?: SettingWhere[];
}
export interface SettingOrder {
/*id ASC 升序 DESC降序*/	id?: string;
}
export interface TicketListResult {
	list?: Ticket[];
	count?: number;
}
export interface TicketListMessages {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码
#### 6-8位
> 业务编码*/
	code?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: TicketListResult;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
}
export interface TicketWhere {
/* 在制定内，如[1,2,3,...]*/	id_In?: number[];
/* 小于*/	id_Lt?: number;
/* 小于等于*/	id_Lte?: number;
/* 大于*/	id_Gt?: number;
/* 大于等于*/	id_Gte?: number;
/* 指定范围[min,max]*/	id_Between?: number[];
/* 等于*/	id?: number;
/*名称 包含,左{title: "a%"} 右边{title: "%a"} 包含{title: "%a%"}*/	title_Like?: string;
/*名称 等于*/	title?: string;
/*金币 等于*/	fee?: number;
/*总数 等于*/	count?: number;
/* 小于*/	createDate_Lt?: Date;
/* 小于等于*/	createDate_Lte?: Date;
/* 大于*/	createDate_Gt?: Date;
/* 大于等于*/	createDate_Gte?: Date;
/* 指定范围[min,max]*/	createDate_Between?: Date[];
/* 等于*/	createDate?: string;
/* 小于*/	updateDate_Lt?: Date;
/* 小于等于*/	updateDate_Lte?: Date;
/* 大于*/	updateDate_Gt?: Date;
/* 大于等于*/	updateDate_Gte?: Date;
/* 指定范围[min,max]*/	updateDate_Between?: Date[];
/* 等于*/	updateDate?: string;
/**/	AND?: TicketWhere[];
/**/	OR?: TicketWhere[];
}
export interface TicketOrder {
/* ASC 升序 DESC降序*/	id?: string;
/*金币 ASC 升序 DESC降序*/	fee?: string;
/*总数 ASC 升序 DESC降序*/	count?: string;
/* ASC 升序 DESC降序*/	createDate?: string;
/* ASC 升序 DESC降序*/	updateDate?: string;
}
export interface TicketLogListResult {
	list?: TicketLog[];
	count?: number;
}
export interface TicketLogListMessages {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码
#### 6-8位
> 业务编码*/
	code?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: TicketLogListResult;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
}
export interface TicketLogWhere {
/* 在制定内，如[1,2,3,...]*/	id_In?: number[];
/* 小于*/	id_Lt?: number;
/* 小于等于*/	id_Lte?: number;
/* 大于*/	id_Gt?: number;
/* 大于等于*/	id_Gte?: number;
/* 指定范围[min,max]*/	id_Between?: number[];
/* 等于*/	id?: number;
/* 等于*/	ticket_Id?: number;
/* 等于*/	member_id?: number;
/* 小于*/	createDate_Lt?: Date;
/* 小于等于*/	createDate_Lte?: Date;
/* 大于*/	createDate_Gt?: Date;
/* 大于等于*/	createDate_Gte?: Date;
/* 指定范围[min,max]*/	createDate_Between?: Date[];
/* 等于*/	createDate?: string;
/**/	AND?: TicketLogWhere[];
/**/	OR?: TicketLogWhere[];
}
export interface TicketLogOrder {
/* ASC 升序 DESC降序*/	id?: string;
/* ASC 升序 DESC降序*/	ticket_Id?: string;
/* ASC 升序 DESC降序*/	member_id?: string;
/* ASC 升序 DESC降序*/	createDate?: string;
}
export interface TixianLogListResult {
	list?: TixianLog[];
	count?: number;
}
export interface TixianLogListMessages {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码
#### 6-8位
> 业务编码*/
	code?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: TixianLogListResult;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
}
export interface TixianLogWhere {
/* 在制定内，如[1,2,3,...]*/	id_In?: number[];
/* 小于*/	id_Lt?: number;
/* 小于等于*/	id_Lte?: number;
/* 大于*/	id_Gt?: number;
/* 大于等于*/	id_Gte?: number;
/* 指定范围[min,max]*/	id_Between?: number[];
/* 等于*/	id?: number;
/* 等于*/	memberId?: number;
/*提现数量 等于*/	count?: number;
/*提现状态 等于*/	status?: number;
/*提现时间 小于*/	createDate_Lt?: Date;
/*提现时间 小于等于*/	createDate_Lte?: Date;
/*提现时间 大于*/	createDate_Gt?: Date;
/*提现时间 大于等于*/	createDate_Gte?: Date;
/*提现时间 指定范围[min,max]*/	createDate_Between?: Date[];
/*提现时间 等于*/	createDate?: string;
/**/	AND?: TixianLogWhere[];
/**/	OR?: TixianLogWhere[];
}
export interface TixianLogOrder {
/* ASC 升序 DESC降序*/	id?: string;
/* ASC 升序 DESC降序*/	memberId?: string;
/*提现数量 ASC 升序 DESC降序*/	count?: string;
/*提现状态 ASC 升序 DESC降序*/	status?: string;
/*提现时间 ASC 升序 DESC降序*/	createDate?: string;
}
/*header refreshToken*/
export interface GameLogMessage {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码
#### 6-9位
> 业务编码*/
	code?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: GameLog;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
}
/*header refreshToken*/
export interface AccountMessage {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码
#### 6-9位
> 业务编码*/
	code?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: Account;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
}
/*header refreshToken*/
export interface MemberMessage {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码
#### 6-9位
> 业务编码*/
	code?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: Member;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
}
/*header refreshToken*/
export interface RoomMessage {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码
#### 6-9位
> 业务编码*/
	code?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: Room;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
}
/*header refreshToken*/
export interface RoomLimitMessage {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码
#### 6-9位
> 业务编码*/
	code?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: RoomLimit;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
}
/*header refreshToken*/
export interface RoomTypeMessage {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码
#### 6-9位
> 业务编码*/
	code?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: RoomType;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
}
/*header refreshToken*/
export interface SettingMessage {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码
#### 6-9位
> 业务编码*/
	code?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: Setting;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
}
/*header refreshToken*/
export interface TicketMessage {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码
#### 6-9位
> 业务编码*/
	code?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: Ticket;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
}
/*header refreshToken*/
export interface TicketLogMessage {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码
#### 6-9位
> 业务编码*/
	code?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: TicketLog;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
}
/*header refreshToken*/
export interface TixianLogMessage {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码
#### 6-9位
> 业务编码*/
	code?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: TixianLog;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
}
export interface GameLogMessages {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码 基础信息管理 001
#### ６-9
> 业务编码 2000表示正常*/
	code?: string;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: GameLog[];
}
export interface AccountMessages {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码 基础信息管理 001
#### ６-9
> 业务编码 2000表示正常*/
	code?: string;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: Account[];
}
export interface MemberMessages {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码 基础信息管理 001
#### ６-9
> 业务编码 2000表示正常*/
	code?: string;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: Member[];
}
export interface RoomMessages {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码 基础信息管理 001
#### ６-9
> 业务编码 2000表示正常*/
	code?: string;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: Room[];
}
export interface RoomLimitMessages {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码 基础信息管理 001
#### ６-9
> 业务编码 2000表示正常*/
	code?: string;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: RoomLimit[];
}
export interface RoomTypeMessages {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码 基础信息管理 001
#### ６-9
> 业务编码 2000表示正常*/
	code?: string;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: RoomType[];
}
export interface SettingMessages {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码 基础信息管理 001
#### ６-9
> 业务编码 2000表示正常*/
	code?: string;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: Setting[];
}
export interface TicketMessages {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码 基础信息管理 001
#### ６-9
> 业务编码 2000表示正常*/
	code?: string;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: Ticket[];
}
export interface TicketLogMessages {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码 基础信息管理 001
#### ６-9
> 业务编码 2000表示正常*/
	code?: string;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: TicketLog[];
}
export interface TixianLogMessages {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面
#### 3-5位:
> 子系统编码 基础信息管理 001
#### ６-9
> 业务编码 2000表示正常*/
	code?: string;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
	/*用户友好提示*/
	message?: string;
	/*返回数据*/
	data?: TixianLog[];
}
export interface GameLogSimple {
/**/	id?: number;
/*输赢*/	status?: number;
/*注码*/	count?: number;
/*开始时间*/	startTime?: string;
/*结束时间*/	endTime?: string;
/**/	roomId?: number;
/**/	memberId?: number;
}
export interface AccountSimple {
/**/	id?: number;
/**/	nickname?: string;
/**/	steamId?: string;
/**/	level?: string;
}
export interface MemberSimple {
/**/	id?: number;
/*昵称*/	nickname?: string;
/*密码*/	password?: string;
/*头像*/	avatar?: string;
/*电话*/	mobile?: string;
/*微信id*/	openid?: string;
/*状态 0禁用 1正常*/	status?: number;
/*余额*/	fee?: number;
/*金币*/	fee2?: number;
/*钻石*/	fee3?: number;
}
export interface RoomSimple {
/*房间名称*/	title?: string;
/*隐藏房间*/	isHidden?: boolean;
/*id*/	id?: number;
/*房间密码*/	password?: string;
/*开始方式*/	startType?: string;
/**/	roomTypeId?: number;
/*房主id*/	ownerId?: number;
}
export interface RoomLimitSimple {
/**/	id?: number;
/**/	title?: string;
}
export interface RoomTypeSimple {
/*id*/	id?: number;
/*类型名*/	title?: string;
}
export interface SettingSimple {
/*id*/	id?: number;
/*key*/	key?: string;
/*value*/	value?: string;
}
export interface TicketSimple {
/**/	id?: number;
/*名称*/	title?: string;
/*金币*/	fee?: number;
/*总数*/	count?: number;
}
export interface TicketLogSimple {
/**/	id?: number;
/**/	ticket_Id?: number;
/**/	member_id?: number;
}
export interface TixianLogSimple {
/**/	id?: number;
/**/	memberId?: number;
/*提现数量*/	count?: number;
/*提现状态*/	status?: number;
}
export interface RoomTypeInput {
	/*id*/
	id?: number;
	/*类型名*/
	title?: string;
	rooms?: RoomInput[];
}
export interface RoomLimitInput {
	id?: number;
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
export interface TicketInput {
	id?: number;
	/*名称*/
	title?: string;
	/*金币*/
	fee?: number;
	/*总数*/
	count?: number;
	/*领取记录*/
	logs?: TicketLogInput[];
	createDate?: string;
	updateDate?: string;
}
export interface TicketLogInput {
	relations?: string[];
	id?: number;
	ticket?: TicketInput;
	ticket_Id?: number;
	member?: MemberInput;
	member_id?: number;
	createDate?: string;
}
export interface AccountInput {
	id?: number;
	nickname?: string;
	steamId?: string;
	member?: MemberInput;
	level?: string;
}
export interface MemberInput {
	id?: number;
	/*昵称*/
	nickname?: string;
	/*密码*/
	password?: string;
	/*头像*/
	avatar?: string;
	/*电话*/
	mobile?: string;
	/*微信id*/
	openid?: string;
	/*状态 0禁用 1正常*/
	status?: number;
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
	account?: AccountInput;
}
export interface RoomInput {
	/*房间名称*/
	title?: string;
	/*隐藏房间*/
	isHidden?: boolean;
	/*id*/
	id?: number;
	/*房间密码*/
	password?: string;
	/*开始方式*/
	startType?: string;
	/*房间类型、场地选择*/
	roomType?: RoomTypeInput;
	/*段位限制*/
	roomLimit?: RoomLimitInput;
	roomTypeId?: number;
	/*房主*/
	owner?: MemberInput;
	/*房主id*/
	ownerId?: number;
	/*加入房间的人*/
	members?: MemberInput[];
	/*游戏记录*/
	gameLogs?: GameLogInput[];
	/*提现时间*/
	createDate?: string;
}
export interface GameLogInput {
	id?: number;
	/*输赢*/
	status?: number;
	/*注码*/
	count?: number;
	/*开始时间*/
	startTime?: string;
	/*结束时间*/
	endTime?: string;
	/*房间*/
	room?: RoomInput;
	roomId?: number;
	members?: MemberInput[];
	memberId?: number;
	/*提现时间*/
	createDate?: string;
}
export interface SettingInput {
	/*id*/
	id?: number;
	/*key*/
	key?: string;
	/*value*/
	value?: string;
}
export interface Query {
	/*获取列表
默认分页{page: 1, psize: 20}*/
	gameLogList<T>(where?: GameLogWhere, order?: GameLogOrder, limit?: LimitInput, __selection?: string): Promise<T & GameLogListMessages>;
	/*获取列表
默认分页{page: 1, psize: 20}*/
	accountList<T>(where?: AccountWhere, order?: AccountOrder, limit?: LimitInput, __selection?: string): Promise<T & AccountListMessages>;
	/*获取列表
默认分页{page: 1, psize: 20}*/
	memberList<T>(where?: MemberWhere, order?: MemberOrder, limit?: LimitInput, __selection?: string): Promise<T & MemberListMessages>;
	/*获取列表
默认分页{page: 1, psize: 20}*/
	roomList<T>(where?: RoomWhere, order?: RoomOrder, limit?: LimitInput, __selection?: string): Promise<T & RoomListMessages>;
	/*获取列表
默认分页{page: 1, psize: 20} 段位限制*/
	roomLimitList<T>(where?: RoomLimitWhere, order?: RoomLimitOrder, limit?: LimitInput, __selection?: string): Promise<T & RoomLimitListMessages>;
	/*获取列表
默认分页{page: 1, psize: 20}*/
	roomTypeList<T>(where?: RoomTypeWhere, order?: RoomTypeOrder, limit?: LimitInput, __selection?: string): Promise<T & RoomTypeListMessages>;
	/*获取列表
默认分页{page: 1, psize: 20}*/
	settingList<T>(where?: SettingWhere, order?: SettingOrder, limit?: LimitInput, __selection?: string): Promise<T & SettingListMessages>;
	/*获取列表
默认分页{page: 1, psize: 20}*/
	ticketList<T>(where?: TicketWhere, order?: TicketOrder, limit?: LimitInput, __selection?: string): Promise<T & TicketListMessages>;
	/*获取列表
默认分页{page: 1, psize: 20}*/
	ticketLogList<T>(where?: TicketLogWhere, order?: TicketLogOrder, limit?: LimitInput, __selection?: string): Promise<T & TicketLogListMessages>;
	/*获取列表
默认分页{page: 1, psize: 20}*/
	tixianLogList<T>(where?: TixianLogWhere, order?: TixianLogOrder, limit?: LimitInput, __selection?: string): Promise<T & TixianLogListMessages>;
	/*获取单条*/
	gameLogDetail<T>(where?: GameLogWhere, __selection?: string): Promise<T & GameLogMessage>;
	/*获取单条*/
	accountDetail<T>(where?: AccountWhere, __selection?: string): Promise<T & AccountMessage>;
	/*获取单条*/
	memberDetail<T>(where?: MemberWhere, __selection?: string): Promise<T & MemberMessage>;
	/*获取单条*/
	roomDetail<T>(where?: RoomWhere, __selection?: string): Promise<T & RoomMessage>;
	/*获取单条 段位限制*/
	roomLimitDetail<T>(where?: RoomLimitWhere, __selection?: string): Promise<T & RoomLimitMessage>;
	/*获取单条*/
	roomTypeDetail<T>(where?: RoomTypeWhere, __selection?: string): Promise<T & RoomTypeMessage>;
	/*获取单条*/
	settingDetail<T>(where?: SettingWhere, __selection?: string): Promise<T & SettingMessage>;
	/*获取单条*/
	ticketDetail<T>(where?: TicketWhere, __selection?: string): Promise<T & TicketMessage>;
	/*获取单条*/
	ticketLogDetail<T>(where?: TicketLogWhere, __selection?: string): Promise<T & TicketLogMessage>;
	/*获取单条*/
	tixianLogDetail<T>(where?: TixianLogWhere, __selection?: string): Promise<T & TixianLogMessage>;
	/*获取所有
没有分页*/
	gameLogAll<T>(where?: GameLogWhere, order?: GameLogOrder, __selection?: string): Promise<T & GameLogMessages>;
	/*获取所有
没有分页*/
	accountAll<T>(where?: AccountWhere, order?: AccountOrder, __selection?: string): Promise<T & AccountMessages>;
	/*获取所有
没有分页*/
	memberAll<T>(where?: MemberWhere, order?: MemberOrder, __selection?: string): Promise<T & MemberMessages>;
	/*获取所有
没有分页*/
	roomAll<T>(where?: RoomWhere, order?: RoomOrder, __selection?: string): Promise<T & RoomMessages>;
	/*获取所有
没有分页 段位限制*/
	roomLimitAll<T>(where?: RoomLimitWhere, order?: RoomLimitOrder, __selection?: string): Promise<T & RoomLimitMessages>;
	/*获取所有
没有分页*/
	roomTypeAll<T>(where?: RoomTypeWhere, order?: RoomTypeOrder, __selection?: string): Promise<T & RoomTypeMessages>;
	/*获取所有
没有分页*/
	settingAll<T>(where?: SettingWhere, order?: SettingOrder, __selection?: string): Promise<T & SettingMessages>;
	/*获取所有
没有分页*/
	ticketAll<T>(where?: TicketWhere, order?: TicketOrder, __selection?: string): Promise<T & TicketMessages>;
	/*获取所有
没有分页*/
	ticketLogAll<T>(where?: TicketLogWhere, order?: TicketLogOrder, __selection?: string): Promise<T & TicketLogMessages>;
	/*获取所有
没有分页*/
	tixianLogAll<T>(where?: TixianLogWhere, order?: TixianLogOrder, __selection?: string): Promise<T & TixianLogMessages>;
}
export interface Mutation {
	/*删除*/
	gameLogDeleteId<T>(id: ID, __selection?: string): Promise<T & GameLogMessage>;
	/*删除*/
	accountDeleteId<T>(id: ID, __selection?: string): Promise<T & AccountMessage>;
	/*删除*/
	memberDeleteId<T>(id: ID, __selection?: string): Promise<T & MemberMessage>;
	/*删除*/
	roomDeleteId<T>(id: ID, __selection?: string): Promise<T & RoomMessage>;
	/*删除 段位限制*/
	roomLimitDeleteId<T>(id: ID, __selection?: string): Promise<T & RoomLimitMessage>;
	/*删除*/
	roomTypeDeleteId<T>(id: ID, __selection?: string): Promise<T & RoomTypeMessage>;
	/*删除*/
	settingDeleteId<T>(id: ID, __selection?: string): Promise<T & SettingMessage>;
	/*删除*/
	ticketDeleteId<T>(id: ID, __selection?: string): Promise<T & TicketMessage>;
	/*删除*/
	ticketLogDeleteId<T>(id: ID, __selection?: string): Promise<T & TicketLogMessage>;
	/*删除*/
	tixianLogDeleteId<T>(id: ID, __selection?: string): Promise<T & TixianLogMessage>;
	gameLogDelete<T>(where: GameLogWhere, __selection?: string): Promise<T & GameLogMessage>;
	accountDelete<T>(where: AccountWhere, __selection?: string): Promise<T & AccountMessage>;
	memberDelete<T>(where: MemberWhere, __selection?: string): Promise<T & MemberMessage>;
	roomDelete<T>(where: RoomWhere, __selection?: string): Promise<T & RoomMessage>;
	/*段位限制*/
	roomLimitDelete<T>(where: RoomLimitWhere, __selection?: string): Promise<T & RoomLimitMessage>;
	roomTypeDelete<T>(where: RoomTypeWhere, __selection?: string): Promise<T & RoomTypeMessage>;
	settingDelete<T>(where: SettingWhere, __selection?: string): Promise<T & SettingMessage>;
	ticketDelete<T>(where: TicketWhere, __selection?: string): Promise<T & TicketMessage>;
	ticketLogDelete<T>(where: TicketLogWhere, __selection?: string): Promise<T & TicketLogMessage>;
	tixianLogDelete<T>(where: TixianLogWhere, __selection?: string): Promise<T & TixianLogMessage>;
	/*批量删除*/
	gameLogDeletes<T>(ids: ID[], __selection?: string): Promise<T & GameLogMessages>;
	/*批量删除*/
	accountDeletes<T>(ids: ID[], __selection?: string): Promise<T & AccountMessages>;
	/*批量删除*/
	memberDeletes<T>(ids: ID[], __selection?: string): Promise<T & MemberMessages>;
	/*批量删除*/
	roomDeletes<T>(ids: ID[], __selection?: string): Promise<T & RoomMessages>;
	/*批量删除 段位限制*/
	roomLimitDeletes<T>(ids: ID[], __selection?: string): Promise<T & RoomLimitMessages>;
	/*批量删除*/
	roomTypeDeletes<T>(ids: ID[], __selection?: string): Promise<T & RoomTypeMessages>;
	/*批量删除*/
	settingDeletes<T>(ids: ID[], __selection?: string): Promise<T & SettingMessages>;
	/*批量删除*/
	ticketDeletes<T>(ids: ID[], __selection?: string): Promise<T & TicketMessages>;
	/*批量删除*/
	ticketLogDeletes<T>(ids: ID[], __selection?: string): Promise<T & TicketLogMessages>;
	/*批量删除*/
	tixianLogDeletes<T>(ids: ID[], __selection?: string): Promise<T & TixianLogMessages>;
	gameLogUpdate<T>(where: GameLogWhere, entity: GameLogSimple, __selection?: string): Promise<T & GameLogMessage>;
	accountUpdate<T>(where: AccountWhere, entity: AccountSimple, __selection?: string): Promise<T & AccountMessage>;
	memberUpdate<T>(where: MemberWhere, entity: MemberSimple, __selection?: string): Promise<T & MemberMessage>;
	roomUpdate<T>(where: RoomWhere, entity: RoomSimple, __selection?: string): Promise<T & RoomMessage>;
	/*段位限制*/
	roomLimitUpdate<T>(where: RoomLimitWhere, entity: RoomLimitSimple, __selection?: string): Promise<T & RoomLimitMessage>;
	roomTypeUpdate<T>(where: RoomTypeWhere, entity: RoomTypeSimple, __selection?: string): Promise<T & RoomTypeMessage>;
	settingUpdate<T>(where: SettingWhere, entity: SettingSimple, __selection?: string): Promise<T & SettingMessage>;
	ticketUpdate<T>(where: TicketWhere, entity: TicketSimple, __selection?: string): Promise<T & TicketMessage>;
	ticketLogUpdate<T>(where: TicketLogWhere, entity: TicketLogSimple, __selection?: string): Promise<T & TicketLogMessage>;
	tixianLogUpdate<T>(where: TixianLogWhere, entity: TixianLogSimple, __selection?: string): Promise<T & TixianLogMessage>;
	/*更新或新增
修改状态等操作,应使用update*/
	gameLogEdit<T>(entity: GameLogInput, __selection?: string): Promise<T & GameLogMessage>;
	/*更新或新增
修改状态等操作,应使用update*/
	accountEdit<T>(entity: AccountInput, __selection?: string): Promise<T & AccountMessage>;
	/*更新或新增
修改状态等操作,应使用update*/
	memberEdit<T>(entity: MemberInput, __selection?: string): Promise<T & MemberMessage>;
	/*更新或新增
修改状态等操作,应使用update*/
	roomEdit<T>(entity: RoomInput, __selection?: string): Promise<T & RoomMessage>;
	/*更新或新增
修改状态等操作,应使用update 段位限制*/
	roomLimitEdit<T>(entity: RoomLimitInput, __selection?: string): Promise<T & RoomLimitMessage>;
	/*更新或新增
修改状态等操作,应使用update*/
	roomTypeEdit<T>(entity: RoomTypeInput, __selection?: string): Promise<T & RoomTypeMessage>;
	/*更新或新增
修改状态等操作,应使用update*/
	settingEdit<T>(entity: SettingInput, __selection?: string): Promise<T & SettingMessage>;
	/*更新或新增
修改状态等操作,应使用update*/
	ticketEdit<T>(entity: TicketInput, __selection?: string): Promise<T & TicketMessage>;
	/*更新或新增
修改状态等操作,应使用update*/
	ticketLogEdit<T>(entity: TicketLogInput, __selection?: string): Promise<T & TicketLogMessage>;
	/*更新或新增
修改状态等操作,应使用update*/
	tixianLogEdit<T>(entity: TixianLogInput, __selection?: string): Promise<T & TixianLogMessage>;
	/*批量编辑*/
	gameLogEdits<T>(entity: GameLogInput[], __selection?: string): Promise<T & GameLogMessages>;
	/*批量编辑*/
	accountEdits<T>(entity: AccountInput[], __selection?: string): Promise<T & AccountMessages>;
	/*批量编辑*/
	memberEdits<T>(entity: MemberInput[], __selection?: string): Promise<T & MemberMessages>;
	/*批量编辑*/
	roomEdits<T>(entity: RoomInput[], __selection?: string): Promise<T & RoomMessages>;
	/*批量编辑 段位限制*/
	roomLimitEdits<T>(entity: RoomLimitInput[], __selection?: string): Promise<T & RoomLimitMessages>;
	/*批量编辑*/
	roomTypeEdits<T>(entity: RoomTypeInput[], __selection?: string): Promise<T & RoomTypeMessages>;
	/*批量编辑*/
	settingEdits<T>(entity: SettingInput[], __selection?: string): Promise<T & SettingMessages>;
	/*批量编辑*/
	ticketEdits<T>(entity: TicketInput[], __selection?: string): Promise<T & TicketMessages>;
	/*批量编辑*/
	ticketLogEdits<T>(entity: TicketLogInput[], __selection?: string): Promise<T & TicketLogMessages>;
	/*批量编辑*/
	tixianLogEdits<T>(entity: TixianLogInput[], __selection?: string): Promise<T & TixianLogMessages>;
	/*添加单条数据，无自动关联关系*/
	gameLogAdd<T>(entity: GameLogSimple, __selection?: string): Promise<T & GameLogMessage>;
	/*添加单条数据，无自动关联关系*/
	accountAdd<T>(entity: AccountSimple, __selection?: string): Promise<T & AccountMessage>;
	/*添加单条数据，无自动关联关系*/
	memberAdd<T>(entity: MemberSimple, __selection?: string): Promise<T & MemberMessage>;
	/*添加单条数据，无自动关联关系*/
	roomAdd<T>(entity: RoomSimple, __selection?: string): Promise<T & RoomMessage>;
	/*添加单条数据，无自动关联关系 段位限制*/
	roomLimitAdd<T>(entity: RoomLimitSimple, __selection?: string): Promise<T & RoomLimitMessage>;
	/*添加单条数据，无自动关联关系*/
	roomTypeAdd<T>(entity: RoomTypeSimple, __selection?: string): Promise<T & RoomTypeMessage>;
	/*添加单条数据，无自动关联关系*/
	settingAdd<T>(entity: SettingSimple, __selection?: string): Promise<T & SettingMessage>;
	/*添加单条数据，无自动关联关系*/
	ticketAdd<T>(entity: TicketSimple, __selection?: string): Promise<T & TicketMessage>;
	/*添加单条数据，无自动关联关系*/
	ticketLogAdd<T>(entity: TicketLogSimple, __selection?: string): Promise<T & TicketLogMessage>;
	/*添加单条数据，无自动关联关系*/
	tixianLogAdd<T>(entity: TixianLogSimple, __selection?: string): Promise<T & TixianLogMessage>;
	/*批量添加*/
	gameLogAdds<T>(entity: GameLogSimple[], __selection?: string): Promise<T & GameLogMessages>;
	/*批量添加*/
	accountAdds<T>(entity: AccountSimple[], __selection?: string): Promise<T & AccountMessages>;
	/*批量添加*/
	memberAdds<T>(entity: MemberSimple[], __selection?: string): Promise<T & MemberMessages>;
	/*批量添加*/
	roomAdds<T>(entity: RoomSimple[], __selection?: string): Promise<T & RoomMessages>;
	/*批量添加 段位限制*/
	roomLimitAdds<T>(entity: RoomLimitSimple[], __selection?: string): Promise<T & RoomLimitMessages>;
	/*批量添加*/
	roomTypeAdds<T>(entity: RoomTypeSimple[], __selection?: string): Promise<T & RoomTypeMessages>;
	/*批量添加*/
	settingAdds<T>(entity: SettingSimple[], __selection?: string): Promise<T & SettingMessages>;
	/*批量添加*/
	ticketAdds<T>(entity: TicketSimple[], __selection?: string): Promise<T & TicketMessages>;
	/*批量添加*/
	ticketLogAdds<T>(entity: TicketLogSimple[], __selection?: string): Promise<T & TicketLogMessages>;
	/*批量添加*/
	tixianLogAdds<T>(entity: TixianLogSimple[], __selection?: string): Promise<T & TixianLogMessages>;
}