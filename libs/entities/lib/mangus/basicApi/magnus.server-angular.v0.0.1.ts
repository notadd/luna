/* tslint:disable */
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	Json: any;
	Bool: any;
	Bytes: any;
	Date: any;
	Double: any;
	Empty: any;
	Error: any;
	Fixed32: any;
	Fixed64: any;
	Int32: any;
	Int64: any;
	Sfixed32: any;
	Sfixed64: any;
	Sint32: any;
	Sint64: any;
	Timestamp: any;
	Uint32: any;
	Uint64: any;
};

export type Domain = {
	__typename?: 'Domain';
	title?: Maybe<Scalars['String']>;
	code?: Maybe<Scalars['String']>;
};

export type DomainInput = {
	title?: Maybe<Scalars['String']>;
	code?: Maybe<Scalars['String']>;
};

export type DomainInputOrder = {
	title?: Maybe<Scalars['String']>;
	code?: Maybe<Scalars['String']>;
};

export type DomainInputWhere = {
	title_Not?: Maybe<Scalars['String']>;
	title_In?: Maybe<Array<Scalars['String']>>;
	title_NotIn?: Maybe<Array<Scalars['String']>>;
	title_Lt?: Maybe<Scalars['String']>;
	title_Lte?: Maybe<Scalars['String']>;
	title_Gt?: Maybe<Scalars['String']>;
	title_Gte?: Maybe<Scalars['String']>;
	title_Contains?: Maybe<Scalars['String']>;
	title_NotContains?: Maybe<Scalars['String']>;
	title_StartsWith?: Maybe<Scalars['String']>;
	title_NotStartsWith?: Maybe<Scalars['String']>;
	title_EndsWith?: Maybe<Scalars['String']>;
	title_NotEndsWith?: Maybe<Scalars['String']>;
	title?: Maybe<Scalars['String']>;
	code_Not?: Maybe<Scalars['String']>;
	code_In?: Maybe<Array<Scalars['String']>>;
	code_NotIn?: Maybe<Array<Scalars['String']>>;
	code_Lt?: Maybe<Scalars['String']>;
	code_Lte?: Maybe<Scalars['String']>;
	code_Gt?: Maybe<Scalars['String']>;
	code_Gte?: Maybe<Scalars['String']>;
	code_Contains?: Maybe<Scalars['String']>;
	code_NotContains?: Maybe<Scalars['String']>;
	code_StartsWith?: Maybe<Scalars['String']>;
	code_NotStartsWith?: Maybe<Scalars['String']>;
	code_EndsWith?: Maybe<Scalars['String']>;
	code_NotEndsWith?: Maybe<Scalars['String']>;
	code?: Maybe<Scalars['String']>;
	AND?: Maybe<Array<DomainInputWhere>>;
	OR?: Maybe<Array<DomainInputWhere>>;
	NOT?: Maybe<Array<DomainInputWhere>>;
};

export type DomainListResult = {
	__typename?: 'DomainListResult';
	list: Array<Maybe<Domain>>;
	count: Scalars['Int'];
};

export type DomainListResultMessages = {
	__typename?: 'DomainListResultMessages';
	code: Scalars['String'];
	message: Scalars['String'];
	data?: Maybe<DomainListResult>;
};

export type DomainMessage = {
	__typename?: 'DomainMessage';
	/**
	 * #### 1位:
	 * > H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
	 * #### 2位:
	 * > 错误等级,0-1 log 无, 2-3 info 无, 4-5 warning 无 6-7 error 需通知相关人员处理
	 * #### 3-5位:
	 * > 子系统编码
	 * #### 6-8位
	 * > 业务编码
	 **/
	code: Scalars['String'];
	/** 用户友好提示 */
	message: Scalars['String'];
	/** 返回数据 */
	data?: Maybe<Domain>;
};

export type DomainPartial = {
	title?: Maybe<Scalars['String']>;
	code?: Maybe<Scalars['String']>;
};

export type ErrorPostResult = {
	__typename?: 'ErrorPostResult';
	title?: Maybe<Scalars['String']>;
};

export type ErrorPostResultMessage = {
	__typename?: 'ErrorPostResultMessage';
	/**
	 * #### 1位:
	 * > H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
	 * #### 2位:
	 * > 错误等级,0-1 log 无, 2-3 info 无, 4-5 warning 无 6-7 error 需通知相关人员处理
	 * #### 3-5位:
	 * > 子系统编码
	 * #### 6-8位
	 * > 业务编码
	 **/
	code: Scalars['String'];
	/** 用户友好提示 */
	message: Scalars['String'];
	/** 返回数据 */
	data?: Maybe<ErrorPostResult>;
};

export type LimitInput = {
	page?: Maybe<Scalars['Int']>;
	psize?: Maybe<Scalars['Int']>;
};

export type LoginResult = {
	__typename?: 'LoginResult';
	token?: Maybe<Scalars['String']>;
	uid?: Maybe<Scalars['String']>;
};

export type LoginResultMessage = {
	__typename?: 'LoginResultMessage';
	/**
	 * #### 1位:
	 * > H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
	 * #### 2位:
	 * > 错误等级,0-1 log 无, 2-3 info 无, 4-5 warning 无 6-7 error 需通知相关人员处理
	 * #### 3-5位:
	 * > 子系统编码
	 * #### 6-8位
	 * > 业务编码
	 **/
	code: Scalars['String'];
	/** 用户友好提示 */
	message: Scalars['String'];
	/** 返回数据 */
	data?: Maybe<LoginResult>;
};

export type Mutation = {
	__typename?: 'Mutation';
	userDelete?: Maybe<UserMessage>;
	domainDelete?: Maybe<DomainMessage>;
	userDeletes?: Maybe<UserMessage>;
	domainDeletes?: Maybe<DomainMessage>;
	userUpdate?: Maybe<UserMessage>;
	domainUpdate?: Maybe<DomainMessage>;
	userEdit?: Maybe<UserMessage>;
	domainEdit?: Maybe<DomainMessage>;
	userEdits?: Maybe<UserMessage>;
	domainEdits?: Maybe<DomainMessage>;
};

export type MutationUserDeleteArgs = {
	id: Scalars['Int'];
};

export type MutationDomainDeleteArgs = {
	id: Scalars['Int'];
};

export type MutationUserDeletesArgs = {
	ids: Array<Maybe<Scalars['Int']>>;
};

export type MutationDomainDeletesArgs = {
	ids: Array<Maybe<Scalars['Int']>>;
};

export type MutationUserUpdateArgs = {
	id: Scalars['Int'];
	data: UserPartial;
};

export type MutationDomainUpdateArgs = {
	id: Scalars['Int'];
	data: DomainPartial;
};

export type MutationUserEditArgs = {
	data: UserInput;
};

export type MutationDomainEditArgs = {
	data: DomainInput;
};

export type MutationUserEditsArgs = {
	datas: Array<Maybe<UserInput>>;
};

export type MutationDomainEditsArgs = {
	datas: Array<Maybe<DomainInput>>;
};

export type Page = {
	__typename?: 'Page';
	title?: Maybe<Scalars['String']>;
};

export type PageMessage = {
	__typename?: 'PageMessage';
	/**
	 * #### 1位:
	 * > H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
	 * #### 2位:
	 * > 错误等级,0-1 log 无, 2-3 info 无, 4-5 warning 无 6-7 error 需通知相关人员处理
	 * #### 3-5位:
	 * > 子系统编码
	 * #### 6-8位
	 * > 业务编码
	 **/
	code: Scalars['String'];
	/** 用户友好提示 */
	message: Scalars['String'];
	/** 返回数据 */
	data?: Maybe<Page>;
};

export type PageSettingResult = {
	__typename?: 'PageSettingResult';
	title?: Maybe<Scalars['String']>;
	code?: Maybe<Scalars['String']>;
	url?: Maybe<Scalars['String']>;
	widgets?: Maybe<Array<Maybe<PageSettingWidget>>>;
};

export type PageSettingWidget = {
	__typename?: 'PageSettingWidget';
	code?: Maybe<Scalars['String']>;
	title?: Maybe<Scalars['String']>;
	/**
	 * ```ts
	 * {[key:string]: 'default'|'readonly'|'hidden'}
	 * ```
	 **/
	fields?: Maybe<Scalars['Json']>;
	/**
	 * ```ts
	 * export class PageSettingWidgetAction {
	 *    title: string;
	 *    display: boolean;
	 * }
	 * {[key:string]: PageSettingWidgetAction}
	 * ```
	 **/
	actions?: Maybe<Scalars['Json']>;
};

export type Query = {
	__typename?: 'Query';
	userList?: Maybe<UserListResultMessages>;
	domainList?: Maybe<DomainListResultMessages>;
	userDetail?: Maybe<UserMessage>;
	domainDetail?: Maybe<DomainMessage>;
	pageTree?: Maybe<PageMessage>;
	widgetTree?: Maybe<WidgetMessage>;
	rightTree?: Maybe<RightMessage>;
	pageTrees?: Maybe<PageMessage>;
	widgetTrees?: Maybe<WidgetMessage>;
	rightTrees?: Maybe<RightMessage>;
	/** 错误处理 */
	errorPost?: Maybe<ErrorPostResultMessage>;
	login?: Maybe<LoginResultMessage>;
	/** 获取系统设置 */
	systemSetting?: Maybe<SystemSettingResultMessage>;
};

export type QueryUserListArgs = {
	where?: Maybe<UserInputWhere>;
	order?: Maybe<UserInputOrder>;
	limit?: Maybe<LimitInput>;
};

export type QueryDomainListArgs = {
	where?: Maybe<DomainInputWhere>;
	order?: Maybe<DomainInputOrder>;
	limit?: Maybe<LimitInput>;
};

export type QueryUserDetailArgs = {
	id: Scalars['Int'];
};

export type QueryDomainDetailArgs = {
	id: Scalars['Int'];
};

export type QueryPageTreeArgs = {
	code: Scalars['String'];
};

export type QueryWidgetTreeArgs = {
	code: Scalars['String'];
};

export type QueryRightTreeArgs = {
	code: Scalars['String'];
};

export type QuerySystemSettingArgs = {
	systemCode: Scalars['String'];
};

export type Right = {
	__typename?: 'Right';
	/**
	 * ```ts
	 * 'actions'|'fields'
	 * ```
	 **/
	type?: Maybe<Scalars['String']>;
	/** 权限名 */
	title?: Maybe<Scalars['String']>;
	/** 权限代号 */
	code?: Maybe<Scalars['String']>;
	/** 默认值 */
	display?: Maybe<Scalars['Boolean']>;
	/**
	 * 状态
	 * ```ts
	 * 'hidden'|'default'|'readonly'
	 * ```
	 **/
	status?: Maybe<Scalars['String']>;
};

export type RightMessage = {
	__typename?: 'RightMessage';
	/**
	 * #### 1位:
	 * > H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
	 * #### 2位:
	 * > 错误等级,0-1 log 无, 2-3 info 无, 4-5 warning 无 6-7 error 需通知相关人员处理
	 * #### 3-5位:
	 * > 子系统编码
	 * #### 6-8位
	 * > 业务编码
	 **/
	code: Scalars['String'];
	/** 用户友好提示 */
	message: Scalars['String'];
	/** 返回数据 */
	data?: Maybe<Right>;
};

export type SystemSettingResult = {
	__typename?: 'SystemSettingResult';
	title?: Maybe<Scalars['String']>;
	code?: Maybe<Scalars['String']>;
	image?: Maybe<Scalars['String']>;
	url?: Maybe<Scalars['String']>;
	/**
	 * ```ts
	 * class SystemSettingNav {
	 *  		id: string;
	 *  		title: string;
	 *  		type: string;
	 *  		icon?: string;
	 *  		url?: string[];
	 *  		children: SystemSettingNav[];
	 * }
	 **/
	navs?: Maybe<Array<Maybe<Scalars['Json']>>>;
	pageSetting?: Maybe<PageSettingResult>;
};

export type SystemSettingResultPageSettingArgs = {
	pageCode?: Maybe<Scalars['String']>;
};

export type SystemSettingResultMessage = {
	__typename?: 'SystemSettingResultMessage';
	/**
	 * #### 1位:
	 * > H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
	 * #### 2位:
	 * > 错误等级,0-1 log 无, 2-3 info 无, 4-5 warning 无 6-7 error 需通知相关人员处理
	 * #### 3-5位:
	 * > 子系统编码
	 * #### 6-8位
	 * > 业务编码
	 **/
	code: Scalars['String'];
	/** 用户友好提示 */
	message: Scalars['String'];
	/** 返回数据 */
	data?: Maybe<SystemSettingResult>;
};

export type User = {
	__typename?: 'User';
	username?: Maybe<Scalars['String']>;
	password?: Maybe<Scalars['String']>;
};

export type UserInput = {
	username?: Maybe<Scalars['String']>;
	password?: Maybe<Scalars['String']>;
};

export type UserInputOrder = {
	username?: Maybe<Scalars['String']>;
	password?: Maybe<Scalars['String']>;
};

export type UserInputWhere = {
	username_Not?: Maybe<Scalars['String']>;
	username_In?: Maybe<Array<Scalars['String']>>;
	username_NotIn?: Maybe<Array<Scalars['String']>>;
	username_Lt?: Maybe<Scalars['String']>;
	username_Lte?: Maybe<Scalars['String']>;
	username_Gt?: Maybe<Scalars['String']>;
	username_Gte?: Maybe<Scalars['String']>;
	username_Contains?: Maybe<Scalars['String']>;
	username_NotContains?: Maybe<Scalars['String']>;
	username_StartsWith?: Maybe<Scalars['String']>;
	username_NotStartsWith?: Maybe<Scalars['String']>;
	username_EndsWith?: Maybe<Scalars['String']>;
	username_NotEndsWith?: Maybe<Scalars['String']>;
	username?: Maybe<Scalars['String']>;
	password_Not?: Maybe<Scalars['String']>;
	password_In?: Maybe<Array<Scalars['String']>>;
	password_NotIn?: Maybe<Array<Scalars['String']>>;
	password_Lt?: Maybe<Scalars['String']>;
	password_Lte?: Maybe<Scalars['String']>;
	password_Gt?: Maybe<Scalars['String']>;
	password_Gte?: Maybe<Scalars['String']>;
	password_Contains?: Maybe<Scalars['String']>;
	password_NotContains?: Maybe<Scalars['String']>;
	password_StartsWith?: Maybe<Scalars['String']>;
	password_NotStartsWith?: Maybe<Scalars['String']>;
	password_EndsWith?: Maybe<Scalars['String']>;
	password_NotEndsWith?: Maybe<Scalars['String']>;
	password?: Maybe<Scalars['String']>;
	AND?: Maybe<Array<UserInputWhere>>;
	OR?: Maybe<Array<UserInputWhere>>;
	NOT?: Maybe<Array<UserInputWhere>>;
};

export type UserListResult = {
	__typename?: 'UserListResult';
	list: Array<Maybe<User>>;
	count: Scalars['Int'];
};

export type UserListResultMessages = {
	__typename?: 'UserListResultMessages';
	code: Scalars['String'];
	message: Scalars['String'];
	data?: Maybe<UserListResult>;
};

export type UserMessage = {
	__typename?: 'UserMessage';
	/**
	 * #### 1位:
	 * > H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
	 * #### 2位:
	 * > 错误等级,0-1 log 无, 2-3 info 无, 4-5 warning 无 6-7 error 需通知相关人员处理
	 * #### 3-5位:
	 * > 子系统编码
	 * #### 6-8位
	 * > 业务编码
	 **/
	code: Scalars['String'];
	/** 用户友好提示 */
	message: Scalars['String'];
	/** 返回数据 */
	data?: Maybe<User>;
};

export type UserPartial = {
	username?: Maybe<Scalars['String']>;
	password?: Maybe<Scalars['String']>;
};

export type Widget = {
	__typename?: 'Widget';
	/** 代号 */
	code?: Maybe<Scalars['String']>;
	/** 标题 */
	title?: Maybe<Scalars['String']>;
	/**
	 * 操作按钮
	 * ```ts
	 * class ActionRight {
	 *   title: string;
	 *   display: boolean;
	 * }
	 * {[key: string]: ActionRight}
	 * ```
	 **/
	actions?: Maybe<Scalars['Json']>;
	/**
	 * 高级权限
	 * ```ts
	 * {[key:string]: 'default'|'readonly'|'hidden'}
	 * ```
	 **/
	fields?: Maybe<Scalars['Json']>;
	/** 此组建在那个页面 */
	page?: Maybe<Page>;
};

export type WidgetMessage = {
	__typename?: 'WidgetMessage';
	/**
	 * #### 1位:
	 * > H: Http 网络维护人员 B: Backend 后端人员 C: Client 前端人员
	 * #### 2位:
	 * > 错误等级,0-1 log 无, 2-3 info 无, 4-5 warning 无 6-7 error 需通知相关人员处理
	 * #### 3-5位:
	 * > 子系统编码
	 * #### 6-8位
	 * > 业务编码
	 **/
	code: Scalars['String'];
	/** 用户友好提示 */
	message: Scalars['String'];
	/** 返回数据 */
	data?: Maybe<Widget>;
};
export type UserListQueryVariables = {
	where?: Maybe<UserInputWhere>;
	order?: Maybe<UserInputOrder>;
	limit?: Maybe<LimitInput>;
};

export type UserListQuery = { __typename?: 'Query' } & {
	userList: Maybe<
		{ __typename?: 'UserListResultMessages' } & Pick<UserListResultMessages, 'code' | 'message'> & {
				data: Maybe<
					{ __typename?: 'UserListResult' } & Pick<UserListResult, 'count'> & {
							list: Array<Maybe<{ __typename?: 'User' } & Pick<User, 'username' | 'password'>>>;
						}
				>;
			}
	>;
};

export type DomainListQueryVariables = {
	where?: Maybe<DomainInputWhere>;
	order?: Maybe<DomainInputOrder>;
	limit?: Maybe<LimitInput>;
};

export type DomainListQuery = { __typename?: 'Query' } & {
	domainList: Maybe<
		{ __typename?: 'DomainListResultMessages' } & Pick<DomainListResultMessages, 'code' | 'message'> & {
				data: Maybe<
					{ __typename?: 'DomainListResult' } & Pick<DomainListResult, 'count'> & {
							list: Array<Maybe<{ __typename?: 'Domain' } & Pick<Domain, 'title' | 'code'>>>;
						}
				>;
			}
	>;
};

export type UserDetailQueryVariables = {
	id: Scalars['Int'];
};

export type UserDetailQuery = { __typename?: 'Query' } & {
	userDetail: Maybe<
		{ __typename?: 'UserMessage' } & Pick<UserMessage, 'code' | 'message'> & {
				data: Maybe<{ __typename?: 'User' } & Pick<User, 'username' | 'password'>>;
			}
	>;
};

export type DomainDetailQueryVariables = {
	id: Scalars['Int'];
};

export type DomainDetailQuery = { __typename?: 'Query' } & {
	domainDetail: Maybe<
		{ __typename?: 'DomainMessage' } & Pick<DomainMessage, 'code' | 'message'> & {
				data: Maybe<{ __typename?: 'Domain' } & Pick<Domain, 'title' | 'code'>>;
			}
	>;
};

export type PageTreeQueryVariables = {
	code: Scalars['String'];
};

export type PageTreeQuery = { __typename?: 'Query' } & {
	pageTree: Maybe<
		{ __typename?: 'PageMessage' } & Pick<PageMessage, 'code' | 'message'> & {
				data: Maybe<{ __typename?: 'Page' } & Pick<Page, 'title'>>;
			}
	>;
};

export type WidgetTreeQueryVariables = {
	code: Scalars['String'];
};

export type WidgetTreeQuery = { __typename?: 'Query' } & {
	widgetTree: Maybe<
		{ __typename?: 'WidgetMessage' } & Pick<WidgetMessage, 'code' | 'message'> & {
				data: Maybe<
					{ __typename?: 'Widget' } & Pick<Widget, 'code' | 'title' | 'actions' | 'fields'> & {
							page: Maybe<{ __typename?: 'Page' } & Pick<Page, 'title'>>;
						}
				>;
			}
	>;
};

export type RightTreeQueryVariables = {
	code: Scalars['String'];
};

export type RightTreeQuery = { __typename?: 'Query' } & {
	rightTree: Maybe<
		{ __typename?: 'RightMessage' } & Pick<RightMessage, 'code' | 'message'> & {
				data: Maybe<
					{ __typename?: 'Right' } & Pick<Right, 'type' | 'title' | 'code' | 'display' | 'status'>
				>;
			}
	>;
};

export type PageTreesQueryVariables = {};

export type PageTreesQuery = { __typename?: 'Query' } & {
	pageTrees: Maybe<
		{ __typename?: 'PageMessage' } & Pick<PageMessage, 'code' | 'message'> & {
				data: Maybe<{ __typename?: 'Page' } & Pick<Page, 'title'>>;
			}
	>;
};

export type WidgetTreesQueryVariables = {};

export type WidgetTreesQuery = { __typename?: 'Query' } & {
	widgetTrees: Maybe<
		{ __typename?: 'WidgetMessage' } & Pick<WidgetMessage, 'code' | 'message'> & {
				data: Maybe<
					{ __typename?: 'Widget' } & Pick<Widget, 'code' | 'title' | 'actions' | 'fields'> & {
							page: Maybe<{ __typename?: 'Page' } & Pick<Page, 'title'>>;
						}
				>;
			}
	>;
};

export type RightTreesQueryVariables = {};

export type RightTreesQuery = { __typename?: 'Query' } & {
	rightTrees: Maybe<
		{ __typename?: 'RightMessage' } & Pick<RightMessage, 'code' | 'message'> & {
				data: Maybe<
					{ __typename?: 'Right' } & Pick<Right, 'type' | 'title' | 'code' | 'display' | 'status'>
				>;
			}
	>;
};

export type ErrorPostQueryVariables = {};

export type ErrorPostQuery = { __typename?: 'Query' } & {
	errorPost: Maybe<
		{ __typename?: 'ErrorPostResultMessage' } & Pick<ErrorPostResultMessage, 'code' | 'message'> & {
				data: Maybe<{ __typename?: 'ErrorPostResult' } & Pick<ErrorPostResult, 'title'>>;
			}
	>;
};

export type LoginQueryVariables = {};

export type LoginQuery = { __typename?: 'Query' } & {
	login: Maybe<
		{ __typename?: 'LoginResultMessage' } & Pick<LoginResultMessage, 'code' | 'message'> & {
				data: Maybe<{ __typename?: 'LoginResult' } & Pick<LoginResult, 'token' | 'uid'>>;
			}
	>;
};

export type SystemSettingQueryVariables = {
	systemCode: Scalars['String'];
	pageCode?: Maybe<Scalars['String']>;
};

export type SystemSettingQuery = { __typename?: 'Query' } & {
	systemSetting: Maybe<
		{ __typename?: 'SystemSettingResultMessage' } & Pick<
			SystemSettingResultMessage,
			'code' | 'message'
		> & {
				data: Maybe<
					{ __typename?: 'SystemSettingResult' } & Pick<
						SystemSettingResult,
						'title' | 'code' | 'image' | 'url' | 'navs'
					> & {
							pageSetting: Maybe<
								{ __typename?: 'PageSettingResult' } & Pick<
									PageSettingResult,
									'title' | 'code' | 'url'
								> & {
										widgets: Maybe<
											Array<
												Maybe<
													{ __typename?: 'PageSettingWidget' } & Pick<
														PageSettingWidget,
														'code' | 'title' | 'fields' | 'actions'
													>
												>
											>
										>;
									}
							>;
						}
				>;
			}
	>;
};

export type UserDeleteMutationVariables = {
	id: Scalars['Int'];
};

export type UserDeleteMutation = { __typename?: 'Mutation' } & {
	userDelete: Maybe<
		{ __typename?: 'UserMessage' } & Pick<UserMessage, 'code' | 'message'> & {
				data: Maybe<{ __typename?: 'User' } & Pick<User, 'username' | 'password'>>;
			}
	>;
};

export type DomainDeleteMutationVariables = {
	id: Scalars['Int'];
};

export type DomainDeleteMutation = { __typename?: 'Mutation' } & {
	domainDelete: Maybe<
		{ __typename?: 'DomainMessage' } & Pick<DomainMessage, 'code' | 'message'> & {
				data: Maybe<{ __typename?: 'Domain' } & Pick<Domain, 'title' | 'code'>>;
			}
	>;
};

export type UserDeletesMutationVariables = {
	ids: Array<Maybe<Scalars['Int']>>;
};

export type UserDeletesMutation = { __typename?: 'Mutation' } & {
	userDeletes: Maybe<
		{ __typename?: 'UserMessage' } & Pick<UserMessage, 'code' | 'message'> & {
				data: Maybe<{ __typename?: 'User' } & Pick<User, 'username' | 'password'>>;
			}
	>;
};

export type DomainDeletesMutationVariables = {
	ids: Array<Maybe<Scalars['Int']>>;
};

export type DomainDeletesMutation = { __typename?: 'Mutation' } & {
	domainDeletes: Maybe<
		{ __typename?: 'DomainMessage' } & Pick<DomainMessage, 'code' | 'message'> & {
				data: Maybe<{ __typename?: 'Domain' } & Pick<Domain, 'title' | 'code'>>;
			}
	>;
};

export type UserUpdateMutationVariables = {
	id: Scalars['Int'];
	data: UserPartial;
};

export type UserUpdateMutation = { __typename?: 'Mutation' } & {
	userUpdate: Maybe<
		{ __typename?: 'UserMessage' } & Pick<UserMessage, 'code' | 'message'> & {
				data: Maybe<{ __typename?: 'User' } & Pick<User, 'username' | 'password'>>;
			}
	>;
};

export type DomainUpdateMutationVariables = {
	id: Scalars['Int'];
	data: DomainPartial;
};

export type DomainUpdateMutation = { __typename?: 'Mutation' } & {
	domainUpdate: Maybe<
		{ __typename?: 'DomainMessage' } & Pick<DomainMessage, 'code' | 'message'> & {
				data: Maybe<{ __typename?: 'Domain' } & Pick<Domain, 'title' | 'code'>>;
			}
	>;
};

export type UserEditMutationVariables = {
	data: UserInput;
};

export type UserEditMutation = { __typename?: 'Mutation' } & {
	userEdit: Maybe<
		{ __typename?: 'UserMessage' } & Pick<UserMessage, 'code' | 'message'> & {
				data: Maybe<{ __typename?: 'User' } & Pick<User, 'username' | 'password'>>;
			}
	>;
};

export type DomainEditMutationVariables = {
	data: DomainInput;
};

export type DomainEditMutation = { __typename?: 'Mutation' } & {
	domainEdit: Maybe<
		{ __typename?: 'DomainMessage' } & Pick<DomainMessage, 'code' | 'message'> & {
				data: Maybe<{ __typename?: 'Domain' } & Pick<Domain, 'title' | 'code'>>;
			}
	>;
};

export type UserEditsMutationVariables = {
	datas: Array<Maybe<UserInput>>;
};

export type UserEditsMutation = { __typename?: 'Mutation' } & {
	userEdits: Maybe<
		{ __typename?: 'UserMessage' } & Pick<UserMessage, 'code' | 'message'> & {
				data: Maybe<{ __typename?: 'User' } & Pick<User, 'username' | 'password'>>;
			}
	>;
};

export type DomainEditsMutationVariables = {
	datas: Array<Maybe<DomainInput>>;
};

export type DomainEditsMutation = { __typename?: 'Mutation' } & {
	domainEdits: Maybe<
		{ __typename?: 'DomainMessage' } & Pick<DomainMessage, 'code' | 'message'> & {
				data: Maybe<{ __typename?: 'Domain' } & Pick<Domain, 'title' | 'code'>>;
			}
	>;
};

export const UserListDocument = gql`
	query userList($where: UserInputWhere, $order: UserInputOrder, $limit: LimitInput) {
		userList(where: $where, order: $order, limit: $limit) {
			code
			message
			data {
				list {
					username
					password
				}
				count
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class UserListGQL extends Apollo.Query<UserListQuery, UserListQueryVariables> {
	document = UserListDocument;
	client = 'basicApi';
}
export const DomainListDocument = gql`
	query domainList($where: DomainInputWhere, $order: DomainInputOrder, $limit: LimitInput) {
		domainList(where: $where, order: $order, limit: $limit) {
			code
			message
			data {
				list {
					title
					code
				}
				count
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class DomainListGQL extends Apollo.Query<DomainListQuery, DomainListQueryVariables> {
	document = DomainListDocument;
	client = 'basicApi';
}
export const UserDetailDocument = gql`
	query userDetail($id: Int!) {
		userDetail(id: $id) {
			code
			message
			data {
				username
				password
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class UserDetailGQL extends Apollo.Query<UserDetailQuery, UserDetailQueryVariables> {
	document = UserDetailDocument;
	client = 'basicApi';
}
export const DomainDetailDocument = gql`
	query domainDetail($id: Int!) {
		domainDetail(id: $id) {
			code
			message
			data {
				title
				code
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class DomainDetailGQL extends Apollo.Query<DomainDetailQuery, DomainDetailQueryVariables> {
	document = DomainDetailDocument;
	client = 'basicApi';
}
export const PageTreeDocument = gql`
	query pageTree($code: String!) {
		pageTree(code: $code) {
			code
			message
			data {
				title
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class PageTreeGQL extends Apollo.Query<PageTreeQuery, PageTreeQueryVariables> {
	document = PageTreeDocument;
	client = 'basicApi';
}
export const WidgetTreeDocument = gql`
	query widgetTree($code: String!) {
		widgetTree(code: $code) {
			code
			message
			data {
				code
				title
				actions
				fields
				page {
					title
				}
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class WidgetTreeGQL extends Apollo.Query<WidgetTreeQuery, WidgetTreeQueryVariables> {
	document = WidgetTreeDocument;
	client = 'basicApi';
}
export const RightTreeDocument = gql`
	query rightTree($code: String!) {
		rightTree(code: $code) {
			code
			message
			data {
				type
				title
				code
				display
				status
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class RightTreeGQL extends Apollo.Query<RightTreeQuery, RightTreeQueryVariables> {
	document = RightTreeDocument;
	client = 'basicApi';
}
export const PageTreesDocument = gql`
	query pageTrees {
		pageTrees {
			code
			message
			data {
				title
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class PageTreesGQL extends Apollo.Query<PageTreesQuery, PageTreesQueryVariables> {
	document = PageTreesDocument;
	client = 'basicApi';
}
export const WidgetTreesDocument = gql`
	query widgetTrees {
		widgetTrees {
			code
			message
			data {
				code
				title
				actions
				fields
				page {
					title
				}
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class WidgetTreesGQL extends Apollo.Query<WidgetTreesQuery, WidgetTreesQueryVariables> {
	document = WidgetTreesDocument;
	client = 'basicApi';
}
export const RightTreesDocument = gql`
	query rightTrees {
		rightTrees {
			code
			message
			data {
				type
				title
				code
				display
				status
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class RightTreesGQL extends Apollo.Query<RightTreesQuery, RightTreesQueryVariables> {
	document = RightTreesDocument;
	client = 'basicApi';
}
export const ErrorPostDocument = gql`
	query errorPost {
		errorPost {
			code
			message
			data {
				title
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class ErrorPostGQL extends Apollo.Query<ErrorPostQuery, ErrorPostQueryVariables> {
	document = ErrorPostDocument;
	client = 'basicApi';
}
export const LoginDocument = gql`
	query login {
		login {
			code
			message
			data {
				token
				uid
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class LoginGQL extends Apollo.Query<LoginQuery, LoginQueryVariables> {
	document = LoginDocument;
	client = 'basicApi';
}
export const SystemSettingDocument = gql`
	query systemSetting($systemCode: String!, $pageCode: String) {
		systemSetting(systemCode: $systemCode) {
			code
			message
			data {
				title
				code
				image
				url
				navs
				pageSetting(pageCode: $pageCode) {
					title
					code
					url
					widgets {
						code
						title
						fields
						actions
					}
				}
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class SystemSettingGQL extends Apollo.Query<SystemSettingQuery, SystemSettingQueryVariables> {
	document = SystemSettingDocument;
	client = 'basicApi';
}
export const UserDeleteDocument = gql`
	mutation userDelete($id: Int!) {
		userDelete(id: $id) {
			code
			message
			data {
				username
				password
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class UserDeleteGQL extends Apollo.Mutation<UserDeleteMutation, UserDeleteMutationVariables> {
	document = UserDeleteDocument;
	client = 'basicApi';
}
export const DomainDeleteDocument = gql`
	mutation domainDelete($id: Int!) {
		domainDelete(id: $id) {
			code
			message
			data {
				title
				code
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class DomainDeleteGQL extends Apollo.Mutation<DomainDeleteMutation, DomainDeleteMutationVariables> {
	document = DomainDeleteDocument;
	client = 'basicApi';
}
export const UserDeletesDocument = gql`
	mutation userDeletes($ids: [Int]!) {
		userDeletes(ids: $ids) {
			code
			message
			data {
				username
				password
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class UserDeletesGQL extends Apollo.Mutation<UserDeletesMutation, UserDeletesMutationVariables> {
	document = UserDeletesDocument;
	client = 'basicApi';
}
export const DomainDeletesDocument = gql`
	mutation domainDeletes($ids: [Int]!) {
		domainDeletes(ids: $ids) {
			code
			message
			data {
				title
				code
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class DomainDeletesGQL extends Apollo.Mutation<DomainDeletesMutation, DomainDeletesMutationVariables> {
	document = DomainDeletesDocument;
	client = 'basicApi';
}
export const UserUpdateDocument = gql`
	mutation userUpdate($id: Int!, $data: UserPartial!) {
		userUpdate(id: $id, data: $data) {
			code
			message
			data {
				username
				password
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class UserUpdateGQL extends Apollo.Mutation<UserUpdateMutation, UserUpdateMutationVariables> {
	document = UserUpdateDocument;
	client = 'basicApi';
}
export const DomainUpdateDocument = gql`
	mutation domainUpdate($id: Int!, $data: DomainPartial!) {
		domainUpdate(id: $id, data: $data) {
			code
			message
			data {
				title
				code
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class DomainUpdateGQL extends Apollo.Mutation<DomainUpdateMutation, DomainUpdateMutationVariables> {
	document = DomainUpdateDocument;
	client = 'basicApi';
}
export const UserEditDocument = gql`
	mutation userEdit($data: UserInput!) {
		userEdit(data: $data) {
			code
			message
			data {
				username
				password
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class UserEditGQL extends Apollo.Mutation<UserEditMutation, UserEditMutationVariables> {
	document = UserEditDocument;
	client = 'basicApi';
}
export const DomainEditDocument = gql`
	mutation domainEdit($data: DomainInput!) {
		domainEdit(data: $data) {
			code
			message
			data {
				title
				code
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class DomainEditGQL extends Apollo.Mutation<DomainEditMutation, DomainEditMutationVariables> {
	document = DomainEditDocument;
	client = 'basicApi';
}
export const UserEditsDocument = gql`
	mutation userEdits($datas: [UserInput]!) {
		userEdits(datas: $datas) {
			code
			message
			data {
				username
				password
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class UserEditsGQL extends Apollo.Mutation<UserEditsMutation, UserEditsMutationVariables> {
	document = UserEditsDocument;
	client = 'basicApi';
}
export const DomainEditsDocument = gql`
	mutation domainEdits($datas: [DomainInput]!) {
		domainEdits(datas: $datas) {
			code
			message
			data {
				title
				code
			}
		}
	}
`;

@Injectable({
	providedIn: 'root'
})
export class DomainEditsGQL extends Apollo.Mutation<DomainEditsMutation, DomainEditsMutationVariables> {
	document = DomainEditsDocument;
	client = 'basicApi';
}
export interface IntrospectionResultData {
	__schema: {
		types: {
			kind: string;
			name: string;
			possibleTypes: {
				name: string;
			}[];
		}[];
	};
}

const result: IntrospectionResultData = {
	__schema: {
		types: []
	}
};

export default result;
