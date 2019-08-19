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

export interface LoginResult {
	code: number;
	message: string;
}
export interface LoginInput {
	username: string;
	password: string;
}
export interface Query {
	/*用户登录*/
	login<T>(/*用户名和密码*/where: LoginInput, __selection?: string): Promise<T & LoginResult>;
}