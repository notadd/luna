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

export interface PageSettingWidget {
	code?: string;
	title?: string;
	/*```ts
{[key:string]: 'default'|'readonly'|'hidden'}
```*/
	fields?: object;
	/*```ts
export class PageSettingWidgetAction {
   title: string;
   display: boolean;
}
{[key:string]: PageSettingWidgetAction}
```*/
	actions?: object;
}
export interface PageSettingResult {
	title?: string;
	code?: string;
	url?: string;
	widgets?: PageSettingWidget[];
}
export interface Page {
	title?: string;
}
export interface User {
	username?: string;
	password?: string;
}
export interface UserListResult {
	list: User[];
	count: number;
}
export interface UserListResultMessages {
	code: string;
	message: string;
	data?: UserListResult;
}
export interface UserInput {
	username?: string;
	password?: string;
}
export interface UserInputWhere {
	/**/
	username_Not?: string;
	/**/
	username_In?: string[];
	/**/
	username_NotIn?: string[];
	/**/
	username_Lt?: string;
	/**/
	username_Lte?: string;
	/**/
	username_Gt?: string;
	/**/
	username_Gte?: string;
	/**/
	username_Contains?: string;
	/**/
	username_NotContains?: string;
	/**/
	username_StartsWith?: string;
	/**/
	username_NotStartsWith?: string;
	/**/
	username_EndsWith?: string;
	/**/
	username_NotEndsWith?: string;
	username?: string;
	/**/
	password_Not?: string;
	/**/
	password_In?: string[];
	/**/
	password_NotIn?: string[];
	/**/
	password_Lt?: string;
	/**/
	password_Lte?: string;
	/**/
	password_Gt?: string;
	/**/
	password_Gte?: string;
	/**/
	password_Contains?: string;
	/**/
	password_NotContains?: string;
	/**/
	password_StartsWith?: string;
	/**/
	password_NotStartsWith?: string;
	/**/
	password_EndsWith?: string;
	/**/
	password_NotEndsWith?: string;
	password?: string;
	AND?: UserInputWhere[];
	OR?: UserInputWhere[];
	NOT?: UserInputWhere[];
}
export interface UserInputOrder {
	username?: string;
	password?: string;
}
export interface LimitInput {
	page?: number;
	psize?: number;
}
export interface Domain {
	title?: string;
	code?: string;
}
export interface DomainListResult {
	list: Domain[];
	count: number;
}
export interface DomainListResultMessages {
	code: string;
	message: string;
	data?: DomainListResult;
}
export interface DomainInput {
	title?: string;
	code?: string;
}
export interface DomainInputWhere {
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
	/**/
	code_Not?: string;
	/**/
	code_In?: string[];
	/**/
	code_NotIn?: string[];
	/**/
	code_Lt?: string;
	/**/
	code_Lte?: string;
	/**/
	code_Gt?: string;
	/**/
	code_Gte?: string;
	/**/
	code_Contains?: string;
	/**/
	code_NotContains?: string;
	/**/
	code_StartsWith?: string;
	/**/
	code_NotStartsWith?: string;
	/**/
	code_EndsWith?: string;
	/**/
	code_NotEndsWith?: string;
	code?: string;
	AND?: DomainInputWhere[];
	OR?: DomainInputWhere[];
	NOT?: DomainInputWhere[];
}
export interface DomainInputOrder {
	title?: string;
	code?: string;
}
export interface UserMessage {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0-1 log 无, 2-3 info 无, 4-5 warning 无 6-7 error 需通知相关人员处理
#### 3-5位:
> 子系统编码
#### 6-8位
> 业务编码*/
	code: string;
	/*用户友好提示*/
	message: string;
	/*返回数据*/
	data?: User;
}
export interface DomainMessage {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0-1 log 无, 2-3 info 无, 4-5 warning 无 6-7 error 需通知相关人员处理
#### 3-5位:
> 子系统编码
#### 6-8位
> 业务编码*/
	code: string;
	/*用户友好提示*/
	message: string;
	/*返回数据*/
	data?: Domain;
}
export interface UserPartial {
	username?: string;
	password?: string;
}
export interface DomainPartial {
	title?: string;
	code?: string;
}
export interface PageMessage {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0-1 log 无, 2-3 info 无, 4-5 warning 无 6-7 error 需通知相关人员处理
#### 3-5位:
> 子系统编码
#### 6-8位
> 业务编码*/
	code: string;
	/*用户友好提示*/
	message: string;
	/*返回数据*/
	data?: Page;
}
export interface Widget {
	/*代号*/
	code?: string;
	/*标题*/
	title?: string;
	/*操作按钮
```ts
class ActionRight {
  title: string;
  display: boolean;
}
{[key: string]: ActionRight}
```*/
	actions(__selection?: string): object;
	/*高级权限
```ts
{[key:string]: 'default'|'readonly'|'hidden'}
```*/
	fields(__selection?: string): object;
	/*此组建在那个页面*/
	page(__selection?: string): Page;
}
export interface WidgetMessage {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0-1 log 无, 2-3 info 无, 4-5 warning 无 6-7 error 需通知相关人员处理
#### 3-5位:
> 子系统编码
#### 6-8位
> 业务编码*/
	code: string;
	/*用户友好提示*/
	message: string;
	/*返回数据*/
	data?: Widget;
}
export interface Right {
	/*```ts
'actions'|'fields'
```*/
	type?: string;
	/*权限名*/
	title?: string;
	/*权限代号*/
	code?: string;
	/*默认值*/
	display?: boolean;
	/*状态
```ts
'hidden'|'default'|'readonly'
```*/
	status?: string;
}
export interface RightMessage {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0-1 log 无, 2-3 info 无, 4-5 warning 无 6-7 error 需通知相关人员处理
#### 3-5位:
> 子系统编码
#### 6-8位
> 业务编码*/
	code: string;
	/*用户友好提示*/
	message: string;
	/*返回数据*/
	data?: Right;
}
export interface ErrorPostResult {
	title?: string;
}
export interface ErrorPostResultMessage {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0-1 log 无, 2-3 info 无, 4-5 warning 无 6-7 error 需通知相关人员处理
#### 3-5位:
> 子系统编码
#### 6-8位
> 业务编码*/
	code: string;
	/*用户友好提示*/
	message: string;
	/*返回数据*/
	data?: ErrorPostResult;
}
export interface LoginResult {
	token?: string;
	uid?: string;
}
export interface LoginResultMessage {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0-1 log 无, 2-3 info 无, 4-5 warning 无 6-7 error 需通知相关人员处理
#### 3-5位:
> 子系统编码
#### 6-8位
> 业务编码*/
	code: string;
	/*用户友好提示*/
	message: string;
	/*返回数据*/
	data?: LoginResult;
}
export interface SystemSettingResult {
	title?: string;
	code?: string;
	image?: string;
	url?: string;
	/*```ts
class SystemSettingNav {
 		id: string;
 		title: string;
 		type: string;
 		icon?: string;
 		url?: string[];
 		children: SystemSettingNav[];
}*/
	navs?: object[];
	pageSetting(pageCode?: string, __selection?: string): PageSettingResult;
}
export interface SystemSettingResultMessage {
	/*#### 1位:
> H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
#### 2位:
> 错误等级,0-1 log 无, 2-3 info 无, 4-5 warning 无 6-7 error 需通知相关人员处理
#### 3-5位:
> 子系统编码
#### 6-8位
> 业务编码*/
	code: string;
	/*用户友好提示*/
	message: string;
	/*返回数据*/
	data?: SystemSettingResult;
}
export interface Query {
	userList<T>(where?: UserInputWhere, order?: UserInputOrder, limit?: LimitInput, __selection?: string): Promise<T & UserListResultMessages>;
	domainList<T>(where?: DomainInputWhere, order?: DomainInputOrder, limit?: LimitInput, __selection?: string): Promise<T & DomainListResultMessages>;
	userDetail<T>(id: number, __selection?: string): Promise<T & UserMessage>;
	domainDetail<T>(id: number, __selection?: string): Promise<T & DomainMessage>;
	pageTree<T>(code: string, __selection?: string): Promise<T & PageMessage>;
	widgetTree<T>(code: string, __selection?: string): Promise<T & WidgetMessage>;
	rightTree<T>(code: string, __selection?: string): Promise<T & RightMessage>;
	pageTrees<T>(__selection?: string): Promise<T & PageMessage>;
	widgetTrees<T>(__selection?: string): Promise<T & WidgetMessage>;
	rightTrees<T>(__selection?: string): Promise<T & RightMessage>;
	/*错误处理*/
	errorPost<T>(__selection?: string): Promise<T & ErrorPostResultMessage>;
	login<T>(__selection?: string): Promise<T & LoginResultMessage>;
	/*获取系统设置*/
	systemSetting<T>(systemCode: string, __selection?: string): Promise<T & SystemSettingResultMessage>;
}
export interface Mutation {
	userDelete<T>(id: number, __selection?: string): Promise<T & UserMessage>;
	domainDelete<T>(id: number, __selection?: string): Promise<T & DomainMessage>;
	userDeletes<T>(ids: number[], __selection?: string): Promise<T & UserMessage>;
	domainDeletes<T>(ids: number[], __selection?: string): Promise<T & DomainMessage>;
	userUpdate<T>(id: number, data: UserPartial, __selection?: string): Promise<T & UserMessage>;
	domainUpdate<T>(id: number, data: DomainPartial, __selection?: string): Promise<T & DomainMessage>;
	userEdit<T>(data: UserInput, __selection?: string): Promise<T & UserMessage>;
	domainEdit<T>(data: DomainInput, __selection?: string): Promise<T & DomainMessage>;
	userEdits<T>(datas: UserInput[], __selection?: string): Promise<T & UserMessage>;
	domainEdits<T>(datas: DomainInput[], __selection?: string): Promise<T & DomainMessage>;
}