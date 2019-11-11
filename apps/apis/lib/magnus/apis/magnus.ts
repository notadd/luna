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
	id: number;
	title: string;
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
	/*开始方式,1手动 2自动*/
	startType?: number;
	/*房间类型、场地选择*/
	roomType?: RoomType;
	roomTypeId?: number;
	/*段位限制*/
	roomLimit?: RoomLimit;
	roomLimitId?: number;
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
	id?: number;
	/*提现人*/
	member?: Member;
	memberId?: number;
	/*提现数量*/
	count?: number;
	/*提现金额*/
	fee?: number;
	/*提现状态*/
	status?: number;
	/*提现时间*/
	createDate?: string;
	/*更新时间*/
	updateDate?: string;
}
export interface ChongZhiLog {
	/*编号*/
	id?: number;
	/*费用*/
	fee?: number;
	/*状态*/
	status?: number;
	/*用户*/
	member?: Member;
	/*用户id*/
	memberId?: number;
	/*创建日期*/
	createDate?: string;
	/*更新日期*/
	updateDate?: string;
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
	roomType?: RoomType;
	roomTypeId?: number;
	createDate?: string;
	updateDate?: string;
}
export interface TicketLog {
	id?: number;
	ticket?: Ticket;
	ticket_Id?: number;
	member?: Member;
	member_id?: number;
	createDate?: string;
}
export interface Account {
	id?: number;
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
	avatarUrl?: string;
	/*电话*/
	mobile?: string;
	/*0未知 1男性 2女性*/
	gender?: number;
	country?: string;
	/*省份*/
	province?: string;
	city?: string;
	language?: string;
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
	chongZhiLogs?: ChongZhiLog[];
	/*游戏记录*/
	gameLogs?: GameLog[];
	/*用户领取的劵*/
	ticketLogs?: TicketLog[];
	/*提现时间*/
	createDate?: string;
	account?: Account;
	accountId?: number;
}
export interface MessageNoData {
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
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
}
export interface MemberBindSteamIdInput {
	openid: string;
	steamId: string;
}
export interface MemberGameLogsInput {
	openid: string;
}
export interface MemberInput {
	openid: string;
	nickName: string;
	avatarUrl: string;
	gender: number;
	country: string;
	province: string;
	city: string;
	language: string;
}
export interface MemberJoinRoomInput {
/*房间编号*/	roomId: number;
/*用户标识*/	openId: string;
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
export interface RoomCreateInput {
	title: string;
	password?: string;
/*场地黄金白银青铜*/	roomTypeId: number;
/*段位*/	roomLimitId: number;
	isHidden: boolean;
	openId: string;
	startType: number;
}
export interface RoomFindOneMember {
	id: number;
	nickname?: string;
	avatarUrl?: string;
}
export interface RoomsFindOneResult {
	id: number;
	title: string;
	password: string;
	roomTypeId: number;
	roomTypeTitle: string;
	roomLimitId: number;
	roomLimitTitle: string;
	ownerId: number;
	isHidden: boolean;
	members: RoomFindOneMember[];
	/*暂定 1自动 2手动*/
	startType: number;
	createDate: string;
	joinCount: number;
}
/*header refreshToken*/
export interface RoomsFindOneResultMessage {
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
	data?: RoomsFindOneResult;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
}
export interface RoomFindOneInput {
	roomId: number;
}
export interface RoomsFindResult {
	id: number;
	title: string;
	password: string;
	roomTypeId: number;
	roomTypeTitle: string;
	roomLimitId: number;
	roomLimitTitle: string;
	ownerId: number;
	joinCount: number;
}
export interface RoomsFindResultMessages {
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
	data?: RoomsFindResult[];
}
export interface RoomsFindInput {
	title?: string;
	roomLimitId?: number;
	roomTypeId?: number;
}
export interface RoomTypesFindResult {
	/*房间段位*/
	roomLimitTypes: RoomType[];
	/*房间场地*/
	roomTypes: RoomType[];
}
/*header refreshToken*/
export interface RoomTypesFindResultMessage {
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
	data?: RoomTypesFindResult;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
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
export interface TicketTitleAndCount {
	/*卷的名字*/
	title: string;
	/*卷的数量*/
	count: number;
}
export interface MemberTicketNumberResult {
	/*用户的id*/
	id: number;
	/*用户的名字*/
	nickname: string;
	allTicketTitleAndCount: TicketTitleAndCount[];
}
/*header refreshToken*/
export interface MemberTicketNumberResultMessage {
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
	data?: MemberTicketNumberResult;
	/*H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员*/
	pre?: string;
	/*子系统编码 基础信息管理 001*/
	system?: string;
	/*> 错误等级,0 log提示 无, 1 info提示, 2 warning提示 3 error提示 4 info 弹框 5 warning 弹框 6 error弹框 7 权限不足 8 全屏警告 9 错误页面*/
	level?: string;
	/*业务编码 2000表示正常*/
	serviceCode?: string;
}
export interface MemberTicketNumberInput {
	openid: string;
}
export interface Query {
	memberGameLogsFind<T>(where: MemberGameLogsInput, __selection?: string): Promise<T & object>;
	roomFindOne<T>(where: RoomFindOneInput, __selection?: string): Promise<T & RoomsFindOneResultMessage>;
	/*查找可进入的房间*/
	roomsFind<T>(/*查找房间的条件*/where: RoomsFindInput, __selection?: string): Promise<T & RoomsFindResultMessages>;
	/*查询房间的段位类型和场地类型*/
	roomTypesFind<T>(__selection?: string): Promise<T & RoomTypesFindResultMessage>;
	/*查询用户拥有的所有类型的参赛券*/
	memberTicketLogFind<T>(/*用户唯一编号*/openid: string, __selection?: string): Promise<T & TicketLogMessages>;
	/*用户名字,拥有了多少券*/
	memberTicketNumber<T>(/*查询条件,用户信息*/where: MemberTicketNumberInput, __selection?: string): Promise<T & MemberTicketNumberResultMessage>;
}
export interface Mutation {
	/*用户绑定steamId*/
	memberBindSteamId<T>(/*用户openid和steamId*/input: MemberBindSteamIdInput, __selection?: string): Promise<T & MessageNoData>;
	memberUpdate<T>(entity: MemberInput, __selection?: string): Promise<T & MessageNoData>;
	/*用户加入房间,并且扣除对应的券*/
	memberJoinRoom<T>(/**/where: MemberJoinRoomInput, __selection?: string): Promise<T & MessageNoData>;
	/*创建房间，并且扣除创建该房间需要的券加入房间 TODO 当前没有限制房间数量*/
	roomCreate<T>(/**/entity: RoomCreateInput, __selection?: string): Promise<T & RoomMessage>;
}