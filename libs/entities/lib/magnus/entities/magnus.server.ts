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

export interface Member {
	id?: number;
	username: string;
	password: string;
	createDate?: number;
}
export interface MemberInput {
	id?: number;
	username: string;
	password: string;
	createDate?: number;
}
export interface MemberPartial {
	id?: number;
	username?: string;
	password?: string;
	createDate?: number;
}
export interface Query {
	getMember<T>(entity: MemberPartial, selection?: string): Promise<T & Member>;
}
export interface Mutation {
	saveMember<T>(entity: MemberInput, selection?: string): Promise<T & Member>;
}