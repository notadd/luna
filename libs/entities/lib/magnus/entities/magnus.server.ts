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
} from '@notadd/magnus-core';
import { Observable } from 'rxjs';

export interface RoomType {
	/*id*/
	id?: number;
	/*类型名*/
	title: string;
	rooms?: Room[];
}
export interface GameLog {
	id?: number;
	/*输赢*/
	status: number;
	/*注码*/
	count: number;
	/*开始时间*/
	startTime: number;
	/*结束时间*/
	endTime: number;
	/*房间*/
	room?: Room;
	member?: Member;
}
export interface Room {
	/*id*/
	id?: number;
	/*房间密码*/
	password: string;
	/*房间类型*/
	type?: RoomType;
	/*自动开启*/
	autoStart: boolean;
	/*房主*/
	owner?: Member;
	/*加入房间的人*/
	members?: Member[];
	gameLogs?: GameLog[];
}
export interface TixianLog {
	id?: number;
	/*提现人*/
	member?: Member;
	/*提现数量*/
	count: number;
	/*提现状态*/
	status: number;
	/*提现时间*/
	createDate?: number;
}
export interface Ticket {
	id?: number;
	title: string;
	/*领取记录*/
	logs?: TicketLog[];
}
export interface TicketLog {
	id?: number;
	ticket?: Ticket;
	member?: Member;
}
export interface Member {
	id?: number;
	/*昵称*/
	nickname: string;
	/*头像*/
	avatar: string;
	/*电话*/
	mobile: string;
	/*微信id*/
	openid: string;
	/*创建时间*/
	createDate?: number;
	/*余额*/
	fee: number;
	/*金币*/
	fee2: number;
	/*钻石*/
	fee3: number;
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
}
export interface RoomTypeInput {
	/*id*/
	id?: number;
	/*类型名*/
	title: string;
	rooms?: RoomInput[];
}
export interface GameLogInput {
	id?: number;
	/*输赢*/
	status: number;
	/*注码*/
	count: number;
	/*开始时间*/
	startTime: number;
	/*结束时间*/
	endTime: number;
	/*房间*/
	room?: RoomInput;
	member?: MemberInput;
}
export interface RoomInput {
	/*id*/
	id?: number;
	/*房间密码*/
	password: string;
	/*房间类型*/
	type?: RoomTypeInput;
	/*自动开启*/
	autoStart: boolean;
	/*房主*/
	owner?: MemberInput;
	/*加入房间的人*/
	members?: MemberInput[];
	gameLogs?: GameLogInput[];
}
export interface TixianLogInput {
	id?: number;
	/*提现人*/
	member?: MemberInput;
	/*提现数量*/
	count: number;
	/*提现状态*/
	status: number;
	/*提现时间*/
	createDate?: number;
}
export interface TicketInput {
	id?: number;
	title: string;
	/*领取记录*/
	logs?: TicketLogInput[];
}
export interface TicketLogInput {
	id?: number;
	ticket?: TicketInput;
	member?: MemberInput;
}
export interface MemberInput {
	id?: number;
	/*昵称*/
	nickname: string;
	/*头像*/
	avatar: string;
	/*电话*/
	mobile: string;
	/*微信id*/
	openid: string;
	/*创建时间*/
	createDate?: number;
	/*余额*/
	fee: number;
	/*金币*/
	fee2: number;
	/*钻石*/
	fee3: number;
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
}
export interface MemberPartial {
	id?: number;
	/*昵称*/
	nickname?: string;
	/*头像*/
	avatar?: string;
	/*电话*/
	mobile?: string;
	/*微信id*/
	openid?: string;
	/*创建时间*/
	createDate?: number;
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
}
export interface RoomPartial {
	/*id*/
	id?: number;
	/*房间密码*/
	password?: string;
	/*房间类型*/
	type?: RoomTypeInput;
	/*自动开启*/
	autoStart?: boolean;
	/*房主*/
	owner?: MemberInput;
	/*加入房间的人*/
	members?: MemberInput[];
	gameLogs?: GameLogInput[];
}
export interface RoomTypePartial {
	/*id*/
	id?: number;
	/*类型名*/
	title?: string;
	rooms?: RoomInput[];
}
export interface Setting {
	/*id*/
	id?: number;
	/*key*/
	key: string;
	/*value*/
	value: string;
}
export interface SettingInput {
	/*id*/
	id?: number;
	/*key*/
	key: string;
	/*value*/
	value: string;
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
	id?: number;
	/*提现人*/
	member?: MemberInput;
	/*提现数量*/
	count?: number;
	/*提现状态*/
	status?: number;
	/*提现时间*/
	createDate?: number;
}
export interface GameLogPartial {
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
	member?: MemberInput;
}
export interface TicketPartial {
	id?: number;
	title?: string;
	/*领取记录*/
	logs?: TicketLogInput[];
}
export interface TicketLogPartial {
	id?: number;
	ticket?: TicketInput;
	member?: MemberInput;
}
export interface Query {
	getMember<T>(entity: MemberPartial, selection?: string): Promise<T & Member>;
	getRoom<T>(entity: RoomPartial, selection?: string): Promise<T & Room>;
	getRoomType<T>(entity: RoomTypePartial, selection?: string): Promise<T & RoomType>;
	getSetting<T>(entity: SettingPartial, selection?: string): Promise<T & Setting>;
	getTixianLog<T>(entity: TixianLogPartial, selection?: string): Promise<T & TixianLog>;
	getGameLog<T>(entity: GameLogPartial, selection?: string): Promise<T & GameLog>;
	getTicket<T>(entity: TicketPartial, selection?: string): Promise<T & Ticket>;
	getTicketLog<T>(entity: TicketLogPartial, selection?: string): Promise<T & TicketLog>;
	/*通过制定条件获取一组数据*/
	findMember<T>(/*条件*/entity: MemberPartial, selection?: string): Promise<T & Member[]>;
	/*通过制定条件获取一组数据*/
	findRoom<T>(/*条件*/entity: RoomPartial, selection?: string): Promise<T & Room[]>;
	/*通过制定条件获取一组数据*/
	findRoomType<T>(/*条件*/entity: RoomTypePartial, selection?: string): Promise<T & RoomType[]>;
	/*通过制定条件获取一组数据*/
	findSetting<T>(/*条件*/entity: SettingPartial, selection?: string): Promise<T & Setting[]>;
	/*通过制定条件获取一组数据*/
	findTixianLog<T>(/*条件*/entity: TixianLogPartial, selection?: string): Promise<T & TixianLog[]>;
	/*通过制定条件获取一组数据*/
	findGameLog<T>(/*条件*/entity: GameLogPartial, selection?: string): Promise<T & GameLog[]>;
	/*通过制定条件获取一组数据*/
	findTicket<T>(/*条件*/entity: TicketPartial, selection?: string): Promise<T & Ticket[]>;
	/*通过制定条件获取一组数据*/
	findTicketLog<T>(/*条件*/entity: TicketLogPartial, selection?: string): Promise<T & TicketLog[]>;
}
export interface Mutation {
	saveMember<T>(entity: MemberInput, selection?: string): Promise<T & Member>;
	saveRoom<T>(entity: RoomInput, selection?: string): Promise<T & Room>;
	saveRoomType<T>(entity: RoomTypeInput, selection?: string): Promise<T & RoomType>;
	saveSetting<T>(entity: SettingInput, selection?: string): Promise<T & Setting>;
	saveTixianLog<T>(entity: TixianLogInput, selection?: string): Promise<T & TixianLog>;
	saveGameLog<T>(entity: GameLogInput, selection?: string): Promise<T & GameLog>;
	saveTicket<T>(entity: TicketInput, selection?: string): Promise<T & Ticket>;
	saveTicketLog<T>(entity: TicketLogInput, selection?: string): Promise<T & TicketLog>;
}