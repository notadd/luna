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

export interface FindMemberData {
	id: number;
	nickname: string;
	avatar: string;
	mobile: string;
	fee: number;
	fee2: number;
	fee3: number;
	gameCount: number;
}
export interface FindMemberResult {
	code: number;
	message: string;
	count: number;
	data: FindMemberData[];
}
export interface FindMemberInput {
	page?: number;
	psize?: number;
}
export interface FindRoomTypeData {
	id: number;
	title: string;
	roomCount: number;
}
export interface FindRoomTypeResult {
	code: number;
	message: string;
	data: FindRoomTypeData[];
}
export interface FindRoomData {
	id: number;
	status: number;
	memberName: string[];
	createUserName: string;
}
export interface FindRoomResult {
	code: number;
	message: string;
	count: number;
	data: FindRoomData[];
}
export interface FindRoomInput {
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
export interface FindTiXianLogInput {
	page: number;
	psize: number;
}
export interface Query {
	/*查询用户*/
	findMember<T>(where: FindMemberInput, __selection?: string): Promise<T & FindMemberResult>;
	/*查询房间类型及所对应的房间个数*/
	findRoomType<T>(__selection?: string): Promise<T & FindRoomTypeResult>;
	/*查询房间*/
	findRoom<T>(where: FindRoomInput, __selection?: string): Promise<T & FindRoomResult>;
	/*查询提现记录，根据时间倒序*/
	findAllTiXianLog<T>(where: FindTiXianLogInput, __selection?: string): Promise<T & FindTiXianLogResult>;
}