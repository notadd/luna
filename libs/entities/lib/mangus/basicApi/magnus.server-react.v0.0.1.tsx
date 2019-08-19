/* tslint:disable */
import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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
export type UserListComponentProps = Omit<
	ApolloReactComponents.QueryComponentOptions<UserListQuery, UserListQueryVariables>,
	'query'
>;

export const UserListComponent = (props: UserListComponentProps) => (
	<ApolloReactComponents.Query<UserListQuery, UserListQueryVariables> query={UserListDocument} {...props} />
);

export type UserListProps<TChildProps = {}> = ApolloReactHoc.DataProps<
	UserListQuery,
	UserListQueryVariables
> &
	TChildProps;
export function withUserList<TProps, TChildProps = {}>(
	operationOptions?: ApolloReactHoc.OperationOption<
		TProps,
		UserListQuery,
		UserListQueryVariables,
		UserListProps<TChildProps>
	>
) {
	return ApolloReactHoc.withQuery<
		TProps,
		UserListQuery,
		UserListQueryVariables,
		UserListProps<TChildProps>
	>(UserListDocument, {
		alias: 'withUserList',
		...operationOptions
	});
}
export type UserListQueryResult = ApolloReactCommon.QueryResult<UserListQuery, UserListQueryVariables>;
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
export type DomainListComponentProps = Omit<
	ApolloReactComponents.QueryComponentOptions<DomainListQuery, DomainListQueryVariables>,
	'query'
>;

export const DomainListComponent = (props: DomainListComponentProps) => (
	<ApolloReactComponents.Query<DomainListQuery, DomainListQueryVariables>
		query={DomainListDocument}
		{...props}
	/>
);

export type DomainListProps<TChildProps = {}> = ApolloReactHoc.DataProps<
	DomainListQuery,
	DomainListQueryVariables
> &
	TChildProps;
export function withDomainList<TProps, TChildProps = {}>(
	operationOptions?: ApolloReactHoc.OperationOption<
		TProps,
		DomainListQuery,
		DomainListQueryVariables,
		DomainListProps<TChildProps>
	>
) {
	return ApolloReactHoc.withQuery<
		TProps,
		DomainListQuery,
		DomainListQueryVariables,
		DomainListProps<TChildProps>
	>(DomainListDocument, {
		alias: 'withDomainList',
		...operationOptions
	});
}
export type DomainListQueryResult = ApolloReactCommon.QueryResult<DomainListQuery, DomainListQueryVariables>;
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
export type UserDetailComponentProps = Omit<
	ApolloReactComponents.QueryComponentOptions<UserDetailQuery, UserDetailQueryVariables>,
	'query'
> &
	({ variables: UserDetailQueryVariables; skip?: boolean } | { skip: boolean });

export const UserDetailComponent = (props: UserDetailComponentProps) => (
	<ApolloReactComponents.Query<UserDetailQuery, UserDetailQueryVariables>
		query={UserDetailDocument}
		{...props}
	/>
);

export type UserDetailProps<TChildProps = {}> = ApolloReactHoc.DataProps<
	UserDetailQuery,
	UserDetailQueryVariables
> &
	TChildProps;
export function withUserDetail<TProps, TChildProps = {}>(
	operationOptions?: ApolloReactHoc.OperationOption<
		TProps,
		UserDetailQuery,
		UserDetailQueryVariables,
		UserDetailProps<TChildProps>
	>
) {
	return ApolloReactHoc.withQuery<
		TProps,
		UserDetailQuery,
		UserDetailQueryVariables,
		UserDetailProps<TChildProps>
	>(UserDetailDocument, {
		alias: 'withUserDetail',
		...operationOptions
	});
}
export type UserDetailQueryResult = ApolloReactCommon.QueryResult<UserDetailQuery, UserDetailQueryVariables>;
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
export type DomainDetailComponentProps = Omit<
	ApolloReactComponents.QueryComponentOptions<DomainDetailQuery, DomainDetailQueryVariables>,
	'query'
> &
	({ variables: DomainDetailQueryVariables; skip?: boolean } | { skip: boolean });

export const DomainDetailComponent = (props: DomainDetailComponentProps) => (
	<ApolloReactComponents.Query<DomainDetailQuery, DomainDetailQueryVariables>
		query={DomainDetailDocument}
		{...props}
	/>
);

export type DomainDetailProps<TChildProps = {}> = ApolloReactHoc.DataProps<
	DomainDetailQuery,
	DomainDetailQueryVariables
> &
	TChildProps;
export function withDomainDetail<TProps, TChildProps = {}>(
	operationOptions?: ApolloReactHoc.OperationOption<
		TProps,
		DomainDetailQuery,
		DomainDetailQueryVariables,
		DomainDetailProps<TChildProps>
	>
) {
	return ApolloReactHoc.withQuery<
		TProps,
		DomainDetailQuery,
		DomainDetailQueryVariables,
		DomainDetailProps<TChildProps>
	>(DomainDetailDocument, {
		alias: 'withDomainDetail',
		...operationOptions
	});
}
export type DomainDetailQueryResult = ApolloReactCommon.QueryResult<
	DomainDetailQuery,
	DomainDetailQueryVariables
>;
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
export type PageTreeComponentProps = Omit<
	ApolloReactComponents.QueryComponentOptions<PageTreeQuery, PageTreeQueryVariables>,
	'query'
> &
	({ variables: PageTreeQueryVariables; skip?: boolean } | { skip: boolean });

export const PageTreeComponent = (props: PageTreeComponentProps) => (
	<ApolloReactComponents.Query<PageTreeQuery, PageTreeQueryVariables> query={PageTreeDocument} {...props} />
);

export type PageTreeProps<TChildProps = {}> = ApolloReactHoc.DataProps<
	PageTreeQuery,
	PageTreeQueryVariables
> &
	TChildProps;
export function withPageTree<TProps, TChildProps = {}>(
	operationOptions?: ApolloReactHoc.OperationOption<
		TProps,
		PageTreeQuery,
		PageTreeQueryVariables,
		PageTreeProps<TChildProps>
	>
) {
	return ApolloReactHoc.withQuery<
		TProps,
		PageTreeQuery,
		PageTreeQueryVariables,
		PageTreeProps<TChildProps>
	>(PageTreeDocument, {
		alias: 'withPageTree',
		...operationOptions
	});
}
export type PageTreeQueryResult = ApolloReactCommon.QueryResult<PageTreeQuery, PageTreeQueryVariables>;
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
export type WidgetTreeComponentProps = Omit<
	ApolloReactComponents.QueryComponentOptions<WidgetTreeQuery, WidgetTreeQueryVariables>,
	'query'
> &
	({ variables: WidgetTreeQueryVariables; skip?: boolean } | { skip: boolean });

export const WidgetTreeComponent = (props: WidgetTreeComponentProps) => (
	<ApolloReactComponents.Query<WidgetTreeQuery, WidgetTreeQueryVariables>
		query={WidgetTreeDocument}
		{...props}
	/>
);

export type WidgetTreeProps<TChildProps = {}> = ApolloReactHoc.DataProps<
	WidgetTreeQuery,
	WidgetTreeQueryVariables
> &
	TChildProps;
export function withWidgetTree<TProps, TChildProps = {}>(
	operationOptions?: ApolloReactHoc.OperationOption<
		TProps,
		WidgetTreeQuery,
		WidgetTreeQueryVariables,
		WidgetTreeProps<TChildProps>
	>
) {
	return ApolloReactHoc.withQuery<
		TProps,
		WidgetTreeQuery,
		WidgetTreeQueryVariables,
		WidgetTreeProps<TChildProps>
	>(WidgetTreeDocument, {
		alias: 'withWidgetTree',
		...operationOptions
	});
}
export type WidgetTreeQueryResult = ApolloReactCommon.QueryResult<WidgetTreeQuery, WidgetTreeQueryVariables>;
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
export type RightTreeComponentProps = Omit<
	ApolloReactComponents.QueryComponentOptions<RightTreeQuery, RightTreeQueryVariables>,
	'query'
> &
	({ variables: RightTreeQueryVariables; skip?: boolean } | { skip: boolean });

export const RightTreeComponent = (props: RightTreeComponentProps) => (
	<ApolloReactComponents.Query<RightTreeQuery, RightTreeQueryVariables>
		query={RightTreeDocument}
		{...props}
	/>
);

export type RightTreeProps<TChildProps = {}> = ApolloReactHoc.DataProps<
	RightTreeQuery,
	RightTreeQueryVariables
> &
	TChildProps;
export function withRightTree<TProps, TChildProps = {}>(
	operationOptions?: ApolloReactHoc.OperationOption<
		TProps,
		RightTreeQuery,
		RightTreeQueryVariables,
		RightTreeProps<TChildProps>
	>
) {
	return ApolloReactHoc.withQuery<
		TProps,
		RightTreeQuery,
		RightTreeQueryVariables,
		RightTreeProps<TChildProps>
	>(RightTreeDocument, {
		alias: 'withRightTree',
		...operationOptions
	});
}
export type RightTreeQueryResult = ApolloReactCommon.QueryResult<RightTreeQuery, RightTreeQueryVariables>;
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
export type PageTreesComponentProps = Omit<
	ApolloReactComponents.QueryComponentOptions<PageTreesQuery, PageTreesQueryVariables>,
	'query'
>;

export const PageTreesComponent = (props: PageTreesComponentProps) => (
	<ApolloReactComponents.Query<PageTreesQuery, PageTreesQueryVariables>
		query={PageTreesDocument}
		{...props}
	/>
);

export type PageTreesProps<TChildProps = {}> = ApolloReactHoc.DataProps<
	PageTreesQuery,
	PageTreesQueryVariables
> &
	TChildProps;
export function withPageTrees<TProps, TChildProps = {}>(
	operationOptions?: ApolloReactHoc.OperationOption<
		TProps,
		PageTreesQuery,
		PageTreesQueryVariables,
		PageTreesProps<TChildProps>
	>
) {
	return ApolloReactHoc.withQuery<
		TProps,
		PageTreesQuery,
		PageTreesQueryVariables,
		PageTreesProps<TChildProps>
	>(PageTreesDocument, {
		alias: 'withPageTrees',
		...operationOptions
	});
}
export type PageTreesQueryResult = ApolloReactCommon.QueryResult<PageTreesQuery, PageTreesQueryVariables>;
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
export type WidgetTreesComponentProps = Omit<
	ApolloReactComponents.QueryComponentOptions<WidgetTreesQuery, WidgetTreesQueryVariables>,
	'query'
>;

export const WidgetTreesComponent = (props: WidgetTreesComponentProps) => (
	<ApolloReactComponents.Query<WidgetTreesQuery, WidgetTreesQueryVariables>
		query={WidgetTreesDocument}
		{...props}
	/>
);

export type WidgetTreesProps<TChildProps = {}> = ApolloReactHoc.DataProps<
	WidgetTreesQuery,
	WidgetTreesQueryVariables
> &
	TChildProps;
export function withWidgetTrees<TProps, TChildProps = {}>(
	operationOptions?: ApolloReactHoc.OperationOption<
		TProps,
		WidgetTreesQuery,
		WidgetTreesQueryVariables,
		WidgetTreesProps<TChildProps>
	>
) {
	return ApolloReactHoc.withQuery<
		TProps,
		WidgetTreesQuery,
		WidgetTreesQueryVariables,
		WidgetTreesProps<TChildProps>
	>(WidgetTreesDocument, {
		alias: 'withWidgetTrees',
		...operationOptions
	});
}
export type WidgetTreesQueryResult = ApolloReactCommon.QueryResult<
	WidgetTreesQuery,
	WidgetTreesQueryVariables
>;
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
export type RightTreesComponentProps = Omit<
	ApolloReactComponents.QueryComponentOptions<RightTreesQuery, RightTreesQueryVariables>,
	'query'
>;

export const RightTreesComponent = (props: RightTreesComponentProps) => (
	<ApolloReactComponents.Query<RightTreesQuery, RightTreesQueryVariables>
		query={RightTreesDocument}
		{...props}
	/>
);

export type RightTreesProps<TChildProps = {}> = ApolloReactHoc.DataProps<
	RightTreesQuery,
	RightTreesQueryVariables
> &
	TChildProps;
export function withRightTrees<TProps, TChildProps = {}>(
	operationOptions?: ApolloReactHoc.OperationOption<
		TProps,
		RightTreesQuery,
		RightTreesQueryVariables,
		RightTreesProps<TChildProps>
	>
) {
	return ApolloReactHoc.withQuery<
		TProps,
		RightTreesQuery,
		RightTreesQueryVariables,
		RightTreesProps<TChildProps>
	>(RightTreesDocument, {
		alias: 'withRightTrees',
		...operationOptions
	});
}
export type RightTreesQueryResult = ApolloReactCommon.QueryResult<RightTreesQuery, RightTreesQueryVariables>;
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
export type ErrorPostComponentProps = Omit<
	ApolloReactComponents.QueryComponentOptions<ErrorPostQuery, ErrorPostQueryVariables>,
	'query'
>;

export const ErrorPostComponent = (props: ErrorPostComponentProps) => (
	<ApolloReactComponents.Query<ErrorPostQuery, ErrorPostQueryVariables>
		query={ErrorPostDocument}
		{...props}
	/>
);

export type ErrorPostProps<TChildProps = {}> = ApolloReactHoc.DataProps<
	ErrorPostQuery,
	ErrorPostQueryVariables
> &
	TChildProps;
export function withErrorPost<TProps, TChildProps = {}>(
	operationOptions?: ApolloReactHoc.OperationOption<
		TProps,
		ErrorPostQuery,
		ErrorPostQueryVariables,
		ErrorPostProps<TChildProps>
	>
) {
	return ApolloReactHoc.withQuery<
		TProps,
		ErrorPostQuery,
		ErrorPostQueryVariables,
		ErrorPostProps<TChildProps>
	>(ErrorPostDocument, {
		alias: 'withErrorPost',
		...operationOptions
	});
}
export type ErrorPostQueryResult = ApolloReactCommon.QueryResult<ErrorPostQuery, ErrorPostQueryVariables>;
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
export type LoginComponentProps = Omit<
	ApolloReactComponents.QueryComponentOptions<LoginQuery, LoginQueryVariables>,
	'query'
>;

export const LoginComponent = (props: LoginComponentProps) => (
	<ApolloReactComponents.Query<LoginQuery, LoginQueryVariables> query={LoginDocument} {...props} />
);

export type LoginProps<TChildProps = {}> = ApolloReactHoc.DataProps<LoginQuery, LoginQueryVariables> &
	TChildProps;
export function withLogin<TProps, TChildProps = {}>(
	operationOptions?: ApolloReactHoc.OperationOption<
		TProps,
		LoginQuery,
		LoginQueryVariables,
		LoginProps<TChildProps>
	>
) {
	return ApolloReactHoc.withQuery<TProps, LoginQuery, LoginQueryVariables, LoginProps<TChildProps>>(
		LoginDocument,
		{
			alias: 'withLogin',
			...operationOptions
		}
	);
}
export type LoginQueryResult = ApolloReactCommon.QueryResult<LoginQuery, LoginQueryVariables>;
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
export type SystemSettingComponentProps = Omit<
	ApolloReactComponents.QueryComponentOptions<SystemSettingQuery, SystemSettingQueryVariables>,
	'query'
> &
	({ variables: SystemSettingQueryVariables; skip?: boolean } | { skip: boolean });

export const SystemSettingComponent = (props: SystemSettingComponentProps) => (
	<ApolloReactComponents.Query<SystemSettingQuery, SystemSettingQueryVariables>
		query={SystemSettingDocument}
		{...props}
	/>
);

export type SystemSettingProps<TChildProps = {}> = ApolloReactHoc.DataProps<
	SystemSettingQuery,
	SystemSettingQueryVariables
> &
	TChildProps;
export function withSystemSetting<TProps, TChildProps = {}>(
	operationOptions?: ApolloReactHoc.OperationOption<
		TProps,
		SystemSettingQuery,
		SystemSettingQueryVariables,
		SystemSettingProps<TChildProps>
	>
) {
	return ApolloReactHoc.withQuery<
		TProps,
		SystemSettingQuery,
		SystemSettingQueryVariables,
		SystemSettingProps<TChildProps>
	>(SystemSettingDocument, {
		alias: 'withSystemSetting',
		...operationOptions
	});
}
export type SystemSettingQueryResult = ApolloReactCommon.QueryResult<
	SystemSettingQuery,
	SystemSettingQueryVariables
>;
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
export type UserDeleteMutationFn = ApolloReactCommon.MutationFunction<
	UserDeleteMutation,
	UserDeleteMutationVariables
>;
export type UserDeleteComponentProps = Omit<
	ApolloReactComponents.MutationComponentOptions<UserDeleteMutation, UserDeleteMutationVariables>,
	'mutation'
>;

export const UserDeleteComponent = (props: UserDeleteComponentProps) => (
	<ApolloReactComponents.Mutation<UserDeleteMutation, UserDeleteMutationVariables>
		mutation={UserDeleteDocument}
		{...props}
	/>
);

export type UserDeleteProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
	UserDeleteMutation,
	UserDeleteMutationVariables
> &
	TChildProps;
export function withUserDelete<TProps, TChildProps = {}>(
	operationOptions?: ApolloReactHoc.OperationOption<
		TProps,
		UserDeleteMutation,
		UserDeleteMutationVariables,
		UserDeleteProps<TChildProps>
	>
) {
	return ApolloReactHoc.withMutation<
		TProps,
		UserDeleteMutation,
		UserDeleteMutationVariables,
		UserDeleteProps<TChildProps>
	>(UserDeleteDocument, {
		alias: 'withUserDelete',
		...operationOptions
	});
}
export type UserDeleteMutationResult = ApolloReactCommon.MutationResult<UserDeleteMutation>;
export type UserDeleteMutationOptions = ApolloReactCommon.BaseMutationOptions<
	UserDeleteMutation,
	UserDeleteMutationVariables
>;
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
export type DomainDeleteMutationFn = ApolloReactCommon.MutationFunction<
	DomainDeleteMutation,
	DomainDeleteMutationVariables
>;
export type DomainDeleteComponentProps = Omit<
	ApolloReactComponents.MutationComponentOptions<DomainDeleteMutation, DomainDeleteMutationVariables>,
	'mutation'
>;

export const DomainDeleteComponent = (props: DomainDeleteComponentProps) => (
	<ApolloReactComponents.Mutation<DomainDeleteMutation, DomainDeleteMutationVariables>
		mutation={DomainDeleteDocument}
		{...props}
	/>
);

export type DomainDeleteProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
	DomainDeleteMutation,
	DomainDeleteMutationVariables
> &
	TChildProps;
export function withDomainDelete<TProps, TChildProps = {}>(
	operationOptions?: ApolloReactHoc.OperationOption<
		TProps,
		DomainDeleteMutation,
		DomainDeleteMutationVariables,
		DomainDeleteProps<TChildProps>
	>
) {
	return ApolloReactHoc.withMutation<
		TProps,
		DomainDeleteMutation,
		DomainDeleteMutationVariables,
		DomainDeleteProps<TChildProps>
	>(DomainDeleteDocument, {
		alias: 'withDomainDelete',
		...operationOptions
	});
}
export type DomainDeleteMutationResult = ApolloReactCommon.MutationResult<DomainDeleteMutation>;
export type DomainDeleteMutationOptions = ApolloReactCommon.BaseMutationOptions<
	DomainDeleteMutation,
	DomainDeleteMutationVariables
>;
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
export type UserDeletesMutationFn = ApolloReactCommon.MutationFunction<
	UserDeletesMutation,
	UserDeletesMutationVariables
>;
export type UserDeletesComponentProps = Omit<
	ApolloReactComponents.MutationComponentOptions<UserDeletesMutation, UserDeletesMutationVariables>,
	'mutation'
>;

export const UserDeletesComponent = (props: UserDeletesComponentProps) => (
	<ApolloReactComponents.Mutation<UserDeletesMutation, UserDeletesMutationVariables>
		mutation={UserDeletesDocument}
		{...props}
	/>
);

export type UserDeletesProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
	UserDeletesMutation,
	UserDeletesMutationVariables
> &
	TChildProps;
export function withUserDeletes<TProps, TChildProps = {}>(
	operationOptions?: ApolloReactHoc.OperationOption<
		TProps,
		UserDeletesMutation,
		UserDeletesMutationVariables,
		UserDeletesProps<TChildProps>
	>
) {
	return ApolloReactHoc.withMutation<
		TProps,
		UserDeletesMutation,
		UserDeletesMutationVariables,
		UserDeletesProps<TChildProps>
	>(UserDeletesDocument, {
		alias: 'withUserDeletes',
		...operationOptions
	});
}
export type UserDeletesMutationResult = ApolloReactCommon.MutationResult<UserDeletesMutation>;
export type UserDeletesMutationOptions = ApolloReactCommon.BaseMutationOptions<
	UserDeletesMutation,
	UserDeletesMutationVariables
>;
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
export type DomainDeletesMutationFn = ApolloReactCommon.MutationFunction<
	DomainDeletesMutation,
	DomainDeletesMutationVariables
>;
export type DomainDeletesComponentProps = Omit<
	ApolloReactComponents.MutationComponentOptions<DomainDeletesMutation, DomainDeletesMutationVariables>,
	'mutation'
>;

export const DomainDeletesComponent = (props: DomainDeletesComponentProps) => (
	<ApolloReactComponents.Mutation<DomainDeletesMutation, DomainDeletesMutationVariables>
		mutation={DomainDeletesDocument}
		{...props}
	/>
);

export type DomainDeletesProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
	DomainDeletesMutation,
	DomainDeletesMutationVariables
> &
	TChildProps;
export function withDomainDeletes<TProps, TChildProps = {}>(
	operationOptions?: ApolloReactHoc.OperationOption<
		TProps,
		DomainDeletesMutation,
		DomainDeletesMutationVariables,
		DomainDeletesProps<TChildProps>
	>
) {
	return ApolloReactHoc.withMutation<
		TProps,
		DomainDeletesMutation,
		DomainDeletesMutationVariables,
		DomainDeletesProps<TChildProps>
	>(DomainDeletesDocument, {
		alias: 'withDomainDeletes',
		...operationOptions
	});
}
export type DomainDeletesMutationResult = ApolloReactCommon.MutationResult<DomainDeletesMutation>;
export type DomainDeletesMutationOptions = ApolloReactCommon.BaseMutationOptions<
	DomainDeletesMutation,
	DomainDeletesMutationVariables
>;
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
export type UserUpdateMutationFn = ApolloReactCommon.MutationFunction<
	UserUpdateMutation,
	UserUpdateMutationVariables
>;
export type UserUpdateComponentProps = Omit<
	ApolloReactComponents.MutationComponentOptions<UserUpdateMutation, UserUpdateMutationVariables>,
	'mutation'
>;

export const UserUpdateComponent = (props: UserUpdateComponentProps) => (
	<ApolloReactComponents.Mutation<UserUpdateMutation, UserUpdateMutationVariables>
		mutation={UserUpdateDocument}
		{...props}
	/>
);

export type UserUpdateProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
	UserUpdateMutation,
	UserUpdateMutationVariables
> &
	TChildProps;
export function withUserUpdate<TProps, TChildProps = {}>(
	operationOptions?: ApolloReactHoc.OperationOption<
		TProps,
		UserUpdateMutation,
		UserUpdateMutationVariables,
		UserUpdateProps<TChildProps>
	>
) {
	return ApolloReactHoc.withMutation<
		TProps,
		UserUpdateMutation,
		UserUpdateMutationVariables,
		UserUpdateProps<TChildProps>
	>(UserUpdateDocument, {
		alias: 'withUserUpdate',
		...operationOptions
	});
}
export type UserUpdateMutationResult = ApolloReactCommon.MutationResult<UserUpdateMutation>;
export type UserUpdateMutationOptions = ApolloReactCommon.BaseMutationOptions<
	UserUpdateMutation,
	UserUpdateMutationVariables
>;
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
export type DomainUpdateMutationFn = ApolloReactCommon.MutationFunction<
	DomainUpdateMutation,
	DomainUpdateMutationVariables
>;
export type DomainUpdateComponentProps = Omit<
	ApolloReactComponents.MutationComponentOptions<DomainUpdateMutation, DomainUpdateMutationVariables>,
	'mutation'
>;

export const DomainUpdateComponent = (props: DomainUpdateComponentProps) => (
	<ApolloReactComponents.Mutation<DomainUpdateMutation, DomainUpdateMutationVariables>
		mutation={DomainUpdateDocument}
		{...props}
	/>
);

export type DomainUpdateProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
	DomainUpdateMutation,
	DomainUpdateMutationVariables
> &
	TChildProps;
export function withDomainUpdate<TProps, TChildProps = {}>(
	operationOptions?: ApolloReactHoc.OperationOption<
		TProps,
		DomainUpdateMutation,
		DomainUpdateMutationVariables,
		DomainUpdateProps<TChildProps>
	>
) {
	return ApolloReactHoc.withMutation<
		TProps,
		DomainUpdateMutation,
		DomainUpdateMutationVariables,
		DomainUpdateProps<TChildProps>
	>(DomainUpdateDocument, {
		alias: 'withDomainUpdate',
		...operationOptions
	});
}
export type DomainUpdateMutationResult = ApolloReactCommon.MutationResult<DomainUpdateMutation>;
export type DomainUpdateMutationOptions = ApolloReactCommon.BaseMutationOptions<
	DomainUpdateMutation,
	DomainUpdateMutationVariables
>;
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
export type UserEditMutationFn = ApolloReactCommon.MutationFunction<
	UserEditMutation,
	UserEditMutationVariables
>;
export type UserEditComponentProps = Omit<
	ApolloReactComponents.MutationComponentOptions<UserEditMutation, UserEditMutationVariables>,
	'mutation'
>;

export const UserEditComponent = (props: UserEditComponentProps) => (
	<ApolloReactComponents.Mutation<UserEditMutation, UserEditMutationVariables>
		mutation={UserEditDocument}
		{...props}
	/>
);

export type UserEditProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
	UserEditMutation,
	UserEditMutationVariables
> &
	TChildProps;
export function withUserEdit<TProps, TChildProps = {}>(
	operationOptions?: ApolloReactHoc.OperationOption<
		TProps,
		UserEditMutation,
		UserEditMutationVariables,
		UserEditProps<TChildProps>
	>
) {
	return ApolloReactHoc.withMutation<
		TProps,
		UserEditMutation,
		UserEditMutationVariables,
		UserEditProps<TChildProps>
	>(UserEditDocument, {
		alias: 'withUserEdit',
		...operationOptions
	});
}
export type UserEditMutationResult = ApolloReactCommon.MutationResult<UserEditMutation>;
export type UserEditMutationOptions = ApolloReactCommon.BaseMutationOptions<
	UserEditMutation,
	UserEditMutationVariables
>;
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
export type DomainEditMutationFn = ApolloReactCommon.MutationFunction<
	DomainEditMutation,
	DomainEditMutationVariables
>;
export type DomainEditComponentProps = Omit<
	ApolloReactComponents.MutationComponentOptions<DomainEditMutation, DomainEditMutationVariables>,
	'mutation'
>;

export const DomainEditComponent = (props: DomainEditComponentProps) => (
	<ApolloReactComponents.Mutation<DomainEditMutation, DomainEditMutationVariables>
		mutation={DomainEditDocument}
		{...props}
	/>
);

export type DomainEditProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
	DomainEditMutation,
	DomainEditMutationVariables
> &
	TChildProps;
export function withDomainEdit<TProps, TChildProps = {}>(
	operationOptions?: ApolloReactHoc.OperationOption<
		TProps,
		DomainEditMutation,
		DomainEditMutationVariables,
		DomainEditProps<TChildProps>
	>
) {
	return ApolloReactHoc.withMutation<
		TProps,
		DomainEditMutation,
		DomainEditMutationVariables,
		DomainEditProps<TChildProps>
	>(DomainEditDocument, {
		alias: 'withDomainEdit',
		...operationOptions
	});
}
export type DomainEditMutationResult = ApolloReactCommon.MutationResult<DomainEditMutation>;
export type DomainEditMutationOptions = ApolloReactCommon.BaseMutationOptions<
	DomainEditMutation,
	DomainEditMutationVariables
>;
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
export type UserEditsMutationFn = ApolloReactCommon.MutationFunction<
	UserEditsMutation,
	UserEditsMutationVariables
>;
export type UserEditsComponentProps = Omit<
	ApolloReactComponents.MutationComponentOptions<UserEditsMutation, UserEditsMutationVariables>,
	'mutation'
>;

export const UserEditsComponent = (props: UserEditsComponentProps) => (
	<ApolloReactComponents.Mutation<UserEditsMutation, UserEditsMutationVariables>
		mutation={UserEditsDocument}
		{...props}
	/>
);

export type UserEditsProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
	UserEditsMutation,
	UserEditsMutationVariables
> &
	TChildProps;
export function withUserEdits<TProps, TChildProps = {}>(
	operationOptions?: ApolloReactHoc.OperationOption<
		TProps,
		UserEditsMutation,
		UserEditsMutationVariables,
		UserEditsProps<TChildProps>
	>
) {
	return ApolloReactHoc.withMutation<
		TProps,
		UserEditsMutation,
		UserEditsMutationVariables,
		UserEditsProps<TChildProps>
	>(UserEditsDocument, {
		alias: 'withUserEdits',
		...operationOptions
	});
}
export type UserEditsMutationResult = ApolloReactCommon.MutationResult<UserEditsMutation>;
export type UserEditsMutationOptions = ApolloReactCommon.BaseMutationOptions<
	UserEditsMutation,
	UserEditsMutationVariables
>;
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
export type DomainEditsMutationFn = ApolloReactCommon.MutationFunction<
	DomainEditsMutation,
	DomainEditsMutationVariables
>;
export type DomainEditsComponentProps = Omit<
	ApolloReactComponents.MutationComponentOptions<DomainEditsMutation, DomainEditsMutationVariables>,
	'mutation'
>;

export const DomainEditsComponent = (props: DomainEditsComponentProps) => (
	<ApolloReactComponents.Mutation<DomainEditsMutation, DomainEditsMutationVariables>
		mutation={DomainEditsDocument}
		{...props}
	/>
);

export type DomainEditsProps<TChildProps = {}> = ApolloReactHoc.MutateProps<
	DomainEditsMutation,
	DomainEditsMutationVariables
> &
	TChildProps;
export function withDomainEdits<TProps, TChildProps = {}>(
	operationOptions?: ApolloReactHoc.OperationOption<
		TProps,
		DomainEditsMutation,
		DomainEditsMutationVariables,
		DomainEditsProps<TChildProps>
	>
) {
	return ApolloReactHoc.withMutation<
		TProps,
		DomainEditsMutation,
		DomainEditsMutationVariables,
		DomainEditsProps<TChildProps>
	>(DomainEditsDocument, {
		alias: 'withDomainEdits',
		...operationOptions
	});
}
export type DomainEditsMutationResult = ApolloReactCommon.MutationResult<DomainEditsMutation>;
export type DomainEditsMutationOptions = ApolloReactCommon.BaseMutationOptions<
	DomainEditsMutation,
	DomainEditsMutationVariables
>;
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
