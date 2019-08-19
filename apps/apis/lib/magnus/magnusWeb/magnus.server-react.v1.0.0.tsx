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
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Bool: any,
  Bytes: any,
  Date: any,
  Double: any,
  Empty: any,
  Error: any,
  Fixed32: any,
  Fixed64: any,
  Int32: any,
  Int64: any,
  Json: any,
  Sfixed32: any,
  Sfixed64: any,
  Sint32: any,
  Sint64: any,
  Timestamp: any,
  Uint32: any,
  Uint64: any,
};









export type GameLog = {
  __typename?: 'GameLog',
  relations?: Maybe<Array<Maybe<Scalars['String']>>>,
  id?: Maybe<Scalars['Int']>,
  /** 输赢 */
  status?: Maybe<Scalars['Int']>,
  /** 注码 */
  count?: Maybe<Scalars['Int']>,
  /** 开始时间 */
  startTime?: Maybe<Scalars['String']>,
  /** 结束时间 */
  endTime?: Maybe<Scalars['String']>,
  /** 房间 */
  room?: Maybe<Room>,
  roomId?: Maybe<Scalars['Int']>,
  members?: Maybe<Array<Maybe<Member>>>,
  getMembers?: Maybe<Array<Maybe<Member>>>,
  memberId?: Maybe<Scalars['Int']>,
  /** 提现时间 */
  createDate?: Maybe<Scalars['String']>,
};


export type GameLogGetMembersArgs = {
  where?: Maybe<MemberInputWhere>,
  order?: Maybe<MemberInputOrder>,
  limit?: Maybe<PageLimitInput>
};

export type GameLogInput = {
  relations?: Maybe<Array<Maybe<Scalars['String']>>>,
  id?: Maybe<Scalars['Int']>,
  /** 输赢 */
  status?: Maybe<Scalars['Int']>,
  /** 注码 */
  count?: Maybe<Scalars['Int']>,
  /** 开始时间 */
  startTime?: Maybe<Scalars['String']>,
  /** 结束时间 */
  endTime?: Maybe<Scalars['String']>,
  /** 房间 */
  room?: Maybe<RoomInput>,
  roomId?: Maybe<Scalars['Int']>,
  members?: Maybe<Array<Maybe<MemberInput>>>,
  memberId?: Maybe<Scalars['Int']>,
  /** 提现时间 */
  createDate?: Maybe<Scalars['String']>,
};

export type GameLogInputOrder = {
  relations?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  /** 
 * 输赢
   * 排序可选值为ASC或者DESC
 **/
  status?: Maybe<Scalars['String']>,
  /** 
 * 注码
   * 排序可选值为ASC或者DESC
 **/
  count?: Maybe<Scalars['String']>,
  /** 
 * 开始时间
   * 排序可选值为ASC或者DESC
 **/
  startTime?: Maybe<Scalars['String']>,
  /** 
 * 结束时间
   * 排序可选值为ASC或者DESC
 **/
  endTime?: Maybe<Scalars['String']>,
  /** 
 * 房间
   * 排序可选值为ASC或者DESC
 **/
  room?: Maybe<Scalars['String']>,
  roomId?: Maybe<Scalars['String']>,
  members?: Maybe<Scalars['String']>,
  memberId?: Maybe<Scalars['String']>,
  /** 
 * 提现时间
   * 排序可选值为ASC或者DESC
 **/
  createDate?: Maybe<Scalars['String']>,
};

export type GameLogInputWhere = {
  id_Not?: Maybe<Scalars['Int']>,
  id_In?: Maybe<Array<Scalars['Int']>>,
  id_NotIn?: Maybe<Array<Scalars['Int']>>,
  id_Lt?: Maybe<Scalars['Int']>,
  id_Lte?: Maybe<Scalars['Int']>,
  id_Gt?: Maybe<Scalars['Int']>,
  id_Gte?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  /** 输赢 不等于 */
  status_Not?: Maybe<Scalars['Int']>,
  /** 输赢 在制定内，如[1,2] */
  status_In?: Maybe<Array<Scalars['Int']>>,
  /** 输赢 不在制定内,如[1,2] */
  status_NotIn?: Maybe<Array<Scalars['Int']>>,
  /** 输赢 小于 */
  status_Lt?: Maybe<Scalars['Int']>,
  /** 输赢 小于等于 */
  status_Lte?: Maybe<Scalars['Int']>,
  /** 输赢 大于 */
  status_Gt?: Maybe<Scalars['Int']>,
  /** 输赢 大于等于 */
  status_Gte?: Maybe<Scalars['Int']>,
  /** 输赢 */
  status?: Maybe<Scalars['Int']>,
  /** 注码 不等于 */
  count_Not?: Maybe<Scalars['Int']>,
  /** 注码 在制定内，如[1,2] */
  count_In?: Maybe<Array<Scalars['Int']>>,
  /** 注码 不在制定内,如[1,2] */
  count_NotIn?: Maybe<Array<Scalars['Int']>>,
  /** 注码 小于 */
  count_Lt?: Maybe<Scalars['Int']>,
  /** 注码 小于等于 */
  count_Lte?: Maybe<Scalars['Int']>,
  /** 注码 大于 */
  count_Gt?: Maybe<Scalars['Int']>,
  /** 注码 大于等于 */
  count_Gte?: Maybe<Scalars['Int']>,
  /** 注码 */
  count?: Maybe<Scalars['Int']>,
  /** 开始时间 不等于 */
  startTime_Not?: Maybe<Scalars['String']>,
  /** 开始时间 在制定内，如[1,2] */
  startTime_In?: Maybe<Array<Scalars['String']>>,
  /** 开始时间 不在制定内,如[1,2] */
  startTime_NotIn?: Maybe<Array<Scalars['String']>>,
  /** 开始时间 小于 */
  startTime_Lt?: Maybe<Scalars['String']>,
  /** 开始时间 小于等于 */
  startTime_Lte?: Maybe<Scalars['String']>,
  /** 开始时间 大于 */
  startTime_Gt?: Maybe<Scalars['String']>,
  /** 开始时间 大于等于 */
  startTime_Gte?: Maybe<Scalars['String']>,
  /** 开始时间 包含 */
  startTime_Contains?: Maybe<Scalars['String']>,
  /** 开始时间 不包含 */
  startTime_NotContains?: Maybe<Scalars['String']>,
  /** 开始时间 开头等于 */
  startTime_StartsWith?: Maybe<Scalars['String']>,
  /** 开始时间 开头不等于 */
  startTime_NotStartsWith?: Maybe<Scalars['String']>,
  /** 开始时间 结尾等于 */
  startTime_EndsWith?: Maybe<Scalars['String']>,
  /** 开始时间 结尾不等于 */
  startTime_NotEndsWith?: Maybe<Scalars['String']>,
  /** 开始时间 */
  startTime?: Maybe<Scalars['String']>,
  /** 结束时间 不等于 */
  endTime_Not?: Maybe<Scalars['String']>,
  /** 结束时间 在制定内，如[1,2] */
  endTime_In?: Maybe<Array<Scalars['String']>>,
  /** 结束时间 不在制定内,如[1,2] */
  endTime_NotIn?: Maybe<Array<Scalars['String']>>,
  /** 结束时间 小于 */
  endTime_Lt?: Maybe<Scalars['String']>,
  /** 结束时间 小于等于 */
  endTime_Lte?: Maybe<Scalars['String']>,
  /** 结束时间 大于 */
  endTime_Gt?: Maybe<Scalars['String']>,
  /** 结束时间 大于等于 */
  endTime_Gte?: Maybe<Scalars['String']>,
  /** 结束时间 包含 */
  endTime_Contains?: Maybe<Scalars['String']>,
  /** 结束时间 不包含 */
  endTime_NotContains?: Maybe<Scalars['String']>,
  /** 结束时间 开头等于 */
  endTime_StartsWith?: Maybe<Scalars['String']>,
  /** 结束时间 开头不等于 */
  endTime_NotStartsWith?: Maybe<Scalars['String']>,
  /** 结束时间 结尾等于 */
  endTime_EndsWith?: Maybe<Scalars['String']>,
  /** 结束时间 结尾不等于 */
  endTime_NotEndsWith?: Maybe<Scalars['String']>,
  /** 结束时间 */
  endTime?: Maybe<Scalars['String']>,
  roomId_Not?: Maybe<Scalars['Int']>,
  roomId_In?: Maybe<Array<Scalars['Int']>>,
  roomId_NotIn?: Maybe<Array<Scalars['Int']>>,
  roomId_Lt?: Maybe<Scalars['Int']>,
  roomId_Lte?: Maybe<Scalars['Int']>,
  roomId_Gt?: Maybe<Scalars['Int']>,
  roomId_Gte?: Maybe<Scalars['Int']>,
  roomId?: Maybe<Scalars['Int']>,
  memberId_Not?: Maybe<Scalars['Int']>,
  memberId_In?: Maybe<Array<Scalars['Int']>>,
  memberId_NotIn?: Maybe<Array<Scalars['Int']>>,
  memberId_Lt?: Maybe<Scalars['Int']>,
  memberId_Lte?: Maybe<Scalars['Int']>,
  memberId_Gt?: Maybe<Scalars['Int']>,
  memberId_Gte?: Maybe<Scalars['Int']>,
  memberId?: Maybe<Scalars['Int']>,
  /** 提现时间 不等于 */
  createDate_Not?: Maybe<Scalars['String']>,
  /** 提现时间 在制定内，如[1,2] */
  createDate_In?: Maybe<Array<Scalars['String']>>,
  /** 提现时间 不在制定内,如[1,2] */
  createDate_NotIn?: Maybe<Array<Scalars['String']>>,
  /** 提现时间 小于 */
  createDate_Lt?: Maybe<Scalars['String']>,
  /** 提现时间 小于等于 */
  createDate_Lte?: Maybe<Scalars['String']>,
  /** 提现时间 大于 */
  createDate_Gt?: Maybe<Scalars['String']>,
  /** 提现时间 大于等于 */
  createDate_Gte?: Maybe<Scalars['String']>,
  /** 提现时间 包含 */
  createDate_Contains?: Maybe<Scalars['String']>,
  /** 提现时间 不包含 */
  createDate_NotContains?: Maybe<Scalars['String']>,
  /** 提现时间 开头等于 */
  createDate_StartsWith?: Maybe<Scalars['String']>,
  /** 提现时间 开头不等于 */
  createDate_NotStartsWith?: Maybe<Scalars['String']>,
  /** 提现时间 结尾等于 */
  createDate_EndsWith?: Maybe<Scalars['String']>,
  /** 提现时间 结尾不等于 */
  createDate_NotEndsWith?: Maybe<Scalars['String']>,
  /** 提现时间 */
  createDate?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<GameLogInputWhere>>,
  OR?: Maybe<Array<GameLogInputWhere>>,
  NOT?: Maybe<Array<GameLogInputWhere>>,
};

export type GameLogPartial = {
  relations?: Maybe<Array<Maybe<Scalars['String']>>>,
  id?: Maybe<Scalars['Int']>,
  /** 输赢 */
  status?: Maybe<Scalars['Int']>,
  /** 注码 */
  count?: Maybe<Scalars['Int']>,
  /** 开始时间 */
  startTime?: Maybe<Scalars['String']>,
  /** 结束时间 */
  endTime?: Maybe<Scalars['String']>,
  /** 房间 */
  room?: Maybe<RoomInput>,
  roomId?: Maybe<Scalars['Int']>,
  members?: Maybe<Array<Maybe<MemberInput>>>,
  memberId?: Maybe<Scalars['Int']>,
  /** 提现时间 */
  createDate?: Maybe<Scalars['String']>,
};




export type Member = {
  __typename?: 'Member',
  relations?: Maybe<Array<Maybe<Scalars['String']>>>,
  id?: Maybe<Scalars['Int']>,
  /** 昵称 */
  nickname?: Maybe<Scalars['String']>,
  /** 密码 */
  password?: Maybe<Scalars['String']>,
  /** 头像 */
  avatar?: Maybe<Scalars['String']>,
  /** 电话 */
  mobile?: Maybe<Scalars['String']>,
  /** 微信id */
  openid?: Maybe<Scalars['String']>,
  /** 状态 0禁用 1正常 */
  status?: Maybe<Scalars['Int']>,
  /** 余额 */
  fee?: Maybe<Scalars['Int']>,
  /** 金币 */
  fee2?: Maybe<Scalars['Int']>,
  /** 钻石 */
  fee3?: Maybe<Scalars['Int']>,
  /** 用户加入的房间 */
  rooms?: Maybe<Array<Maybe<Room>>>,
  getRooms?: Maybe<Array<Maybe<Room>>>,
  /** 用户创建的房间 */
  createRooms?: Maybe<Array<Maybe<Room>>>,
  getCreateRooms?: Maybe<Array<Maybe<Room>>>,
  /** 提现记录 */
  tixianLogs?: Maybe<Array<Maybe<TixianLog>>>,
  getTixianLogs?: Maybe<Array<Maybe<TixianLog>>>,
  /** 游戏记录 */
  gameLogs?: Maybe<Array<Maybe<GameLog>>>,
  getGameLogs?: Maybe<Array<Maybe<Member>>>,
  /** 用户领取的劵 */
  ticketLogs?: Maybe<Array<Maybe<TicketLog>>>,
  getTicketLogs?: Maybe<Array<Maybe<TicketLog>>>,
  /** 提现时间 */
  createDate?: Maybe<Scalars['String']>,
};


export type MemberGetRoomsArgs = {
  where?: Maybe<RoomInputWhere>,
  order?: Maybe<RoomInputOrder>,
  limit?: Maybe<PageLimitInput>
};


export type MemberGetCreateRoomsArgs = {
  where?: Maybe<RoomInputWhere>,
  order?: Maybe<RoomInputOrder>,
  limit?: Maybe<PageLimitInput>
};


export type MemberGetTixianLogsArgs = {
  where?: Maybe<TixianLogInputWhere>,
  order?: Maybe<TixianLogInputOrder>,
  limit?: Maybe<PageLimitInput>
};


export type MemberGetGameLogsArgs = {
  where?: Maybe<GameLogInputWhere>,
  order?: Maybe<GameLogInputOrder>,
  limit?: Maybe<PageLimitInput>
};


export type MemberGetTicketLogsArgs = {
  where?: Maybe<TicketLogInputWhere>,
  order?: Maybe<TicketLogInputOrder>,
  limit?: Maybe<PageLimitInput>
};

export type MemberInput = {
  relations?: Maybe<Array<Maybe<Scalars['String']>>>,
  id?: Maybe<Scalars['Int']>,
  /** 昵称 */
  nickname?: Maybe<Scalars['String']>,
  /** 密码 */
  password?: Maybe<Scalars['String']>,
  /** 头像 */
  avatar?: Maybe<Scalars['String']>,
  /** 电话 */
  mobile?: Maybe<Scalars['String']>,
  /** 微信id */
  openid?: Maybe<Scalars['String']>,
  /** 状态 0禁用 1正常 */
  status?: Maybe<Scalars['Int']>,
  /** 余额 */
  fee?: Maybe<Scalars['Int']>,
  /** 金币 */
  fee2?: Maybe<Scalars['Int']>,
  /** 钻石 */
  fee3?: Maybe<Scalars['Int']>,
  /** 用户加入的房间 */
  rooms?: Maybe<Array<Maybe<RoomInput>>>,
  /** 用户创建的房间 */
  createRooms?: Maybe<Array<Maybe<RoomInput>>>,
  /** 提现记录 */
  tixianLogs?: Maybe<Array<Maybe<TixianLogInput>>>,
  /** 游戏记录 */
  gameLogs?: Maybe<Array<Maybe<GameLogInput>>>,
  /** 用户领取的劵 */
  ticketLogs?: Maybe<Array<Maybe<TicketLogInput>>>,
  /** 提现时间 */
  createDate?: Maybe<Scalars['String']>,
};

export type MemberInputOrder = {
  relations?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  /** 
 * 昵称
   * 排序可选值为ASC或者DESC
 **/
  nickname?: Maybe<Scalars['String']>,
  /** 
 * 密码
   * 排序可选值为ASC或者DESC
 **/
  password?: Maybe<Scalars['String']>,
  /** 
 * 头像
   * 排序可选值为ASC或者DESC
 **/
  avatar?: Maybe<Scalars['String']>,
  /** 
 * 电话
   * 排序可选值为ASC或者DESC
 **/
  mobile?: Maybe<Scalars['String']>,
  /** 
 * 微信id
   * 排序可选值为ASC或者DESC
 **/
  openid?: Maybe<Scalars['String']>,
  /** 
 * 状态 0禁用 1正常
   * 排序可选值为ASC或者DESC
 **/
  status?: Maybe<Scalars['String']>,
  /** 
 * 余额
   * 排序可选值为ASC或者DESC
 **/
  fee?: Maybe<Scalars['String']>,
  /** 
 * 金币
   * 排序可选值为ASC或者DESC
 **/
  fee2?: Maybe<Scalars['String']>,
  /** 
 * 钻石
   * 排序可选值为ASC或者DESC
 **/
  fee3?: Maybe<Scalars['String']>,
  /** 
 * 用户加入的房间
   * 排序可选值为ASC或者DESC
 **/
  rooms?: Maybe<Scalars['String']>,
  /** 
 * 用户创建的房间
   * 排序可选值为ASC或者DESC
 **/
  createRooms?: Maybe<Scalars['String']>,
  /** 
 * 提现记录
   * 排序可选值为ASC或者DESC
 **/
  tixianLogs?: Maybe<Scalars['String']>,
  /** 
 * 游戏记录
   * 排序可选值为ASC或者DESC
 **/
  gameLogs?: Maybe<Scalars['String']>,
  /** 
 * 用户领取的劵
   * 排序可选值为ASC或者DESC
 **/
  ticketLogs?: Maybe<Scalars['String']>,
  /** 
 * 提现时间
   * 排序可选值为ASC或者DESC
 **/
  createDate?: Maybe<Scalars['String']>,
};

export type MemberInputWhere = {
  id_Not?: Maybe<Scalars['Int']>,
  id_In?: Maybe<Array<Scalars['Int']>>,
  id_NotIn?: Maybe<Array<Scalars['Int']>>,
  id_Lt?: Maybe<Scalars['Int']>,
  id_Lte?: Maybe<Scalars['Int']>,
  id_Gt?: Maybe<Scalars['Int']>,
  id_Gte?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  /** 昵称 不等于 */
  nickname_Not?: Maybe<Scalars['String']>,
  /** 昵称 在制定内，如[1,2] */
  nickname_In?: Maybe<Array<Scalars['String']>>,
  /** 昵称 不在制定内,如[1,2] */
  nickname_NotIn?: Maybe<Array<Scalars['String']>>,
  /** 昵称 小于 */
  nickname_Lt?: Maybe<Scalars['String']>,
  /** 昵称 小于等于 */
  nickname_Lte?: Maybe<Scalars['String']>,
  /** 昵称 大于 */
  nickname_Gt?: Maybe<Scalars['String']>,
  /** 昵称 大于等于 */
  nickname_Gte?: Maybe<Scalars['String']>,
  /** 昵称 包含 */
  nickname_Contains?: Maybe<Scalars['String']>,
  /** 昵称 不包含 */
  nickname_NotContains?: Maybe<Scalars['String']>,
  /** 昵称 开头等于 */
  nickname_StartsWith?: Maybe<Scalars['String']>,
  /** 昵称 开头不等于 */
  nickname_NotStartsWith?: Maybe<Scalars['String']>,
  /** 昵称 结尾等于 */
  nickname_EndsWith?: Maybe<Scalars['String']>,
  /** 昵称 结尾不等于 */
  nickname_NotEndsWith?: Maybe<Scalars['String']>,
  /** 昵称 */
  nickname?: Maybe<Scalars['String']>,
  /** 密码 不等于 */
  password_Not?: Maybe<Scalars['String']>,
  /** 密码 在制定内，如[1,2] */
  password_In?: Maybe<Array<Scalars['String']>>,
  /** 密码 不在制定内,如[1,2] */
  password_NotIn?: Maybe<Array<Scalars['String']>>,
  /** 密码 小于 */
  password_Lt?: Maybe<Scalars['String']>,
  /** 密码 小于等于 */
  password_Lte?: Maybe<Scalars['String']>,
  /** 密码 大于 */
  password_Gt?: Maybe<Scalars['String']>,
  /** 密码 大于等于 */
  password_Gte?: Maybe<Scalars['String']>,
  /** 密码 包含 */
  password_Contains?: Maybe<Scalars['String']>,
  /** 密码 不包含 */
  password_NotContains?: Maybe<Scalars['String']>,
  /** 密码 开头等于 */
  password_StartsWith?: Maybe<Scalars['String']>,
  /** 密码 开头不等于 */
  password_NotStartsWith?: Maybe<Scalars['String']>,
  /** 密码 结尾等于 */
  password_EndsWith?: Maybe<Scalars['String']>,
  /** 密码 结尾不等于 */
  password_NotEndsWith?: Maybe<Scalars['String']>,
  /** 密码 */
  password?: Maybe<Scalars['String']>,
  /** 头像 不等于 */
  avatar_Not?: Maybe<Scalars['String']>,
  /** 头像 在制定内，如[1,2] */
  avatar_In?: Maybe<Array<Scalars['String']>>,
  /** 头像 不在制定内,如[1,2] */
  avatar_NotIn?: Maybe<Array<Scalars['String']>>,
  /** 头像 小于 */
  avatar_Lt?: Maybe<Scalars['String']>,
  /** 头像 小于等于 */
  avatar_Lte?: Maybe<Scalars['String']>,
  /** 头像 大于 */
  avatar_Gt?: Maybe<Scalars['String']>,
  /** 头像 大于等于 */
  avatar_Gte?: Maybe<Scalars['String']>,
  /** 头像 包含 */
  avatar_Contains?: Maybe<Scalars['String']>,
  /** 头像 不包含 */
  avatar_NotContains?: Maybe<Scalars['String']>,
  /** 头像 开头等于 */
  avatar_StartsWith?: Maybe<Scalars['String']>,
  /** 头像 开头不等于 */
  avatar_NotStartsWith?: Maybe<Scalars['String']>,
  /** 头像 结尾等于 */
  avatar_EndsWith?: Maybe<Scalars['String']>,
  /** 头像 结尾不等于 */
  avatar_NotEndsWith?: Maybe<Scalars['String']>,
  /** 头像 */
  avatar?: Maybe<Scalars['String']>,
  /** 电话 不等于 */
  mobile_Not?: Maybe<Scalars['String']>,
  /** 电话 在制定内，如[1,2] */
  mobile_In?: Maybe<Array<Scalars['String']>>,
  /** 电话 不在制定内,如[1,2] */
  mobile_NotIn?: Maybe<Array<Scalars['String']>>,
  /** 电话 小于 */
  mobile_Lt?: Maybe<Scalars['String']>,
  /** 电话 小于等于 */
  mobile_Lte?: Maybe<Scalars['String']>,
  /** 电话 大于 */
  mobile_Gt?: Maybe<Scalars['String']>,
  /** 电话 大于等于 */
  mobile_Gte?: Maybe<Scalars['String']>,
  /** 电话 包含 */
  mobile_Contains?: Maybe<Scalars['String']>,
  /** 电话 不包含 */
  mobile_NotContains?: Maybe<Scalars['String']>,
  /** 电话 开头等于 */
  mobile_StartsWith?: Maybe<Scalars['String']>,
  /** 电话 开头不等于 */
  mobile_NotStartsWith?: Maybe<Scalars['String']>,
  /** 电话 结尾等于 */
  mobile_EndsWith?: Maybe<Scalars['String']>,
  /** 电话 结尾不等于 */
  mobile_NotEndsWith?: Maybe<Scalars['String']>,
  /** 电话 */
  mobile?: Maybe<Scalars['String']>,
  /** 微信id 不等于 */
  openid_Not?: Maybe<Scalars['String']>,
  /** 微信id 在制定内，如[1,2] */
  openid_In?: Maybe<Array<Scalars['String']>>,
  /** 微信id 不在制定内,如[1,2] */
  openid_NotIn?: Maybe<Array<Scalars['String']>>,
  /** 微信id 小于 */
  openid_Lt?: Maybe<Scalars['String']>,
  /** 微信id 小于等于 */
  openid_Lte?: Maybe<Scalars['String']>,
  /** 微信id 大于 */
  openid_Gt?: Maybe<Scalars['String']>,
  /** 微信id 大于等于 */
  openid_Gte?: Maybe<Scalars['String']>,
  /** 微信id 包含 */
  openid_Contains?: Maybe<Scalars['String']>,
  /** 微信id 不包含 */
  openid_NotContains?: Maybe<Scalars['String']>,
  /** 微信id 开头等于 */
  openid_StartsWith?: Maybe<Scalars['String']>,
  /** 微信id 开头不等于 */
  openid_NotStartsWith?: Maybe<Scalars['String']>,
  /** 微信id 结尾等于 */
  openid_EndsWith?: Maybe<Scalars['String']>,
  /** 微信id 结尾不等于 */
  openid_NotEndsWith?: Maybe<Scalars['String']>,
  /** 微信id */
  openid?: Maybe<Scalars['String']>,
  /** 状态 0禁用 1正常 不等于 */
  status_Not?: Maybe<Scalars['Int']>,
  /** 状态 0禁用 1正常 在制定内，如[1,2] */
  status_In?: Maybe<Array<Scalars['Int']>>,
  /** 状态 0禁用 1正常 不在制定内,如[1,2] */
  status_NotIn?: Maybe<Array<Scalars['Int']>>,
  /** 状态 0禁用 1正常 小于 */
  status_Lt?: Maybe<Scalars['Int']>,
  /** 状态 0禁用 1正常 小于等于 */
  status_Lte?: Maybe<Scalars['Int']>,
  /** 状态 0禁用 1正常 大于 */
  status_Gt?: Maybe<Scalars['Int']>,
  /** 状态 0禁用 1正常 大于等于 */
  status_Gte?: Maybe<Scalars['Int']>,
  /** 状态 0禁用 1正常 */
  status?: Maybe<Scalars['Int']>,
  /** 余额 不等于 */
  fee_Not?: Maybe<Scalars['Int']>,
  /** 余额 在制定内，如[1,2] */
  fee_In?: Maybe<Array<Scalars['Int']>>,
  /** 余额 不在制定内,如[1,2] */
  fee_NotIn?: Maybe<Array<Scalars['Int']>>,
  /** 余额 小于 */
  fee_Lt?: Maybe<Scalars['Int']>,
  /** 余额 小于等于 */
  fee_Lte?: Maybe<Scalars['Int']>,
  /** 余额 大于 */
  fee_Gt?: Maybe<Scalars['Int']>,
  /** 余额 大于等于 */
  fee_Gte?: Maybe<Scalars['Int']>,
  /** 余额 */
  fee?: Maybe<Scalars['Int']>,
  /** 金币 不等于 */
  fee2_Not?: Maybe<Scalars['Int']>,
  /** 金币 在制定内，如[1,2] */
  fee2_In?: Maybe<Array<Scalars['Int']>>,
  /** 金币 不在制定内,如[1,2] */
  fee2_NotIn?: Maybe<Array<Scalars['Int']>>,
  /** 金币 小于 */
  fee2_Lt?: Maybe<Scalars['Int']>,
  /** 金币 小于等于 */
  fee2_Lte?: Maybe<Scalars['Int']>,
  /** 金币 大于 */
  fee2_Gt?: Maybe<Scalars['Int']>,
  /** 金币 大于等于 */
  fee2_Gte?: Maybe<Scalars['Int']>,
  /** 金币 */
  fee2?: Maybe<Scalars['Int']>,
  /** 钻石 不等于 */
  fee3_Not?: Maybe<Scalars['Int']>,
  /** 钻石 在制定内，如[1,2] */
  fee3_In?: Maybe<Array<Scalars['Int']>>,
  /** 钻石 不在制定内,如[1,2] */
  fee3_NotIn?: Maybe<Array<Scalars['Int']>>,
  /** 钻石 小于 */
  fee3_Lt?: Maybe<Scalars['Int']>,
  /** 钻石 小于等于 */
  fee3_Lte?: Maybe<Scalars['Int']>,
  /** 钻石 大于 */
  fee3_Gt?: Maybe<Scalars['Int']>,
  /** 钻石 大于等于 */
  fee3_Gte?: Maybe<Scalars['Int']>,
  /** 钻石 */
  fee3?: Maybe<Scalars['Int']>,
  /** 提现时间 不等于 */
  createDate_Not?: Maybe<Scalars['String']>,
  /** 提现时间 在制定内，如[1,2] */
  createDate_In?: Maybe<Array<Scalars['String']>>,
  /** 提现时间 不在制定内,如[1,2] */
  createDate_NotIn?: Maybe<Array<Scalars['String']>>,
  /** 提现时间 小于 */
  createDate_Lt?: Maybe<Scalars['String']>,
  /** 提现时间 小于等于 */
  createDate_Lte?: Maybe<Scalars['String']>,
  /** 提现时间 大于 */
  createDate_Gt?: Maybe<Scalars['String']>,
  /** 提现时间 大于等于 */
  createDate_Gte?: Maybe<Scalars['String']>,
  /** 提现时间 包含 */
  createDate_Contains?: Maybe<Scalars['String']>,
  /** 提现时间 不包含 */
  createDate_NotContains?: Maybe<Scalars['String']>,
  /** 提现时间 开头等于 */
  createDate_StartsWith?: Maybe<Scalars['String']>,
  /** 提现时间 开头不等于 */
  createDate_NotStartsWith?: Maybe<Scalars['String']>,
  /** 提现时间 结尾等于 */
  createDate_EndsWith?: Maybe<Scalars['String']>,
  /** 提现时间 结尾不等于 */
  createDate_NotEndsWith?: Maybe<Scalars['String']>,
  /** 提现时间 */
  createDate?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<MemberInputWhere>>,
  OR?: Maybe<Array<MemberInputWhere>>,
  NOT?: Maybe<Array<MemberInputWhere>>,
};

export type MemberPartial = {
  relations?: Maybe<Array<Maybe<Scalars['String']>>>,
  id?: Maybe<Scalars['Int']>,
  /** 昵称 */
  nickname?: Maybe<Scalars['String']>,
  /** 密码 */
  password?: Maybe<Scalars['String']>,
  /** 头像 */
  avatar?: Maybe<Scalars['String']>,
  /** 电话 */
  mobile?: Maybe<Scalars['String']>,
  /** 微信id */
  openid?: Maybe<Scalars['String']>,
  /** 状态 0禁用 1正常 */
  status?: Maybe<Scalars['Int']>,
  /** 余额 */
  fee?: Maybe<Scalars['Int']>,
  /** 金币 */
  fee2?: Maybe<Scalars['Int']>,
  /** 钻石 */
  fee3?: Maybe<Scalars['Int']>,
  /** 用户加入的房间 */
  rooms?: Maybe<Array<Maybe<RoomInput>>>,
  /** 用户创建的房间 */
  createRooms?: Maybe<Array<Maybe<RoomInput>>>,
  /** 提现记录 */
  tixianLogs?: Maybe<Array<Maybe<TixianLogInput>>>,
  /** 游戏记录 */
  gameLogs?: Maybe<Array<Maybe<GameLogInput>>>,
  /** 用户领取的劵 */
  ticketLogs?: Maybe<Array<Maybe<TicketLogInput>>>,
  /** 提现时间 */
  createDate?: Maybe<Scalars['String']>,
};

export type Mutation = {
  __typename?: 'Mutation',
  /** 没有就插入，有就更新 */
  memberSave?: Maybe<Member>,
  /** 没有就插入，有就更新 */
  roomSave?: Maybe<Room>,
  /** 没有就插入，有就更新 */
  roomTypeSave?: Maybe<RoomType>,
  /** 没有就插入，有就更新 */
  settingSave?: Maybe<Setting>,
  /** 没有就插入，有就更新 */
  tixianLogSave?: Maybe<TixianLog>,
  /** 没有就插入，有就更新 */
  gameLogSave?: Maybe<GameLog>,
  /** 没有就插入，有就更新 */
  ticketSave?: Maybe<Ticket>,
  /** 没有就插入，有就更新 */
  ticketLogSave?: Maybe<TicketLog>,
  /** 插入数据 */
  memberInsert?: Maybe<Member>,
  /** 插入数据 */
  roomInsert?: Maybe<Room>,
  /** 插入数据 */
  roomTypeInsert?: Maybe<RoomType>,
  /** 插入数据 */
  settingInsert?: Maybe<Setting>,
  /** 插入数据 */
  tixianLogInsert?: Maybe<TixianLog>,
  /** 插入数据 */
  gameLogInsert?: Maybe<GameLog>,
  /** 插入数据 */
  ticketInsert?: Maybe<Ticket>,
  /** 插入数据 */
  ticketLogInsert?: Maybe<TicketLog>,
  /** 更新数据 */
  memberUpdate?: Maybe<Member>,
  /** 更新数据 */
  roomUpdate?: Maybe<Room>,
  /** 更新数据 */
  roomTypeUpdate?: Maybe<RoomType>,
  /** 更新数据 */
  settingUpdate?: Maybe<Setting>,
  /** 更新数据 */
  tixianLogUpdate?: Maybe<TixianLog>,
  /** 更新数据 */
  gameLogUpdate?: Maybe<GameLog>,
  /** 更新数据 */
  ticketUpdate?: Maybe<Ticket>,
  /** 更新数据 */
  ticketLogUpdate?: Maybe<TicketLog>,
  /** 删除 */
  memberDelete?: Maybe<Scalars['Boolean']>,
  /** 删除 */
  roomDelete?: Maybe<Scalars['Boolean']>,
  /** 删除 */
  roomTypeDelete?: Maybe<Scalars['Boolean']>,
  /** 删除 */
  settingDelete?: Maybe<Scalars['Boolean']>,
  /** 删除 */
  tixianLogDelete?: Maybe<Scalars['Boolean']>,
  /** 删除 */
  gameLogDelete?: Maybe<Scalars['Boolean']>,
  /** 删除 */
  ticketDelete?: Maybe<Scalars['Boolean']>,
  /** 删除 */
  ticketLogDelete?: Maybe<Scalars['Boolean']>,
};


export type MutationMemberSaveArgs = {
  entity: MemberInput
};


export type MutationRoomSaveArgs = {
  entity: RoomInput
};


export type MutationRoomTypeSaveArgs = {
  entity: RoomTypeInput
};


export type MutationSettingSaveArgs = {
  entity: SettingInput
};


export type MutationTixianLogSaveArgs = {
  entity: TixianLogInput
};


export type MutationGameLogSaveArgs = {
  entity: GameLogInput
};


export type MutationTicketSaveArgs = {
  entity: TicketInput
};


export type MutationTicketLogSaveArgs = {
  entity: TicketLogInput
};


export type MutationMemberInsertArgs = {
  entity: MemberInput
};


export type MutationRoomInsertArgs = {
  entity: RoomInput
};


export type MutationRoomTypeInsertArgs = {
  entity: RoomTypeInput
};


export type MutationSettingInsertArgs = {
  entity: SettingInput
};


export type MutationTixianLogInsertArgs = {
  entity: TixianLogInput
};


export type MutationGameLogInsertArgs = {
  entity: GameLogInput
};


export type MutationTicketInsertArgs = {
  entity: TicketInput
};


export type MutationTicketLogInsertArgs = {
  entity: TicketLogInput
};


export type MutationMemberUpdateArgs = {
  where: MemberPartial,
  entity: MemberInput
};


export type MutationRoomUpdateArgs = {
  where: RoomPartial,
  entity: RoomInput
};


export type MutationRoomTypeUpdateArgs = {
  where: RoomTypePartial,
  entity: RoomTypeInput
};


export type MutationSettingUpdateArgs = {
  where: SettingPartial,
  entity: SettingInput
};


export type MutationTixianLogUpdateArgs = {
  where: TixianLogPartial,
  entity: TixianLogInput
};


export type MutationGameLogUpdateArgs = {
  where: GameLogPartial,
  entity: GameLogInput
};


export type MutationTicketUpdateArgs = {
  where: TicketPartial,
  entity: TicketInput
};


export type MutationTicketLogUpdateArgs = {
  where: TicketLogPartial,
  entity: TicketLogInput
};


export type MutationMemberDeleteArgs = {
  id: Scalars['Int']
};


export type MutationRoomDeleteArgs = {
  id: Scalars['Int']
};


export type MutationRoomTypeDeleteArgs = {
  id: Scalars['Int']
};


export type MutationSettingDeleteArgs = {
  id: Scalars['Int']
};


export type MutationTixianLogDeleteArgs = {
  id: Scalars['Int']
};


export type MutationGameLogDeleteArgs = {
  id: Scalars['Int']
};


export type MutationTicketDeleteArgs = {
  id: Scalars['Int']
};


export type MutationTicketLogDeleteArgs = {
  id: Scalars['Int']
};

export type PageLimitInput = {
  /** 页码 */
  page?: Maybe<Scalars['Int']>,
  /** 每页数量 */
  psize?: Maybe<Scalars['Int']>,
};

export type Query = {
  __typename?: 'Query',
  /** 通过指定条件获取一条数据 */
  memberGet?: Maybe<Member>,
  /** 通过指定条件获取一条数据 */
  roomGet?: Maybe<Room>,
  /** 通过指定条件获取一条数据 */
  roomTypeGet?: Maybe<RoomType>,
  /** 通过指定条件获取一条数据 */
  settingGet?: Maybe<Setting>,
  /** 通过指定条件获取一条数据 */
  tixianLogGet?: Maybe<TixianLog>,
  /** 通过指定条件获取一条数据 */
  gameLogGet?: Maybe<GameLog>,
  /** 通过指定条件获取一条数据 */
  ticketGet?: Maybe<Ticket>,
  /** 通过指定条件获取一条数据 */
  ticketLogGet?: Maybe<TicketLog>,
  /** 通过制定条件获取一组数据 */
  memberFind?: Maybe<Array<Maybe<Member>>>,
  /** 通过制定条件获取一组数据 */
  roomFind?: Maybe<Array<Maybe<Room>>>,
  /** 通过制定条件获取一组数据 */
  roomTypeFind?: Maybe<Array<Maybe<RoomType>>>,
  /** 通过制定条件获取一组数据 */
  settingFind?: Maybe<Array<Maybe<Setting>>>,
  /** 通过制定条件获取一组数据 */
  tixianLogFind?: Maybe<Array<Maybe<TixianLog>>>,
  /** 通过制定条件获取一组数据 */
  gameLogFind?: Maybe<Array<Maybe<GameLog>>>,
  /** 通过制定条件获取一组数据 */
  ticketFind?: Maybe<Array<Maybe<Ticket>>>,
  /** 通过制定条件获取一组数据 */
  ticketLogFind?: Maybe<Array<Maybe<TicketLog>>>,
  /** 通过制定条件获取一组数据 */
  memberCount?: Maybe<Scalars['Int']>,
  /** 通过制定条件获取一组数据 */
  roomCount?: Maybe<Scalars['Int']>,
  /** 通过制定条件获取一组数据 */
  roomTypeCount?: Maybe<Scalars['Int']>,
  /** 通过制定条件获取一组数据 */
  settingCount?: Maybe<Scalars['Int']>,
  /** 通过制定条件获取一组数据 */
  tixianLogCount?: Maybe<Scalars['Int']>,
  /** 通过制定条件获取一组数据 */
  gameLogCount?: Maybe<Scalars['Int']>,
  /** 通过制定条件获取一组数据 */
  ticketCount?: Maybe<Scalars['Int']>,
  /** 通过制定条件获取一组数据 */
  ticketLogCount?: Maybe<Scalars['Int']>,
};


export type QueryMemberGetArgs = {
  entity: MemberInputWhere
};


export type QueryRoomGetArgs = {
  entity: RoomInputWhere
};


export type QueryRoomTypeGetArgs = {
  entity: RoomTypeInputWhere
};


export type QuerySettingGetArgs = {
  entity: SettingInputWhere
};


export type QueryTixianLogGetArgs = {
  entity: TixianLogInputWhere
};


export type QueryGameLogGetArgs = {
  entity: GameLogInputWhere
};


export type QueryTicketGetArgs = {
  entity: TicketInputWhere
};


export type QueryTicketLogGetArgs = {
  entity: TicketLogInputWhere
};


export type QueryMemberFindArgs = {
  entity: MemberInputWhere,
  order: MemberInputOrder,
  limit?: Maybe<PageLimitInput>
};


export type QueryRoomFindArgs = {
  entity: RoomInputWhere,
  order: RoomInputOrder,
  limit?: Maybe<PageLimitInput>
};


export type QueryRoomTypeFindArgs = {
  entity: RoomTypeInputWhere,
  order: RoomTypeInputOrder,
  limit?: Maybe<PageLimitInput>
};


export type QuerySettingFindArgs = {
  entity: SettingInputWhere,
  order: SettingInputOrder,
  limit?: Maybe<PageLimitInput>
};


export type QueryTixianLogFindArgs = {
  entity: TixianLogInputWhere,
  order: TixianLogInputOrder,
  limit?: Maybe<PageLimitInput>
};


export type QueryGameLogFindArgs = {
  entity: GameLogInputWhere,
  order: GameLogInputOrder,
  limit?: Maybe<PageLimitInput>
};


export type QueryTicketFindArgs = {
  entity: TicketInputWhere,
  order: TicketInputOrder,
  limit?: Maybe<PageLimitInput>
};


export type QueryTicketLogFindArgs = {
  entity: TicketLogInputWhere,
  order: TicketLogInputOrder,
  limit?: Maybe<PageLimitInput>
};


export type QueryMemberCountArgs = {
  where: MemberInputWhere
};


export type QueryRoomCountArgs = {
  where: RoomInputWhere
};


export type QueryRoomTypeCountArgs = {
  where: RoomTypeInputWhere
};


export type QuerySettingCountArgs = {
  where: SettingInputWhere
};


export type QueryTixianLogCountArgs = {
  where: TixianLogInputWhere
};


export type QueryGameLogCountArgs = {
  where: GameLogInputWhere
};


export type QueryTicketCountArgs = {
  where: TicketInputWhere
};


export type QueryTicketLogCountArgs = {
  where: TicketLogInputWhere
};

export type Room = {
  __typename?: 'Room',
  relations?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** id */
  id?: Maybe<Scalars['Int']>,
  /** 房间密码 */
  password?: Maybe<Scalars['String']>,
  /** 房间类型 */
  roomType?: Maybe<RoomType>,
  roomTypeId?: Maybe<Scalars['Int']>,
  /** 房间状态 1正常 */
  status?: Maybe<Scalars['Int']>,
  /** 自动开启 */
  autoStart?: Maybe<Scalars['Boolean']>,
  /** 房主 */
  owner?: Maybe<Member>,
  ownerId?: Maybe<Scalars['Int']>,
  getOwner?: Maybe<Member>,
  /** 加入房间的人 */
  members?: Maybe<Array<Maybe<Member>>>,
  getMembers?: Maybe<Array<Maybe<Member>>>,
  gameLogs?: Maybe<Array<Maybe<GameLog>>>,
  getGameLogs?: Maybe<Array<Maybe<GameLog>>>,
  /** 提现时间 */
  createDate?: Maybe<Scalars['String']>,
};


export type RoomGetMembersArgs = {
  where?: Maybe<MemberInputWhere>,
  order?: Maybe<MemberInputOrder>,
  limit?: Maybe<PageLimitInput>
};


export type RoomGetGameLogsArgs = {
  where?: Maybe<GameLogInputWhere>,
  order?: Maybe<GameLogInputOrder>,
  limit?: Maybe<PageLimitInput>
};

export type RoomInput = {
  relations?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** id */
  id?: Maybe<Scalars['Int']>,
  /** 房间密码 */
  password?: Maybe<Scalars['String']>,
  /** 房间类型 */
  roomType?: Maybe<RoomTypeInput>,
  roomTypeId?: Maybe<Scalars['Int']>,
  /** 房间状态 1正常 */
  status?: Maybe<Scalars['Int']>,
  /** 自动开启 */
  autoStart?: Maybe<Scalars['Boolean']>,
  /** 房主 */
  owner?: Maybe<MemberInput>,
  ownerId?: Maybe<Scalars['Int']>,
  /** 加入房间的人 */
  members?: Maybe<Array<Maybe<MemberInput>>>,
  gameLogs?: Maybe<Array<Maybe<GameLogInput>>>,
  /** 提现时间 */
  createDate?: Maybe<Scalars['String']>,
};

export type RoomInputOrder = {
  relations?: Maybe<Scalars['String']>,
  /** 
 * id
   * 排序可选值为ASC或者DESC
 **/
  id?: Maybe<Scalars['String']>,
  /** 
 * 房间密码
   * 排序可选值为ASC或者DESC
 **/
  password?: Maybe<Scalars['String']>,
  /** 
 * 房间类型
   * 排序可选值为ASC或者DESC
 **/
  roomType?: Maybe<Scalars['String']>,
  roomTypeId?: Maybe<Scalars['String']>,
  /** 
 * 房间状态 1正常
   * 排序可选值为ASC或者DESC
 **/
  status?: Maybe<Scalars['String']>,
  /** 
 * 自动开启
   * 排序可选值为ASC或者DESC
 **/
  autoStart?: Maybe<Scalars['String']>,
  /** 
 * 房主
   * 排序可选值为ASC或者DESC
 **/
  owner?: Maybe<Scalars['String']>,
  ownerId?: Maybe<Scalars['String']>,
  /** 
 * 加入房间的人
   * 排序可选值为ASC或者DESC
 **/
  members?: Maybe<Scalars['String']>,
  gameLogs?: Maybe<Scalars['String']>,
  /** 
 * 提现时间
   * 排序可选值为ASC或者DESC
 **/
  createDate?: Maybe<Scalars['String']>,
};

export type RoomInputWhere = {
  /** id 不等于 */
  id_Not?: Maybe<Scalars['Int']>,
  /** id 在制定内，如[1,2] */
  id_In?: Maybe<Array<Scalars['Int']>>,
  /** id 不在制定内,如[1,2] */
  id_NotIn?: Maybe<Array<Scalars['Int']>>,
  /** id 小于 */
  id_Lt?: Maybe<Scalars['Int']>,
  /** id 小于等于 */
  id_Lte?: Maybe<Scalars['Int']>,
  /** id 大于 */
  id_Gt?: Maybe<Scalars['Int']>,
  /** id 大于等于 */
  id_Gte?: Maybe<Scalars['Int']>,
  /** id */
  id?: Maybe<Scalars['Int']>,
  /** 房间密码 不等于 */
  password_Not?: Maybe<Scalars['String']>,
  /** 房间密码 在制定内，如[1,2] */
  password_In?: Maybe<Array<Scalars['String']>>,
  /** 房间密码 不在制定内,如[1,2] */
  password_NotIn?: Maybe<Array<Scalars['String']>>,
  /** 房间密码 小于 */
  password_Lt?: Maybe<Scalars['String']>,
  /** 房间密码 小于等于 */
  password_Lte?: Maybe<Scalars['String']>,
  /** 房间密码 大于 */
  password_Gt?: Maybe<Scalars['String']>,
  /** 房间密码 大于等于 */
  password_Gte?: Maybe<Scalars['String']>,
  /** 房间密码 包含 */
  password_Contains?: Maybe<Scalars['String']>,
  /** 房间密码 不包含 */
  password_NotContains?: Maybe<Scalars['String']>,
  /** 房间密码 开头等于 */
  password_StartsWith?: Maybe<Scalars['String']>,
  /** 房间密码 开头不等于 */
  password_NotStartsWith?: Maybe<Scalars['String']>,
  /** 房间密码 结尾等于 */
  password_EndsWith?: Maybe<Scalars['String']>,
  /** 房间密码 结尾不等于 */
  password_NotEndsWith?: Maybe<Scalars['String']>,
  /** 房间密码 */
  password?: Maybe<Scalars['String']>,
  roomTypeId_Not?: Maybe<Scalars['Int']>,
  roomTypeId_In?: Maybe<Array<Scalars['Int']>>,
  roomTypeId_NotIn?: Maybe<Array<Scalars['Int']>>,
  roomTypeId_Lt?: Maybe<Scalars['Int']>,
  roomTypeId_Lte?: Maybe<Scalars['Int']>,
  roomTypeId_Gt?: Maybe<Scalars['Int']>,
  roomTypeId_Gte?: Maybe<Scalars['Int']>,
  roomTypeId?: Maybe<Scalars['Int']>,
  /** 房间状态 1正常 不等于 */
  status_Not?: Maybe<Scalars['Int']>,
  /** 房间状态 1正常 在制定内，如[1,2] */
  status_In?: Maybe<Array<Scalars['Int']>>,
  /** 房间状态 1正常 不在制定内,如[1,2] */
  status_NotIn?: Maybe<Array<Scalars['Int']>>,
  /** 房间状态 1正常 小于 */
  status_Lt?: Maybe<Scalars['Int']>,
  /** 房间状态 1正常 小于等于 */
  status_Lte?: Maybe<Scalars['Int']>,
  /** 房间状态 1正常 大于 */
  status_Gt?: Maybe<Scalars['Int']>,
  /** 房间状态 1正常 大于等于 */
  status_Gte?: Maybe<Scalars['Int']>,
  /** 房间状态 1正常 */
  status?: Maybe<Scalars['Int']>,
  ownerId_Not?: Maybe<Scalars['Int']>,
  ownerId_In?: Maybe<Array<Scalars['Int']>>,
  ownerId_NotIn?: Maybe<Array<Scalars['Int']>>,
  ownerId_Lt?: Maybe<Scalars['Int']>,
  ownerId_Lte?: Maybe<Scalars['Int']>,
  ownerId_Gt?: Maybe<Scalars['Int']>,
  ownerId_Gte?: Maybe<Scalars['Int']>,
  ownerId?: Maybe<Scalars['Int']>,
  /** 提现时间 不等于 */
  createDate_Not?: Maybe<Scalars['String']>,
  /** 提现时间 在制定内，如[1,2] */
  createDate_In?: Maybe<Array<Scalars['String']>>,
  /** 提现时间 不在制定内,如[1,2] */
  createDate_NotIn?: Maybe<Array<Scalars['String']>>,
  /** 提现时间 小于 */
  createDate_Lt?: Maybe<Scalars['String']>,
  /** 提现时间 小于等于 */
  createDate_Lte?: Maybe<Scalars['String']>,
  /** 提现时间 大于 */
  createDate_Gt?: Maybe<Scalars['String']>,
  /** 提现时间 大于等于 */
  createDate_Gte?: Maybe<Scalars['String']>,
  /** 提现时间 包含 */
  createDate_Contains?: Maybe<Scalars['String']>,
  /** 提现时间 不包含 */
  createDate_NotContains?: Maybe<Scalars['String']>,
  /** 提现时间 开头等于 */
  createDate_StartsWith?: Maybe<Scalars['String']>,
  /** 提现时间 开头不等于 */
  createDate_NotStartsWith?: Maybe<Scalars['String']>,
  /** 提现时间 结尾等于 */
  createDate_EndsWith?: Maybe<Scalars['String']>,
  /** 提现时间 结尾不等于 */
  createDate_NotEndsWith?: Maybe<Scalars['String']>,
  /** 提现时间 */
  createDate?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<RoomInputWhere>>,
  OR?: Maybe<Array<RoomInputWhere>>,
  NOT?: Maybe<Array<RoomInputWhere>>,
};

export type RoomPartial = {
  relations?: Maybe<Array<Maybe<Scalars['String']>>>,
  /** id */
  id?: Maybe<Scalars['Int']>,
  /** 房间密码 */
  password?: Maybe<Scalars['String']>,
  /** 房间类型 */
  roomType?: Maybe<RoomTypeInput>,
  roomTypeId?: Maybe<Scalars['Int']>,
  /** 房间状态 1正常 */
  status?: Maybe<Scalars['Int']>,
  /** 自动开启 */
  autoStart?: Maybe<Scalars['Boolean']>,
  /** 房主 */
  owner?: Maybe<MemberInput>,
  ownerId?: Maybe<Scalars['Int']>,
  /** 加入房间的人 */
  members?: Maybe<Array<Maybe<MemberInput>>>,
  gameLogs?: Maybe<Array<Maybe<GameLogInput>>>,
  /** 提现时间 */
  createDate?: Maybe<Scalars['String']>,
};

export type RoomType = {
  __typename?: 'RoomType',
  /** id */
  id?: Maybe<Scalars['Int']>,
  /** 类型名 */
  title?: Maybe<Scalars['String']>,
  rooms?: Maybe<Array<Maybe<Room>>>,
  getRooms?: Maybe<Array<Maybe<Room>>>,
};


export type RoomTypeGetRoomsArgs = {
  where?: Maybe<RoomInputWhere>,
  order?: Maybe<RoomInputOrder>,
  limit?: Maybe<PageLimitInput>
};

export type RoomTypeInput = {
  /** id */
  id?: Maybe<Scalars['Int']>,
  /** 类型名 */
  title?: Maybe<Scalars['String']>,
  rooms?: Maybe<Array<Maybe<RoomInput>>>,
};

export type RoomTypeInputOrder = {
  /** 
 * id
   * 排序可选值为ASC或者DESC
 **/
  id?: Maybe<Scalars['String']>,
  /** 
 * 类型名
   * 排序可选值为ASC或者DESC
 **/
  title?: Maybe<Scalars['String']>,
  rooms?: Maybe<Scalars['String']>,
};

export type RoomTypeInputWhere = {
  /** id 不等于 */
  id_Not?: Maybe<Scalars['Int']>,
  /** id 在制定内，如[1,2] */
  id_In?: Maybe<Array<Scalars['Int']>>,
  /** id 不在制定内,如[1,2] */
  id_NotIn?: Maybe<Array<Scalars['Int']>>,
  /** id 小于 */
  id_Lt?: Maybe<Scalars['Int']>,
  /** id 小于等于 */
  id_Lte?: Maybe<Scalars['Int']>,
  /** id 大于 */
  id_Gt?: Maybe<Scalars['Int']>,
  /** id 大于等于 */
  id_Gte?: Maybe<Scalars['Int']>,
  /** id */
  id?: Maybe<Scalars['Int']>,
  /** 类型名 不等于 */
  title_Not?: Maybe<Scalars['String']>,
  /** 类型名 在制定内，如[1,2] */
  title_In?: Maybe<Array<Scalars['String']>>,
  /** 类型名 不在制定内,如[1,2] */
  title_NotIn?: Maybe<Array<Scalars['String']>>,
  /** 类型名 小于 */
  title_Lt?: Maybe<Scalars['String']>,
  /** 类型名 小于等于 */
  title_Lte?: Maybe<Scalars['String']>,
  /** 类型名 大于 */
  title_Gt?: Maybe<Scalars['String']>,
  /** 类型名 大于等于 */
  title_Gte?: Maybe<Scalars['String']>,
  /** 类型名 包含 */
  title_Contains?: Maybe<Scalars['String']>,
  /** 类型名 不包含 */
  title_NotContains?: Maybe<Scalars['String']>,
  /** 类型名 开头等于 */
  title_StartsWith?: Maybe<Scalars['String']>,
  /** 类型名 开头不等于 */
  title_NotStartsWith?: Maybe<Scalars['String']>,
  /** 类型名 结尾等于 */
  title_EndsWith?: Maybe<Scalars['String']>,
  /** 类型名 结尾不等于 */
  title_NotEndsWith?: Maybe<Scalars['String']>,
  /** 类型名 */
  title?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<RoomTypeInputWhere>>,
  OR?: Maybe<Array<RoomTypeInputWhere>>,
  NOT?: Maybe<Array<RoomTypeInputWhere>>,
};

export type RoomTypePartial = {
  /** id */
  id?: Maybe<Scalars['Int']>,
  /** 类型名 */
  title?: Maybe<Scalars['String']>,
  rooms?: Maybe<Array<Maybe<RoomInput>>>,
};

export type Setting = {
  __typename?: 'Setting',
  /** id */
  id?: Maybe<Scalars['Int']>,
  /** key */
  key?: Maybe<Scalars['String']>,
  /** value */
  value?: Maybe<Scalars['String']>,
};

export type SettingInput = {
  /** id */
  id?: Maybe<Scalars['Int']>,
  /** key */
  key?: Maybe<Scalars['String']>,
  /** value */
  value?: Maybe<Scalars['String']>,
};

export type SettingInputOrder = {
  /** 
 * id
   * 排序可选值为ASC或者DESC
 **/
  id?: Maybe<Scalars['String']>,
  /** 
 * key
   * 排序可选值为ASC或者DESC
 **/
  key?: Maybe<Scalars['String']>,
  /** 
 * value
   * 排序可选值为ASC或者DESC
 **/
  value?: Maybe<Scalars['String']>,
};

export type SettingInputWhere = {
  /** id 不等于 */
  id_Not?: Maybe<Scalars['Int']>,
  /** id 在制定内，如[1,2] */
  id_In?: Maybe<Array<Scalars['Int']>>,
  /** id 不在制定内,如[1,2] */
  id_NotIn?: Maybe<Array<Scalars['Int']>>,
  /** id 小于 */
  id_Lt?: Maybe<Scalars['Int']>,
  /** id 小于等于 */
  id_Lte?: Maybe<Scalars['Int']>,
  /** id 大于 */
  id_Gt?: Maybe<Scalars['Int']>,
  /** id 大于等于 */
  id_Gte?: Maybe<Scalars['Int']>,
  /** id */
  id?: Maybe<Scalars['Int']>,
  /** key 不等于 */
  key_Not?: Maybe<Scalars['String']>,
  /** key 在制定内，如[1,2] */
  key_In?: Maybe<Array<Scalars['String']>>,
  /** key 不在制定内,如[1,2] */
  key_NotIn?: Maybe<Array<Scalars['String']>>,
  /** key 小于 */
  key_Lt?: Maybe<Scalars['String']>,
  /** key 小于等于 */
  key_Lte?: Maybe<Scalars['String']>,
  /** key 大于 */
  key_Gt?: Maybe<Scalars['String']>,
  /** key 大于等于 */
  key_Gte?: Maybe<Scalars['String']>,
  /** key 包含 */
  key_Contains?: Maybe<Scalars['String']>,
  /** key 不包含 */
  key_NotContains?: Maybe<Scalars['String']>,
  /** key 开头等于 */
  key_StartsWith?: Maybe<Scalars['String']>,
  /** key 开头不等于 */
  key_NotStartsWith?: Maybe<Scalars['String']>,
  /** key 结尾等于 */
  key_EndsWith?: Maybe<Scalars['String']>,
  /** key 结尾不等于 */
  key_NotEndsWith?: Maybe<Scalars['String']>,
  /** key */
  key?: Maybe<Scalars['String']>,
  /** value 不等于 */
  value_Not?: Maybe<Scalars['String']>,
  /** value 在制定内，如[1,2] */
  value_In?: Maybe<Array<Scalars['String']>>,
  /** value 不在制定内,如[1,2] */
  value_NotIn?: Maybe<Array<Scalars['String']>>,
  /** value 小于 */
  value_Lt?: Maybe<Scalars['String']>,
  /** value 小于等于 */
  value_Lte?: Maybe<Scalars['String']>,
  /** value 大于 */
  value_Gt?: Maybe<Scalars['String']>,
  /** value 大于等于 */
  value_Gte?: Maybe<Scalars['String']>,
  /** value 包含 */
  value_Contains?: Maybe<Scalars['String']>,
  /** value 不包含 */
  value_NotContains?: Maybe<Scalars['String']>,
  /** value 开头等于 */
  value_StartsWith?: Maybe<Scalars['String']>,
  /** value 开头不等于 */
  value_NotStartsWith?: Maybe<Scalars['String']>,
  /** value 结尾等于 */
  value_EndsWith?: Maybe<Scalars['String']>,
  /** value 结尾不等于 */
  value_NotEndsWith?: Maybe<Scalars['String']>,
  /** value */
  value?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<SettingInputWhere>>,
  OR?: Maybe<Array<SettingInputWhere>>,
  NOT?: Maybe<Array<SettingInputWhere>>,
};

export type SettingPartial = {
  /** id */
  id?: Maybe<Scalars['Int']>,
  /** key */
  key?: Maybe<Scalars['String']>,
  /** value */
  value?: Maybe<Scalars['String']>,
};





export type Ticket = {
  __typename?: 'Ticket',
  id?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  /** 领取记录 */
  logs?: Maybe<Array<Maybe<TicketLog>>>,
  getTicketLogs?: Maybe<Array<Maybe<TicketLog>>>,
};


export type TicketGetTicketLogsArgs = {
  where?: Maybe<TicketLogInputWhere>,
  order?: Maybe<TicketLogInputOrder>,
  limit?: Maybe<PageLimitInput>
};

export type TicketInput = {
  id?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  /** 领取记录 */
  logs?: Maybe<Array<Maybe<TicketLogInput>>>,
};

export type TicketInputOrder = {
  id?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  /** 
 * 领取记录
   * 排序可选值为ASC或者DESC
 **/
  logs?: Maybe<Scalars['String']>,
};

export type TicketInputWhere = {
  id_Not?: Maybe<Scalars['Int']>,
  id_In?: Maybe<Array<Scalars['Int']>>,
  id_NotIn?: Maybe<Array<Scalars['Int']>>,
  id_Lt?: Maybe<Scalars['Int']>,
  id_Lte?: Maybe<Scalars['Int']>,
  id_Gt?: Maybe<Scalars['Int']>,
  id_Gte?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  title_Not?: Maybe<Scalars['String']>,
  title_In?: Maybe<Array<Scalars['String']>>,
  title_NotIn?: Maybe<Array<Scalars['String']>>,
  title_Lt?: Maybe<Scalars['String']>,
  title_Lte?: Maybe<Scalars['String']>,
  title_Gt?: Maybe<Scalars['String']>,
  title_Gte?: Maybe<Scalars['String']>,
  title_Contains?: Maybe<Scalars['String']>,
  title_NotContains?: Maybe<Scalars['String']>,
  title_StartsWith?: Maybe<Scalars['String']>,
  title_NotStartsWith?: Maybe<Scalars['String']>,
  title_EndsWith?: Maybe<Scalars['String']>,
  title_NotEndsWith?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<TicketInputWhere>>,
  OR?: Maybe<Array<TicketInputWhere>>,
  NOT?: Maybe<Array<TicketInputWhere>>,
};

export type TicketLog = {
  __typename?: 'TicketLog',
  relations?: Maybe<Array<Maybe<Scalars['String']>>>,
  id?: Maybe<Scalars['Int']>,
  ticket?: Maybe<Ticket>,
  ticket_Id?: Maybe<Scalars['Int']>,
  member?: Maybe<Member>,
  member_id?: Maybe<Scalars['Int']>,
  createDate?: Maybe<Scalars['String']>,
};

export type TicketLogInput = {
  relations?: Maybe<Array<Maybe<Scalars['String']>>>,
  id?: Maybe<Scalars['Int']>,
  ticket?: Maybe<TicketInput>,
  ticket_Id?: Maybe<Scalars['Int']>,
  member?: Maybe<MemberInput>,
  member_id?: Maybe<Scalars['Int']>,
  createDate?: Maybe<Scalars['String']>,
};

export type TicketLogInputOrder = {
  relations?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  ticket?: Maybe<Scalars['String']>,
  ticket_Id?: Maybe<Scalars['String']>,
  member?: Maybe<Scalars['String']>,
  member_id?: Maybe<Scalars['String']>,
  createDate?: Maybe<Scalars['String']>,
};

export type TicketLogInputWhere = {
  id_Not?: Maybe<Scalars['Int']>,
  id_In?: Maybe<Array<Scalars['Int']>>,
  id_NotIn?: Maybe<Array<Scalars['Int']>>,
  id_Lt?: Maybe<Scalars['Int']>,
  id_Lte?: Maybe<Scalars['Int']>,
  id_Gt?: Maybe<Scalars['Int']>,
  id_Gte?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  ticket_Id_Not?: Maybe<Scalars['Int']>,
  ticket_Id_In?: Maybe<Array<Scalars['Int']>>,
  ticket_Id_NotIn?: Maybe<Array<Scalars['Int']>>,
  ticket_Id_Lt?: Maybe<Scalars['Int']>,
  ticket_Id_Lte?: Maybe<Scalars['Int']>,
  ticket_Id_Gt?: Maybe<Scalars['Int']>,
  ticket_Id_Gte?: Maybe<Scalars['Int']>,
  ticket_Id?: Maybe<Scalars['Int']>,
  member_id_Not?: Maybe<Scalars['Int']>,
  member_id_In?: Maybe<Array<Scalars['Int']>>,
  member_id_NotIn?: Maybe<Array<Scalars['Int']>>,
  member_id_Lt?: Maybe<Scalars['Int']>,
  member_id_Lte?: Maybe<Scalars['Int']>,
  member_id_Gt?: Maybe<Scalars['Int']>,
  member_id_Gte?: Maybe<Scalars['Int']>,
  member_id?: Maybe<Scalars['Int']>,
  createDate_Not?: Maybe<Scalars['String']>,
  createDate_In?: Maybe<Array<Scalars['String']>>,
  createDate_NotIn?: Maybe<Array<Scalars['String']>>,
  createDate_Lt?: Maybe<Scalars['String']>,
  createDate_Lte?: Maybe<Scalars['String']>,
  createDate_Gt?: Maybe<Scalars['String']>,
  createDate_Gte?: Maybe<Scalars['String']>,
  createDate_Contains?: Maybe<Scalars['String']>,
  createDate_NotContains?: Maybe<Scalars['String']>,
  createDate_StartsWith?: Maybe<Scalars['String']>,
  createDate_NotStartsWith?: Maybe<Scalars['String']>,
  createDate_EndsWith?: Maybe<Scalars['String']>,
  createDate_NotEndsWith?: Maybe<Scalars['String']>,
  createDate?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<TicketLogInputWhere>>,
  OR?: Maybe<Array<TicketLogInputWhere>>,
  NOT?: Maybe<Array<TicketLogInputWhere>>,
};

export type TicketLogPartial = {
  relations?: Maybe<Array<Maybe<Scalars['String']>>>,
  id?: Maybe<Scalars['Int']>,
  ticket?: Maybe<TicketInput>,
  ticket_Id?: Maybe<Scalars['Int']>,
  member?: Maybe<MemberInput>,
  member_id?: Maybe<Scalars['Int']>,
  createDate?: Maybe<Scalars['String']>,
};

export type TicketPartial = {
  id?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  /** 领取记录 */
  logs?: Maybe<Array<Maybe<TicketLogInput>>>,
};


export type TixianLog = {
  __typename?: 'TixianLog',
  relations?: Maybe<Array<Maybe<Scalars['String']>>>,
  id?: Maybe<Scalars['Int']>,
  /** 提现人 */
  member?: Maybe<Member>,
  memberId?: Maybe<Scalars['Int']>,
  getMember?: Maybe<Member>,
  /** 提现数量 */
  count?: Maybe<Scalars['Int']>,
  /** 提现状态 */
  status?: Maybe<Scalars['Int']>,
  /** 提现时间 */
  createDate?: Maybe<Scalars['String']>,
};

export type TixianLogInput = {
  relations?: Maybe<Array<Maybe<Scalars['String']>>>,
  id?: Maybe<Scalars['Int']>,
  /** 提现人 */
  member?: Maybe<MemberInput>,
  memberId?: Maybe<Scalars['Int']>,
  /** 提现数量 */
  count?: Maybe<Scalars['Int']>,
  /** 提现状态 */
  status?: Maybe<Scalars['Int']>,
  /** 提现时间 */
  createDate?: Maybe<Scalars['String']>,
};

export type TixianLogInputOrder = {
  relations?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  /** 
 * 提现人
   * 排序可选值为ASC或者DESC
 **/
  member?: Maybe<Scalars['String']>,
  memberId?: Maybe<Scalars['String']>,
  /** 
 * 提现数量
   * 排序可选值为ASC或者DESC
 **/
  count?: Maybe<Scalars['String']>,
  /** 
 * 提现状态
   * 排序可选值为ASC或者DESC
 **/
  status?: Maybe<Scalars['String']>,
  /** 
 * 提现时间
   * 排序可选值为ASC或者DESC
 **/
  createDate?: Maybe<Scalars['String']>,
};

export type TixianLogInputWhere = {
  id_Not?: Maybe<Scalars['Int']>,
  id_In?: Maybe<Array<Scalars['Int']>>,
  id_NotIn?: Maybe<Array<Scalars['Int']>>,
  id_Lt?: Maybe<Scalars['Int']>,
  id_Lte?: Maybe<Scalars['Int']>,
  id_Gt?: Maybe<Scalars['Int']>,
  id_Gte?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['Int']>,
  memberId_Not?: Maybe<Scalars['Int']>,
  memberId_In?: Maybe<Array<Scalars['Int']>>,
  memberId_NotIn?: Maybe<Array<Scalars['Int']>>,
  memberId_Lt?: Maybe<Scalars['Int']>,
  memberId_Lte?: Maybe<Scalars['Int']>,
  memberId_Gt?: Maybe<Scalars['Int']>,
  memberId_Gte?: Maybe<Scalars['Int']>,
  memberId?: Maybe<Scalars['Int']>,
  /** 提现数量 不等于 */
  count_Not?: Maybe<Scalars['Int']>,
  /** 提现数量 在制定内，如[1,2] */
  count_In?: Maybe<Array<Scalars['Int']>>,
  /** 提现数量 不在制定内,如[1,2] */
  count_NotIn?: Maybe<Array<Scalars['Int']>>,
  /** 提现数量 小于 */
  count_Lt?: Maybe<Scalars['Int']>,
  /** 提现数量 小于等于 */
  count_Lte?: Maybe<Scalars['Int']>,
  /** 提现数量 大于 */
  count_Gt?: Maybe<Scalars['Int']>,
  /** 提现数量 大于等于 */
  count_Gte?: Maybe<Scalars['Int']>,
  /** 提现数量 */
  count?: Maybe<Scalars['Int']>,
  /** 提现状态 不等于 */
  status_Not?: Maybe<Scalars['Int']>,
  /** 提现状态 在制定内，如[1,2] */
  status_In?: Maybe<Array<Scalars['Int']>>,
  /** 提现状态 不在制定内,如[1,2] */
  status_NotIn?: Maybe<Array<Scalars['Int']>>,
  /** 提现状态 小于 */
  status_Lt?: Maybe<Scalars['Int']>,
  /** 提现状态 小于等于 */
  status_Lte?: Maybe<Scalars['Int']>,
  /** 提现状态 大于 */
  status_Gt?: Maybe<Scalars['Int']>,
  /** 提现状态 大于等于 */
  status_Gte?: Maybe<Scalars['Int']>,
  /** 提现状态 */
  status?: Maybe<Scalars['Int']>,
  /** 提现时间 不等于 */
  createDate_Not?: Maybe<Scalars['String']>,
  /** 提现时间 在制定内，如[1,2] */
  createDate_In?: Maybe<Array<Scalars['String']>>,
  /** 提现时间 不在制定内,如[1,2] */
  createDate_NotIn?: Maybe<Array<Scalars['String']>>,
  /** 提现时间 小于 */
  createDate_Lt?: Maybe<Scalars['String']>,
  /** 提现时间 小于等于 */
  createDate_Lte?: Maybe<Scalars['String']>,
  /** 提现时间 大于 */
  createDate_Gt?: Maybe<Scalars['String']>,
  /** 提现时间 大于等于 */
  createDate_Gte?: Maybe<Scalars['String']>,
  /** 提现时间 包含 */
  createDate_Contains?: Maybe<Scalars['String']>,
  /** 提现时间 不包含 */
  createDate_NotContains?: Maybe<Scalars['String']>,
  /** 提现时间 开头等于 */
  createDate_StartsWith?: Maybe<Scalars['String']>,
  /** 提现时间 开头不等于 */
  createDate_NotStartsWith?: Maybe<Scalars['String']>,
  /** 提现时间 结尾等于 */
  createDate_EndsWith?: Maybe<Scalars['String']>,
  /** 提现时间 结尾不等于 */
  createDate_NotEndsWith?: Maybe<Scalars['String']>,
  /** 提现时间 */
  createDate?: Maybe<Scalars['String']>,
  AND?: Maybe<Array<TixianLogInputWhere>>,
  OR?: Maybe<Array<TixianLogInputWhere>>,
  NOT?: Maybe<Array<TixianLogInputWhere>>,
};

export type TixianLogPartial = {
  relations?: Maybe<Array<Maybe<Scalars['String']>>>,
  id?: Maybe<Scalars['Int']>,
  /** 提现人 */
  member?: Maybe<MemberInput>,
  memberId?: Maybe<Scalars['Int']>,
  /** 提现数量 */
  count?: Maybe<Scalars['Int']>,
  /** 提现状态 */
  status?: Maybe<Scalars['Int']>,
  /** 提现时间 */
  createDate?: Maybe<Scalars['String']>,
};


export type MemberGetQueryVariables = {
  entity: MemberInputWhere
};


export type MemberGetQuery = (
  { __typename?: 'Query' }
  & { memberGet: Maybe<(
    { __typename?: 'Member' }
    & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
    & { rooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { roomType: Maybe<(
        { __typename?: 'RoomType' }
        & Pick<RoomType, 'id' | 'title'>
      )>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>> }
    )>>>, getRooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { roomType: Maybe<(
        { __typename?: 'RoomType' }
        & Pick<RoomType, 'id' | 'title'>
      )>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>> }
    )>>>, createRooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { roomType: Maybe<(
        { __typename?: 'RoomType' }
        & Pick<RoomType, 'id' | 'title'>
      )>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>> }
    )>>>, getCreateRooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { roomType: Maybe<(
        { __typename?: 'RoomType' }
        & Pick<RoomType, 'id' | 'title'>
      )>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>> }
    )>>>, tixianLogs: Maybe<Array<Maybe<(
      { __typename?: 'TixianLog' }
      & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
    )>>>, getTixianLogs: Maybe<Array<Maybe<(
      { __typename?: 'TixianLog' }
      & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
    )>>>, gameLogs: Maybe<Array<Maybe<(
      { __typename?: 'GameLog' }
      & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      & { room: Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )> }
    )>>>, ticketLogs: Maybe<Array<Maybe<(
      { __typename?: 'TicketLog' }
      & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
      & { ticket: Maybe<(
        { __typename?: 'Ticket' }
        & Pick<Ticket, 'id' | 'title'>
      )> }
    )>>>, getTicketLogs: Maybe<Array<Maybe<(
      { __typename?: 'TicketLog' }
      & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
      & { ticket: Maybe<(
        { __typename?: 'Ticket' }
        & Pick<Ticket, 'id' | 'title'>
      )> }
    )>>> }
  )> }
);

export type RoomGetQueryVariables = {
  entity: RoomInputWhere
};


export type RoomGetQuery = (
  { __typename?: 'Query' }
  & { roomGet: Maybe<(
    { __typename?: 'Room' }
    & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
    & { roomType: Maybe<(
      { __typename?: 'RoomType' }
      & Pick<RoomType, 'id' | 'title'>
    )>, owner: Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>, getOwner: Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>, members: Maybe<Array<Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>>>, getMembers: Maybe<Array<Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>>>, gameLogs: Maybe<Array<Maybe<(
      { __typename?: 'GameLog' }
      & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      & { members: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, getMembers: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>> }
    )>>>, getGameLogs: Maybe<Array<Maybe<(
      { __typename?: 'GameLog' }
      & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      & { members: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, getMembers: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type RoomTypeGetQueryVariables = {
  entity: RoomTypeInputWhere
};


export type RoomTypeGetQuery = (
  { __typename?: 'Query' }
  & { roomTypeGet: Maybe<(
    { __typename?: 'RoomType' }
    & Pick<RoomType, 'id' | 'title'>
    & { rooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { owner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, getOwner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, members: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, getMembers: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { members: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>>, getMembers: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>> }
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { members: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>>, getMembers: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>> }
      )>>> }
    )>>>, getRooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { owner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, getOwner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, members: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, getMembers: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { members: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>>, getMembers: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>> }
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { members: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>>, getMembers: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type SettingGetQueryVariables = {
  entity: SettingInputWhere
};


export type SettingGetQuery = (
  { __typename?: 'Query' }
  & { settingGet: Maybe<(
    { __typename?: 'Setting' }
    & Pick<Setting, 'id' | 'key' | 'value'>
  )> }
);

export type TixianLogGetQueryVariables = {
  entity: TixianLogInputWhere
};


export type TixianLogGetQuery = (
  { __typename?: 'Query' }
  & { tixianLogGet: Maybe<(
    { __typename?: 'TixianLog' }
    & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
    & { member: Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { rooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, createRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getCreateRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { room: Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )> }
        )> }
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>, getMember: Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { rooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, createRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getCreateRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { room: Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )> }
        )> }
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )> }
  )> }
);

export type GameLogGetQueryVariables = {
  entity: GameLogInputWhere
};


export type GameLogGetQuery = (
  { __typename?: 'Query' }
  & { gameLogGet: Maybe<(
    { __typename?: 'GameLog' }
    & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
    & { room: Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { roomType: Maybe<(
        { __typename?: 'RoomType' }
        & Pick<RoomType, 'id' | 'title'>
      )>, owner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, getOwner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, members: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, getMembers: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>> }
    )>, members: Maybe<Array<Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { rooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, getRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, createRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, getCreateRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>>>, getMembers: Maybe<Array<Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { rooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, getRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, createRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, getCreateRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>>> }
  )> }
);

export type TicketGetQueryVariables = {
  entity: TicketInputWhere
};


export type TicketGetQuery = (
  { __typename?: 'Query' }
  & { ticketGet: Maybe<(
    { __typename?: 'Ticket' }
    & Pick<Ticket, 'id' | 'title'>
    & { logs: Maybe<Array<Maybe<(
      { __typename?: 'TicketLog' }
      & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
      & { member: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { rooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, getRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, createRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, getCreateRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          & { room: Maybe<(
            { __typename?: 'Room' }
            & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
            & { roomType: Maybe<(
              { __typename?: 'RoomType' }
              & Pick<RoomType, 'id' | 'title'>
            )> }
          )> }
        )>>> }
      )> }
    )>>>, getTicketLogs: Maybe<Array<Maybe<(
      { __typename?: 'TicketLog' }
      & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
      & { member: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { rooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, getRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, createRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, getCreateRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          & { room: Maybe<(
            { __typename?: 'Room' }
            & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
            & { roomType: Maybe<(
              { __typename?: 'RoomType' }
              & Pick<RoomType, 'id' | 'title'>
            )> }
          )> }
        )>>> }
      )> }
    )>>> }
  )> }
);

export type TicketLogGetQueryVariables = {
  entity: TicketLogInputWhere
};


export type TicketLogGetQuery = (
  { __typename?: 'Query' }
  & { ticketLogGet: Maybe<(
    { __typename?: 'TicketLog' }
    & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
    & { ticket: Maybe<(
      { __typename?: 'Ticket' }
      & Pick<Ticket, 'id' | 'title'>
    )>, member: Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { rooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, createRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getCreateRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { room: Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )> }
        )> }
      )>>> }
    )> }
  )> }
);

export type MemberFindQueryVariables = {
  entity: MemberInputWhere,
  order: MemberInputOrder,
  limit?: Maybe<PageLimitInput>
};


export type MemberFindQuery = (
  { __typename?: 'Query' }
  & { memberFind: Maybe<Array<Maybe<(
    { __typename?: 'Member' }
    & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
    & { rooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { roomType: Maybe<(
        { __typename?: 'RoomType' }
        & Pick<RoomType, 'id' | 'title'>
      )>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>> }
    )>>>, getRooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { roomType: Maybe<(
        { __typename?: 'RoomType' }
        & Pick<RoomType, 'id' | 'title'>
      )>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>> }
    )>>>, createRooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { roomType: Maybe<(
        { __typename?: 'RoomType' }
        & Pick<RoomType, 'id' | 'title'>
      )>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>> }
    )>>>, getCreateRooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { roomType: Maybe<(
        { __typename?: 'RoomType' }
        & Pick<RoomType, 'id' | 'title'>
      )>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>> }
    )>>>, tixianLogs: Maybe<Array<Maybe<(
      { __typename?: 'TixianLog' }
      & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
    )>>>, getTixianLogs: Maybe<Array<Maybe<(
      { __typename?: 'TixianLog' }
      & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
    )>>>, gameLogs: Maybe<Array<Maybe<(
      { __typename?: 'GameLog' }
      & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      & { room: Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )> }
    )>>>, ticketLogs: Maybe<Array<Maybe<(
      { __typename?: 'TicketLog' }
      & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
      & { ticket: Maybe<(
        { __typename?: 'Ticket' }
        & Pick<Ticket, 'id' | 'title'>
      )> }
    )>>>, getTicketLogs: Maybe<Array<Maybe<(
      { __typename?: 'TicketLog' }
      & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
      & { ticket: Maybe<(
        { __typename?: 'Ticket' }
        & Pick<Ticket, 'id' | 'title'>
      )> }
    )>>> }
  )>>> }
);

export type RoomFindQueryVariables = {
  entity: RoomInputWhere,
  order: RoomInputOrder,
  limit?: Maybe<PageLimitInput>
};


export type RoomFindQuery = (
  { __typename?: 'Query' }
  & { roomFind: Maybe<Array<Maybe<(
    { __typename?: 'Room' }
    & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
    & { roomType: Maybe<(
      { __typename?: 'RoomType' }
      & Pick<RoomType, 'id' | 'title'>
    )>, owner: Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>, getOwner: Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>, members: Maybe<Array<Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>>>, getMembers: Maybe<Array<Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>>>, gameLogs: Maybe<Array<Maybe<(
      { __typename?: 'GameLog' }
      & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      & { members: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, getMembers: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>> }
    )>>>, getGameLogs: Maybe<Array<Maybe<(
      { __typename?: 'GameLog' }
      & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      & { members: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, getMembers: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>> }
    )>>> }
  )>>> }
);

export type RoomTypeFindQueryVariables = {
  entity: RoomTypeInputWhere,
  order: RoomTypeInputOrder,
  limit?: Maybe<PageLimitInput>
};


export type RoomTypeFindQuery = (
  { __typename?: 'Query' }
  & { roomTypeFind: Maybe<Array<Maybe<(
    { __typename?: 'RoomType' }
    & Pick<RoomType, 'id' | 'title'>
    & { rooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { owner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, getOwner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, members: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, getMembers: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { members: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>>, getMembers: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>> }
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { members: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>>, getMembers: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>> }
      )>>> }
    )>>>, getRooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { owner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, getOwner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, members: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, getMembers: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { members: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>>, getMembers: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>> }
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { members: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>>, getMembers: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>> }
      )>>> }
    )>>> }
  )>>> }
);

export type SettingFindQueryVariables = {
  entity: SettingInputWhere,
  order: SettingInputOrder,
  limit?: Maybe<PageLimitInput>
};


export type SettingFindQuery = (
  { __typename?: 'Query' }
  & { settingFind: Maybe<Array<Maybe<(
    { __typename?: 'Setting' }
    & Pick<Setting, 'id' | 'key' | 'value'>
  )>>> }
);

export type TixianLogFindQueryVariables = {
  entity: TixianLogInputWhere,
  order: TixianLogInputOrder,
  limit?: Maybe<PageLimitInput>
};


export type TixianLogFindQuery = (
  { __typename?: 'Query' }
  & { tixianLogFind: Maybe<Array<Maybe<(
    { __typename?: 'TixianLog' }
    & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
    & { member: Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { rooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, createRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getCreateRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { room: Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )> }
        )> }
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>, getMember: Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { rooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, createRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getCreateRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { room: Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )> }
        )> }
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )> }
  )>>> }
);

export type GameLogFindQueryVariables = {
  entity: GameLogInputWhere,
  order: GameLogInputOrder,
  limit?: Maybe<PageLimitInput>
};


export type GameLogFindQuery = (
  { __typename?: 'Query' }
  & { gameLogFind: Maybe<Array<Maybe<(
    { __typename?: 'GameLog' }
    & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
    & { room: Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { roomType: Maybe<(
        { __typename?: 'RoomType' }
        & Pick<RoomType, 'id' | 'title'>
      )>, owner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, getOwner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, members: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, getMembers: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>> }
    )>, members: Maybe<Array<Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { rooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, getRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, createRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, getCreateRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>>>, getMembers: Maybe<Array<Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { rooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, getRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, createRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, getCreateRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>>> }
  )>>> }
);

export type TicketFindQueryVariables = {
  entity: TicketInputWhere,
  order: TicketInputOrder,
  limit?: Maybe<PageLimitInput>
};


export type TicketFindQuery = (
  { __typename?: 'Query' }
  & { ticketFind: Maybe<Array<Maybe<(
    { __typename?: 'Ticket' }
    & Pick<Ticket, 'id' | 'title'>
    & { logs: Maybe<Array<Maybe<(
      { __typename?: 'TicketLog' }
      & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
      & { member: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { rooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, getRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, createRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, getCreateRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          & { room: Maybe<(
            { __typename?: 'Room' }
            & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
            & { roomType: Maybe<(
              { __typename?: 'RoomType' }
              & Pick<RoomType, 'id' | 'title'>
            )> }
          )> }
        )>>> }
      )> }
    )>>>, getTicketLogs: Maybe<Array<Maybe<(
      { __typename?: 'TicketLog' }
      & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
      & { member: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { rooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, getRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, createRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, getCreateRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          & { room: Maybe<(
            { __typename?: 'Room' }
            & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
            & { roomType: Maybe<(
              { __typename?: 'RoomType' }
              & Pick<RoomType, 'id' | 'title'>
            )> }
          )> }
        )>>> }
      )> }
    )>>> }
  )>>> }
);

export type TicketLogFindQueryVariables = {
  entity: TicketLogInputWhere,
  order: TicketLogInputOrder,
  limit?: Maybe<PageLimitInput>
};


export type TicketLogFindQuery = (
  { __typename?: 'Query' }
  & { ticketLogFind: Maybe<Array<Maybe<(
    { __typename?: 'TicketLog' }
    & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
    & { ticket: Maybe<(
      { __typename?: 'Ticket' }
      & Pick<Ticket, 'id' | 'title'>
    )>, member: Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { rooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, createRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getCreateRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { room: Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )> }
        )> }
      )>>> }
    )> }
  )>>> }
);

export type MemberCountQueryVariables = {
  where: MemberInputWhere
};


export type MemberCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'memberCount'>
);

export type RoomCountQueryVariables = {
  where: RoomInputWhere
};


export type RoomCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'roomCount'>
);

export type RoomTypeCountQueryVariables = {
  where: RoomTypeInputWhere
};


export type RoomTypeCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'roomTypeCount'>
);

export type SettingCountQueryVariables = {
  where: SettingInputWhere
};


export type SettingCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'settingCount'>
);

export type TixianLogCountQueryVariables = {
  where: TixianLogInputWhere
};


export type TixianLogCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'tixianLogCount'>
);

export type GameLogCountQueryVariables = {
  where: GameLogInputWhere
};


export type GameLogCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'gameLogCount'>
);

export type TicketCountQueryVariables = {
  where: TicketInputWhere
};


export type TicketCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'ticketCount'>
);

export type TicketLogCountQueryVariables = {
  where: TicketLogInputWhere
};


export type TicketLogCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'ticketLogCount'>
);

export type MemberSaveMutationVariables = {
  entity: MemberInput
};


export type MemberSaveMutation = (
  { __typename?: 'Mutation' }
  & { memberSave: Maybe<(
    { __typename?: 'Member' }
    & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
    & { rooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { roomType: Maybe<(
        { __typename?: 'RoomType' }
        & Pick<RoomType, 'id' | 'title'>
      )>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>> }
    )>>>, getRooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { roomType: Maybe<(
        { __typename?: 'RoomType' }
        & Pick<RoomType, 'id' | 'title'>
      )>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>> }
    )>>>, createRooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { roomType: Maybe<(
        { __typename?: 'RoomType' }
        & Pick<RoomType, 'id' | 'title'>
      )>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>> }
    )>>>, getCreateRooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { roomType: Maybe<(
        { __typename?: 'RoomType' }
        & Pick<RoomType, 'id' | 'title'>
      )>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>> }
    )>>>, tixianLogs: Maybe<Array<Maybe<(
      { __typename?: 'TixianLog' }
      & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
    )>>>, getTixianLogs: Maybe<Array<Maybe<(
      { __typename?: 'TixianLog' }
      & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
    )>>>, gameLogs: Maybe<Array<Maybe<(
      { __typename?: 'GameLog' }
      & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      & { room: Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )> }
    )>>>, ticketLogs: Maybe<Array<Maybe<(
      { __typename?: 'TicketLog' }
      & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
      & { ticket: Maybe<(
        { __typename?: 'Ticket' }
        & Pick<Ticket, 'id' | 'title'>
      )> }
    )>>>, getTicketLogs: Maybe<Array<Maybe<(
      { __typename?: 'TicketLog' }
      & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
      & { ticket: Maybe<(
        { __typename?: 'Ticket' }
        & Pick<Ticket, 'id' | 'title'>
      )> }
    )>>> }
  )> }
);

export type RoomSaveMutationVariables = {
  entity: RoomInput
};


export type RoomSaveMutation = (
  { __typename?: 'Mutation' }
  & { roomSave: Maybe<(
    { __typename?: 'Room' }
    & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
    & { roomType: Maybe<(
      { __typename?: 'RoomType' }
      & Pick<RoomType, 'id' | 'title'>
    )>, owner: Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>, getOwner: Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>, members: Maybe<Array<Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>>>, getMembers: Maybe<Array<Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>>>, gameLogs: Maybe<Array<Maybe<(
      { __typename?: 'GameLog' }
      & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      & { members: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, getMembers: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>> }
    )>>>, getGameLogs: Maybe<Array<Maybe<(
      { __typename?: 'GameLog' }
      & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      & { members: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, getMembers: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type RoomTypeSaveMutationVariables = {
  entity: RoomTypeInput
};


export type RoomTypeSaveMutation = (
  { __typename?: 'Mutation' }
  & { roomTypeSave: Maybe<(
    { __typename?: 'RoomType' }
    & Pick<RoomType, 'id' | 'title'>
    & { rooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { owner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, getOwner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, members: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, getMembers: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { members: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>>, getMembers: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>> }
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { members: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>>, getMembers: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>> }
      )>>> }
    )>>>, getRooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { owner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, getOwner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, members: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, getMembers: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { members: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>>, getMembers: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>> }
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { members: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>>, getMembers: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type SettingSaveMutationVariables = {
  entity: SettingInput
};


export type SettingSaveMutation = (
  { __typename?: 'Mutation' }
  & { settingSave: Maybe<(
    { __typename?: 'Setting' }
    & Pick<Setting, 'id' | 'key' | 'value'>
  )> }
);

export type TixianLogSaveMutationVariables = {
  entity: TixianLogInput
};


export type TixianLogSaveMutation = (
  { __typename?: 'Mutation' }
  & { tixianLogSave: Maybe<(
    { __typename?: 'TixianLog' }
    & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
    & { member: Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { rooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, createRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getCreateRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { room: Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )> }
        )> }
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>, getMember: Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { rooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, createRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getCreateRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { room: Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )> }
        )> }
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )> }
  )> }
);

export type GameLogSaveMutationVariables = {
  entity: GameLogInput
};


export type GameLogSaveMutation = (
  { __typename?: 'Mutation' }
  & { gameLogSave: Maybe<(
    { __typename?: 'GameLog' }
    & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
    & { room: Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { roomType: Maybe<(
        { __typename?: 'RoomType' }
        & Pick<RoomType, 'id' | 'title'>
      )>, owner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, getOwner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, members: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, getMembers: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>> }
    )>, members: Maybe<Array<Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { rooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, getRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, createRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, getCreateRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>>>, getMembers: Maybe<Array<Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { rooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, getRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, createRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, getCreateRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>>> }
  )> }
);

export type TicketSaveMutationVariables = {
  entity: TicketInput
};


export type TicketSaveMutation = (
  { __typename?: 'Mutation' }
  & { ticketSave: Maybe<(
    { __typename?: 'Ticket' }
    & Pick<Ticket, 'id' | 'title'>
    & { logs: Maybe<Array<Maybe<(
      { __typename?: 'TicketLog' }
      & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
      & { member: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { rooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, getRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, createRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, getCreateRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          & { room: Maybe<(
            { __typename?: 'Room' }
            & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
            & { roomType: Maybe<(
              { __typename?: 'RoomType' }
              & Pick<RoomType, 'id' | 'title'>
            )> }
          )> }
        )>>> }
      )> }
    )>>>, getTicketLogs: Maybe<Array<Maybe<(
      { __typename?: 'TicketLog' }
      & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
      & { member: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { rooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, getRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, createRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, getCreateRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          & { room: Maybe<(
            { __typename?: 'Room' }
            & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
            & { roomType: Maybe<(
              { __typename?: 'RoomType' }
              & Pick<RoomType, 'id' | 'title'>
            )> }
          )> }
        )>>> }
      )> }
    )>>> }
  )> }
);

export type TicketLogSaveMutationVariables = {
  entity: TicketLogInput
};


export type TicketLogSaveMutation = (
  { __typename?: 'Mutation' }
  & { ticketLogSave: Maybe<(
    { __typename?: 'TicketLog' }
    & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
    & { ticket: Maybe<(
      { __typename?: 'Ticket' }
      & Pick<Ticket, 'id' | 'title'>
    )>, member: Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { rooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, createRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getCreateRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { room: Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )> }
        )> }
      )>>> }
    )> }
  )> }
);

export type MemberInsertMutationVariables = {
  entity: MemberInput
};


export type MemberInsertMutation = (
  { __typename?: 'Mutation' }
  & { memberInsert: Maybe<(
    { __typename?: 'Member' }
    & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
    & { rooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { roomType: Maybe<(
        { __typename?: 'RoomType' }
        & Pick<RoomType, 'id' | 'title'>
      )>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>> }
    )>>>, getRooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { roomType: Maybe<(
        { __typename?: 'RoomType' }
        & Pick<RoomType, 'id' | 'title'>
      )>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>> }
    )>>>, createRooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { roomType: Maybe<(
        { __typename?: 'RoomType' }
        & Pick<RoomType, 'id' | 'title'>
      )>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>> }
    )>>>, getCreateRooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { roomType: Maybe<(
        { __typename?: 'RoomType' }
        & Pick<RoomType, 'id' | 'title'>
      )>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>> }
    )>>>, tixianLogs: Maybe<Array<Maybe<(
      { __typename?: 'TixianLog' }
      & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
    )>>>, getTixianLogs: Maybe<Array<Maybe<(
      { __typename?: 'TixianLog' }
      & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
    )>>>, gameLogs: Maybe<Array<Maybe<(
      { __typename?: 'GameLog' }
      & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      & { room: Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )> }
    )>>>, ticketLogs: Maybe<Array<Maybe<(
      { __typename?: 'TicketLog' }
      & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
      & { ticket: Maybe<(
        { __typename?: 'Ticket' }
        & Pick<Ticket, 'id' | 'title'>
      )> }
    )>>>, getTicketLogs: Maybe<Array<Maybe<(
      { __typename?: 'TicketLog' }
      & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
      & { ticket: Maybe<(
        { __typename?: 'Ticket' }
        & Pick<Ticket, 'id' | 'title'>
      )> }
    )>>> }
  )> }
);

export type RoomInsertMutationVariables = {
  entity: RoomInput
};


export type RoomInsertMutation = (
  { __typename?: 'Mutation' }
  & { roomInsert: Maybe<(
    { __typename?: 'Room' }
    & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
    & { roomType: Maybe<(
      { __typename?: 'RoomType' }
      & Pick<RoomType, 'id' | 'title'>
    )>, owner: Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>, getOwner: Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>, members: Maybe<Array<Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>>>, getMembers: Maybe<Array<Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>>>, gameLogs: Maybe<Array<Maybe<(
      { __typename?: 'GameLog' }
      & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      & { members: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, getMembers: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>> }
    )>>>, getGameLogs: Maybe<Array<Maybe<(
      { __typename?: 'GameLog' }
      & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      & { members: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, getMembers: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type RoomTypeInsertMutationVariables = {
  entity: RoomTypeInput
};


export type RoomTypeInsertMutation = (
  { __typename?: 'Mutation' }
  & { roomTypeInsert: Maybe<(
    { __typename?: 'RoomType' }
    & Pick<RoomType, 'id' | 'title'>
    & { rooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { owner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, getOwner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, members: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, getMembers: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { members: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>>, getMembers: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>> }
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { members: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>>, getMembers: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>> }
      )>>> }
    )>>>, getRooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { owner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, getOwner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, members: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, getMembers: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { members: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>>, getMembers: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>> }
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { members: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>>, getMembers: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type SettingInsertMutationVariables = {
  entity: SettingInput
};


export type SettingInsertMutation = (
  { __typename?: 'Mutation' }
  & { settingInsert: Maybe<(
    { __typename?: 'Setting' }
    & Pick<Setting, 'id' | 'key' | 'value'>
  )> }
);

export type TixianLogInsertMutationVariables = {
  entity: TixianLogInput
};


export type TixianLogInsertMutation = (
  { __typename?: 'Mutation' }
  & { tixianLogInsert: Maybe<(
    { __typename?: 'TixianLog' }
    & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
    & { member: Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { rooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, createRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getCreateRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { room: Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )> }
        )> }
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>, getMember: Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { rooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, createRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getCreateRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { room: Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )> }
        )> }
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )> }
  )> }
);

export type GameLogInsertMutationVariables = {
  entity: GameLogInput
};


export type GameLogInsertMutation = (
  { __typename?: 'Mutation' }
  & { gameLogInsert: Maybe<(
    { __typename?: 'GameLog' }
    & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
    & { room: Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { roomType: Maybe<(
        { __typename?: 'RoomType' }
        & Pick<RoomType, 'id' | 'title'>
      )>, owner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, getOwner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, members: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, getMembers: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>> }
    )>, members: Maybe<Array<Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { rooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, getRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, createRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, getCreateRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>>>, getMembers: Maybe<Array<Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { rooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, getRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, createRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, getCreateRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>>> }
  )> }
);

export type TicketInsertMutationVariables = {
  entity: TicketInput
};


export type TicketInsertMutation = (
  { __typename?: 'Mutation' }
  & { ticketInsert: Maybe<(
    { __typename?: 'Ticket' }
    & Pick<Ticket, 'id' | 'title'>
    & { logs: Maybe<Array<Maybe<(
      { __typename?: 'TicketLog' }
      & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
      & { member: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { rooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, getRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, createRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, getCreateRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          & { room: Maybe<(
            { __typename?: 'Room' }
            & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
            & { roomType: Maybe<(
              { __typename?: 'RoomType' }
              & Pick<RoomType, 'id' | 'title'>
            )> }
          )> }
        )>>> }
      )> }
    )>>>, getTicketLogs: Maybe<Array<Maybe<(
      { __typename?: 'TicketLog' }
      & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
      & { member: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { rooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, getRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, createRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, getCreateRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          & { room: Maybe<(
            { __typename?: 'Room' }
            & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
            & { roomType: Maybe<(
              { __typename?: 'RoomType' }
              & Pick<RoomType, 'id' | 'title'>
            )> }
          )> }
        )>>> }
      )> }
    )>>> }
  )> }
);

export type TicketLogInsertMutationVariables = {
  entity: TicketLogInput
};


export type TicketLogInsertMutation = (
  { __typename?: 'Mutation' }
  & { ticketLogInsert: Maybe<(
    { __typename?: 'TicketLog' }
    & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
    & { ticket: Maybe<(
      { __typename?: 'Ticket' }
      & Pick<Ticket, 'id' | 'title'>
    )>, member: Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { rooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, createRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getCreateRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { room: Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )> }
        )> }
      )>>> }
    )> }
  )> }
);

export type MemberUpdateMutationVariables = {
  where: MemberPartial,
  entity: MemberInput
};


export type MemberUpdateMutation = (
  { __typename?: 'Mutation' }
  & { memberUpdate: Maybe<(
    { __typename?: 'Member' }
    & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
    & { rooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { roomType: Maybe<(
        { __typename?: 'RoomType' }
        & Pick<RoomType, 'id' | 'title'>
      )>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>> }
    )>>>, getRooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { roomType: Maybe<(
        { __typename?: 'RoomType' }
        & Pick<RoomType, 'id' | 'title'>
      )>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>> }
    )>>>, createRooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { roomType: Maybe<(
        { __typename?: 'RoomType' }
        & Pick<RoomType, 'id' | 'title'>
      )>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>> }
    )>>>, getCreateRooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { roomType: Maybe<(
        { __typename?: 'RoomType' }
        & Pick<RoomType, 'id' | 'title'>
      )>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>> }
    )>>>, tixianLogs: Maybe<Array<Maybe<(
      { __typename?: 'TixianLog' }
      & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
    )>>>, getTixianLogs: Maybe<Array<Maybe<(
      { __typename?: 'TixianLog' }
      & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
    )>>>, gameLogs: Maybe<Array<Maybe<(
      { __typename?: 'GameLog' }
      & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      & { room: Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )> }
    )>>>, ticketLogs: Maybe<Array<Maybe<(
      { __typename?: 'TicketLog' }
      & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
      & { ticket: Maybe<(
        { __typename?: 'Ticket' }
        & Pick<Ticket, 'id' | 'title'>
      )> }
    )>>>, getTicketLogs: Maybe<Array<Maybe<(
      { __typename?: 'TicketLog' }
      & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
      & { ticket: Maybe<(
        { __typename?: 'Ticket' }
        & Pick<Ticket, 'id' | 'title'>
      )> }
    )>>> }
  )> }
);

export type RoomUpdateMutationVariables = {
  where: RoomPartial,
  entity: RoomInput
};


export type RoomUpdateMutation = (
  { __typename?: 'Mutation' }
  & { roomUpdate: Maybe<(
    { __typename?: 'Room' }
    & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
    & { roomType: Maybe<(
      { __typename?: 'RoomType' }
      & Pick<RoomType, 'id' | 'title'>
    )>, owner: Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>, getOwner: Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>, members: Maybe<Array<Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>>>, getMembers: Maybe<Array<Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>>>, gameLogs: Maybe<Array<Maybe<(
      { __typename?: 'GameLog' }
      & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      & { members: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, getMembers: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>> }
    )>>>, getGameLogs: Maybe<Array<Maybe<(
      { __typename?: 'GameLog' }
      & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
      & { members: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, getMembers: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type RoomTypeUpdateMutationVariables = {
  where: RoomTypePartial,
  entity: RoomTypeInput
};


export type RoomTypeUpdateMutation = (
  { __typename?: 'Mutation' }
  & { roomTypeUpdate: Maybe<(
    { __typename?: 'RoomType' }
    & Pick<RoomType, 'id' | 'title'>
    & { rooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { owner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, getOwner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, members: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, getMembers: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { members: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>>, getMembers: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>> }
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { members: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>>, getMembers: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>> }
      )>>> }
    )>>>, getRooms: Maybe<Array<Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { owner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, getOwner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, members: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, getMembers: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { members: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>>, getMembers: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>> }
      )>>>, getGameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { members: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>>, getMembers: Maybe<Array<Maybe<(
          { __typename?: 'Member' }
          & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
          & { tixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, getTixianLogs: Maybe<Array<Maybe<(
            { __typename?: 'TixianLog' }
            & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
          )>>>, ticketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>>, getTicketLogs: Maybe<Array<Maybe<(
            { __typename?: 'TicketLog' }
            & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
            & { ticket: Maybe<(
              { __typename?: 'Ticket' }
              & Pick<Ticket, 'id' | 'title'>
            )> }
          )>>> }
        )>>> }
      )>>> }
    )>>> }
  )> }
);

export type SettingUpdateMutationVariables = {
  where: SettingPartial,
  entity: SettingInput
};


export type SettingUpdateMutation = (
  { __typename?: 'Mutation' }
  & { settingUpdate: Maybe<(
    { __typename?: 'Setting' }
    & Pick<Setting, 'id' | 'key' | 'value'>
  )> }
);

export type TixianLogUpdateMutationVariables = {
  where: TixianLogPartial,
  entity: TixianLogInput
};


export type TixianLogUpdateMutation = (
  { __typename?: 'Mutation' }
  & { tixianLogUpdate: Maybe<(
    { __typename?: 'TixianLog' }
    & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
    & { member: Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { rooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, createRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getCreateRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { room: Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )> }
        )> }
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>, getMember: Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { rooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, createRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getCreateRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { room: Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )> }
        )> }
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )> }
  )> }
);

export type GameLogUpdateMutationVariables = {
  where: GameLogPartial,
  entity: GameLogInput
};


export type GameLogUpdateMutation = (
  { __typename?: 'Mutation' }
  & { gameLogUpdate: Maybe<(
    { __typename?: 'GameLog' }
    & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
    & { room: Maybe<(
      { __typename?: 'Room' }
      & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
      & { roomType: Maybe<(
        { __typename?: 'RoomType' }
        & Pick<RoomType, 'id' | 'title'>
      )>, owner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, getOwner: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>, members: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>>, getMembers: Maybe<Array<Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, ticketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>>, getTicketLogs: Maybe<Array<Maybe<(
          { __typename?: 'TicketLog' }
          & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
          & { ticket: Maybe<(
            { __typename?: 'Ticket' }
            & Pick<Ticket, 'id' | 'title'>
          )> }
        )>>> }
      )>>> }
    )>, members: Maybe<Array<Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { rooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, getRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, createRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, getCreateRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>>>, getMembers: Maybe<Array<Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { rooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, getRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, createRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, getCreateRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )> }
      )>>>, tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, ticketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>>, getTicketLogs: Maybe<Array<Maybe<(
        { __typename?: 'TicketLog' }
        & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
        & { ticket: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'title'>
        )> }
      )>>> }
    )>>> }
  )> }
);

export type TicketUpdateMutationVariables = {
  where: TicketPartial,
  entity: TicketInput
};


export type TicketUpdateMutation = (
  { __typename?: 'Mutation' }
  & { ticketUpdate: Maybe<(
    { __typename?: 'Ticket' }
    & Pick<Ticket, 'id' | 'title'>
    & { logs: Maybe<Array<Maybe<(
      { __typename?: 'TicketLog' }
      & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
      & { member: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { rooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, getRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, createRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, getCreateRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          & { room: Maybe<(
            { __typename?: 'Room' }
            & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
            & { roomType: Maybe<(
              { __typename?: 'RoomType' }
              & Pick<RoomType, 'id' | 'title'>
            )> }
          )> }
        )>>> }
      )> }
    )>>>, getTicketLogs: Maybe<Array<Maybe<(
      { __typename?: 'TicketLog' }
      & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
      & { member: Maybe<(
        { __typename?: 'Member' }
        & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
        & { rooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, getRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, createRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, getCreateRooms: Maybe<Array<Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )>, gameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>>, getGameLogs: Maybe<Array<Maybe<(
            { __typename?: 'GameLog' }
            & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          )>>> }
        )>>>, tixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, getTixianLogs: Maybe<Array<Maybe<(
          { __typename?: 'TixianLog' }
          & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
        )>>>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
          & { room: Maybe<(
            { __typename?: 'Room' }
            & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
            & { roomType: Maybe<(
              { __typename?: 'RoomType' }
              & Pick<RoomType, 'id' | 'title'>
            )> }
          )> }
        )>>> }
      )> }
    )>>> }
  )> }
);

export type TicketLogUpdateMutationVariables = {
  where: TicketLogPartial,
  entity: TicketLogInput
};


export type TicketLogUpdateMutation = (
  { __typename?: 'Mutation' }
  & { ticketLogUpdate: Maybe<(
    { __typename?: 'TicketLog' }
    & Pick<TicketLog, 'relations' | 'id' | 'ticket_Id' | 'member_id' | 'createDate'>
    & { ticket: Maybe<(
      { __typename?: 'Ticket' }
      & Pick<Ticket, 'id' | 'title'>
    )>, member: Maybe<(
      { __typename?: 'Member' }
      & Pick<Member, 'relations' | 'id' | 'nickname' | 'password' | 'avatar' | 'mobile' | 'openid' | 'status' | 'fee' | 'fee2' | 'fee3' | 'createDate'>
      & { rooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, createRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, getCreateRooms: Maybe<Array<Maybe<(
        { __typename?: 'Room' }
        & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
        & { roomType: Maybe<(
          { __typename?: 'RoomType' }
          & Pick<RoomType, 'id' | 'title'>
        )>, gameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>>, getGameLogs: Maybe<Array<Maybe<(
          { __typename?: 'GameLog' }
          & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        )>>> }
      )>>>, tixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, getTixianLogs: Maybe<Array<Maybe<(
        { __typename?: 'TixianLog' }
        & Pick<TixianLog, 'relations' | 'id' | 'memberId' | 'count' | 'status' | 'createDate'>
      )>>>, gameLogs: Maybe<Array<Maybe<(
        { __typename?: 'GameLog' }
        & Pick<GameLog, 'relations' | 'id' | 'status' | 'count' | 'startTime' | 'endTime' | 'roomId' | 'memberId' | 'createDate'>
        & { room: Maybe<(
          { __typename?: 'Room' }
          & Pick<Room, 'relations' | 'id' | 'password' | 'roomTypeId' | 'status' | 'autoStart' | 'ownerId' | 'createDate'>
          & { roomType: Maybe<(
            { __typename?: 'RoomType' }
            & Pick<RoomType, 'id' | 'title'>
          )> }
        )> }
      )>>> }
    )> }
  )> }
);

export type MemberDeleteMutationVariables = {
  id: Scalars['Int']
};


export type MemberDeleteMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'memberDelete'>
);

export type RoomDeleteMutationVariables = {
  id: Scalars['Int']
};


export type RoomDeleteMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'roomDelete'>
);

export type RoomTypeDeleteMutationVariables = {
  id: Scalars['Int']
};


export type RoomTypeDeleteMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'roomTypeDelete'>
);

export type SettingDeleteMutationVariables = {
  id: Scalars['Int']
};


export type SettingDeleteMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'settingDelete'>
);

export type TixianLogDeleteMutationVariables = {
  id: Scalars['Int']
};


export type TixianLogDeleteMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'tixianLogDelete'>
);

export type GameLogDeleteMutationVariables = {
  id: Scalars['Int']
};


export type GameLogDeleteMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'gameLogDelete'>
);

export type TicketDeleteMutationVariables = {
  id: Scalars['Int']
};


export type TicketDeleteMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'ticketDelete'>
);

export type TicketLogDeleteMutationVariables = {
  id: Scalars['Int']
};


export type TicketLogDeleteMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'ticketLogDelete'>
);

export const MemberGetDocument = gql`
    query memberGet($entity: MemberInputWhere!) {
  memberGet(entity: $entity) {
    relations
    id
    nickname
    password
    avatar
    mobile
    openid
    status
    fee
    fee2
    fee3
    rooms {
      relations
      id
      password
      roomType {
        id
        title
      }
      roomTypeId
      status
      autoStart
      ownerId
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      createDate
    }
    getRooms {
      relations
      id
      password
      roomType {
        id
        title
      }
      roomTypeId
      status
      autoStart
      ownerId
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      createDate
    }
    createRooms {
      relations
      id
      password
      roomType {
        id
        title
      }
      roomTypeId
      status
      autoStart
      ownerId
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      createDate
    }
    getCreateRooms {
      relations
      id
      password
      roomType {
        id
        title
      }
      roomTypeId
      status
      autoStart
      ownerId
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      createDate
    }
    tixianLogs {
      relations
      id
      memberId
      count
      status
      createDate
    }
    getTixianLogs {
      relations
      id
      memberId
      count
      status
      createDate
    }
    gameLogs {
      relations
      id
      status
      count
      startTime
      endTime
      room {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      roomId
      memberId
      createDate
    }
    ticketLogs {
      relations
      id
      ticket {
        id
        title
      }
      ticket_Id
      member_id
      createDate
    }
    getTicketLogs {
      relations
      id
      ticket {
        id
        title
      }
      ticket_Id
      member_id
      createDate
    }
    createDate
  }
}
    `;
export type MemberGetComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MemberGetQuery, MemberGetQueryVariables>, 'query'> & ({ variables: MemberGetQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const MemberGetComponent = (props: MemberGetComponentProps) => (
      <ApolloReactComponents.Query<MemberGetQuery, MemberGetQueryVariables> query={MemberGetDocument} {...props} />
    );
    
export type MemberGetProps<TChildProps = {}> = ApolloReactHoc.DataProps<MemberGetQuery, MemberGetQueryVariables> & TChildProps;
export function withMemberGet<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MemberGetQuery,
  MemberGetQueryVariables,
  MemberGetProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, MemberGetQuery, MemberGetQueryVariables, MemberGetProps<TChildProps>>(MemberGetDocument, {
      alias: 'withMemberGet',
      ...operationOptions
    });
};
export type MemberGetQueryResult = ApolloReactCommon.QueryResult<MemberGetQuery, MemberGetQueryVariables>;
export const RoomGetDocument = gql`
    query roomGet($entity: RoomInputWhere!) {
  roomGet(entity: $entity) {
    relations
    id
    password
    roomType {
      id
      title
    }
    roomTypeId
    status
    autoStart
    owner {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    ownerId
    getOwner {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    members {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    getMembers {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    gameLogs {
      relations
      id
      status
      count
      startTime
      endTime
      roomId
      members {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      getMembers {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      memberId
      createDate
    }
    getGameLogs {
      relations
      id
      status
      count
      startTime
      endTime
      roomId
      members {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      getMembers {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      memberId
      createDate
    }
    createDate
  }
}
    `;
export type RoomGetComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<RoomGetQuery, RoomGetQueryVariables>, 'query'> & ({ variables: RoomGetQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const RoomGetComponent = (props: RoomGetComponentProps) => (
      <ApolloReactComponents.Query<RoomGetQuery, RoomGetQueryVariables> query={RoomGetDocument} {...props} />
    );
    
export type RoomGetProps<TChildProps = {}> = ApolloReactHoc.DataProps<RoomGetQuery, RoomGetQueryVariables> & TChildProps;
export function withRoomGet<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RoomGetQuery,
  RoomGetQueryVariables,
  RoomGetProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, RoomGetQuery, RoomGetQueryVariables, RoomGetProps<TChildProps>>(RoomGetDocument, {
      alias: 'withRoomGet',
      ...operationOptions
    });
};
export type RoomGetQueryResult = ApolloReactCommon.QueryResult<RoomGetQuery, RoomGetQueryVariables>;
export const RoomTypeGetDocument = gql`
    query roomTypeGet($entity: RoomTypeInputWhere!) {
  roomTypeGet(entity: $entity) {
    id
    title
    rooms {
      relations
      id
      password
      roomTypeId
      status
      autoStart
      owner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      ownerId
      getOwner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      members {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      getMembers {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        members {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        getMembers {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        members {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        getMembers {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        memberId
        createDate
      }
      createDate
    }
    getRooms {
      relations
      id
      password
      roomTypeId
      status
      autoStart
      owner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      ownerId
      getOwner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      members {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      getMembers {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        members {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        getMembers {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        members {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        getMembers {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        memberId
        createDate
      }
      createDate
    }
  }
}
    `;
export type RoomTypeGetComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<RoomTypeGetQuery, RoomTypeGetQueryVariables>, 'query'> & ({ variables: RoomTypeGetQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const RoomTypeGetComponent = (props: RoomTypeGetComponentProps) => (
      <ApolloReactComponents.Query<RoomTypeGetQuery, RoomTypeGetQueryVariables> query={RoomTypeGetDocument} {...props} />
    );
    
export type RoomTypeGetProps<TChildProps = {}> = ApolloReactHoc.DataProps<RoomTypeGetQuery, RoomTypeGetQueryVariables> & TChildProps;
export function withRoomTypeGet<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RoomTypeGetQuery,
  RoomTypeGetQueryVariables,
  RoomTypeGetProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, RoomTypeGetQuery, RoomTypeGetQueryVariables, RoomTypeGetProps<TChildProps>>(RoomTypeGetDocument, {
      alias: 'withRoomTypeGet',
      ...operationOptions
    });
};
export type RoomTypeGetQueryResult = ApolloReactCommon.QueryResult<RoomTypeGetQuery, RoomTypeGetQueryVariables>;
export const SettingGetDocument = gql`
    query settingGet($entity: SettingInputWhere!) {
  settingGet(entity: $entity) {
    id
    key
    value
  }
}
    `;
export type SettingGetComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SettingGetQuery, SettingGetQueryVariables>, 'query'> & ({ variables: SettingGetQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SettingGetComponent = (props: SettingGetComponentProps) => (
      <ApolloReactComponents.Query<SettingGetQuery, SettingGetQueryVariables> query={SettingGetDocument} {...props} />
    );
    
export type SettingGetProps<TChildProps = {}> = ApolloReactHoc.DataProps<SettingGetQuery, SettingGetQueryVariables> & TChildProps;
export function withSettingGet<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SettingGetQuery,
  SettingGetQueryVariables,
  SettingGetProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, SettingGetQuery, SettingGetQueryVariables, SettingGetProps<TChildProps>>(SettingGetDocument, {
      alias: 'withSettingGet',
      ...operationOptions
    });
};
export type SettingGetQueryResult = ApolloReactCommon.QueryResult<SettingGetQuery, SettingGetQueryVariables>;
export const TixianLogGetDocument = gql`
    query tixianLogGet($entity: TixianLogInputWhere!) {
  tixianLogGet(entity: $entity) {
    relations
    id
    member {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      rooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      createRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getCreateRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        room {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          createDate
        }
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    memberId
    getMember {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      rooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      createRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getCreateRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        room {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          createDate
        }
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    count
    status
    createDate
  }
}
    `;
export type TixianLogGetComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TixianLogGetQuery, TixianLogGetQueryVariables>, 'query'> & ({ variables: TixianLogGetQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const TixianLogGetComponent = (props: TixianLogGetComponentProps) => (
      <ApolloReactComponents.Query<TixianLogGetQuery, TixianLogGetQueryVariables> query={TixianLogGetDocument} {...props} />
    );
    
export type TixianLogGetProps<TChildProps = {}> = ApolloReactHoc.DataProps<TixianLogGetQuery, TixianLogGetQueryVariables> & TChildProps;
export function withTixianLogGet<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TixianLogGetQuery,
  TixianLogGetQueryVariables,
  TixianLogGetProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, TixianLogGetQuery, TixianLogGetQueryVariables, TixianLogGetProps<TChildProps>>(TixianLogGetDocument, {
      alias: 'withTixianLogGet',
      ...operationOptions
    });
};
export type TixianLogGetQueryResult = ApolloReactCommon.QueryResult<TixianLogGetQuery, TixianLogGetQueryVariables>;
export const GameLogGetDocument = gql`
    query gameLogGet($entity: GameLogInputWhere!) {
  gameLogGet(entity: $entity) {
    relations
    id
    status
    count
    startTime
    endTime
    room {
      relations
      id
      password
      roomType {
        id
        title
      }
      roomTypeId
      status
      autoStart
      owner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      ownerId
      getOwner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      members {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      getMembers {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      createDate
    }
    roomId
    members {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      rooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      getRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      createRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      getCreateRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    getMembers {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      rooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      getRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      createRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      getCreateRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    memberId
    createDate
  }
}
    `;
export type GameLogGetComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GameLogGetQuery, GameLogGetQueryVariables>, 'query'> & ({ variables: GameLogGetQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GameLogGetComponent = (props: GameLogGetComponentProps) => (
      <ApolloReactComponents.Query<GameLogGetQuery, GameLogGetQueryVariables> query={GameLogGetDocument} {...props} />
    );
    
export type GameLogGetProps<TChildProps = {}> = ApolloReactHoc.DataProps<GameLogGetQuery, GameLogGetQueryVariables> & TChildProps;
export function withGameLogGet<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GameLogGetQuery,
  GameLogGetQueryVariables,
  GameLogGetProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GameLogGetQuery, GameLogGetQueryVariables, GameLogGetProps<TChildProps>>(GameLogGetDocument, {
      alias: 'withGameLogGet',
      ...operationOptions
    });
};
export type GameLogGetQueryResult = ApolloReactCommon.QueryResult<GameLogGetQuery, GameLogGetQueryVariables>;
export const TicketGetDocument = gql`
    query ticketGet($entity: TicketInputWhere!) {
  ticketGet(entity: $entity) {
    id
    title
    logs {
      relations
      id
      ticket_Id
      member {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        rooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        getRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        createRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        getCreateRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          room {
            relations
            id
            password
            roomType {
              id
              title
            }
            roomTypeId
            status
            autoStart
            ownerId
            createDate
          }
          roomId
          memberId
          createDate
        }
        createDate
      }
      member_id
      createDate
    }
    getTicketLogs {
      relations
      id
      ticket_Id
      member {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        rooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        getRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        createRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        getCreateRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          room {
            relations
            id
            password
            roomType {
              id
              title
            }
            roomTypeId
            status
            autoStart
            ownerId
            createDate
          }
          roomId
          memberId
          createDate
        }
        createDate
      }
      member_id
      createDate
    }
  }
}
    `;
export type TicketGetComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TicketGetQuery, TicketGetQueryVariables>, 'query'> & ({ variables: TicketGetQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const TicketGetComponent = (props: TicketGetComponentProps) => (
      <ApolloReactComponents.Query<TicketGetQuery, TicketGetQueryVariables> query={TicketGetDocument} {...props} />
    );
    
export type TicketGetProps<TChildProps = {}> = ApolloReactHoc.DataProps<TicketGetQuery, TicketGetQueryVariables> & TChildProps;
export function withTicketGet<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TicketGetQuery,
  TicketGetQueryVariables,
  TicketGetProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, TicketGetQuery, TicketGetQueryVariables, TicketGetProps<TChildProps>>(TicketGetDocument, {
      alias: 'withTicketGet',
      ...operationOptions
    });
};
export type TicketGetQueryResult = ApolloReactCommon.QueryResult<TicketGetQuery, TicketGetQueryVariables>;
export const TicketLogGetDocument = gql`
    query ticketLogGet($entity: TicketLogInputWhere!) {
  ticketLogGet(entity: $entity) {
    relations
    id
    ticket {
      id
      title
    }
    ticket_Id
    member {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      rooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      createRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getCreateRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        room {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          createDate
        }
        roomId
        memberId
        createDate
      }
      createDate
    }
    member_id
    createDate
  }
}
    `;
export type TicketLogGetComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TicketLogGetQuery, TicketLogGetQueryVariables>, 'query'> & ({ variables: TicketLogGetQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const TicketLogGetComponent = (props: TicketLogGetComponentProps) => (
      <ApolloReactComponents.Query<TicketLogGetQuery, TicketLogGetQueryVariables> query={TicketLogGetDocument} {...props} />
    );
    
export type TicketLogGetProps<TChildProps = {}> = ApolloReactHoc.DataProps<TicketLogGetQuery, TicketLogGetQueryVariables> & TChildProps;
export function withTicketLogGet<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TicketLogGetQuery,
  TicketLogGetQueryVariables,
  TicketLogGetProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, TicketLogGetQuery, TicketLogGetQueryVariables, TicketLogGetProps<TChildProps>>(TicketLogGetDocument, {
      alias: 'withTicketLogGet',
      ...operationOptions
    });
};
export type TicketLogGetQueryResult = ApolloReactCommon.QueryResult<TicketLogGetQuery, TicketLogGetQueryVariables>;
export const MemberFindDocument = gql`
    query memberFind($entity: MemberInputWhere!, $order: MemberInputOrder!, $limit: PageLimitInput) {
  memberFind(entity: $entity, order: $order, limit: $limit) {
    relations
    id
    nickname
    password
    avatar
    mobile
    openid
    status
    fee
    fee2
    fee3
    rooms {
      relations
      id
      password
      roomType {
        id
        title
      }
      roomTypeId
      status
      autoStart
      ownerId
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      createDate
    }
    getRooms {
      relations
      id
      password
      roomType {
        id
        title
      }
      roomTypeId
      status
      autoStart
      ownerId
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      createDate
    }
    createRooms {
      relations
      id
      password
      roomType {
        id
        title
      }
      roomTypeId
      status
      autoStart
      ownerId
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      createDate
    }
    getCreateRooms {
      relations
      id
      password
      roomType {
        id
        title
      }
      roomTypeId
      status
      autoStart
      ownerId
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      createDate
    }
    tixianLogs {
      relations
      id
      memberId
      count
      status
      createDate
    }
    getTixianLogs {
      relations
      id
      memberId
      count
      status
      createDate
    }
    gameLogs {
      relations
      id
      status
      count
      startTime
      endTime
      room {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      roomId
      memberId
      createDate
    }
    ticketLogs {
      relations
      id
      ticket {
        id
        title
      }
      ticket_Id
      member_id
      createDate
    }
    getTicketLogs {
      relations
      id
      ticket {
        id
        title
      }
      ticket_Id
      member_id
      createDate
    }
    createDate
  }
}
    `;
export type MemberFindComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MemberFindQuery, MemberFindQueryVariables>, 'query'> & ({ variables: MemberFindQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const MemberFindComponent = (props: MemberFindComponentProps) => (
      <ApolloReactComponents.Query<MemberFindQuery, MemberFindQueryVariables> query={MemberFindDocument} {...props} />
    );
    
export type MemberFindProps<TChildProps = {}> = ApolloReactHoc.DataProps<MemberFindQuery, MemberFindQueryVariables> & TChildProps;
export function withMemberFind<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MemberFindQuery,
  MemberFindQueryVariables,
  MemberFindProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, MemberFindQuery, MemberFindQueryVariables, MemberFindProps<TChildProps>>(MemberFindDocument, {
      alias: 'withMemberFind',
      ...operationOptions
    });
};
export type MemberFindQueryResult = ApolloReactCommon.QueryResult<MemberFindQuery, MemberFindQueryVariables>;
export const RoomFindDocument = gql`
    query roomFind($entity: RoomInputWhere!, $order: RoomInputOrder!, $limit: PageLimitInput) {
  roomFind(entity: $entity, order: $order, limit: $limit) {
    relations
    id
    password
    roomType {
      id
      title
    }
    roomTypeId
    status
    autoStart
    owner {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    ownerId
    getOwner {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    members {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    getMembers {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    gameLogs {
      relations
      id
      status
      count
      startTime
      endTime
      roomId
      members {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      getMembers {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      memberId
      createDate
    }
    getGameLogs {
      relations
      id
      status
      count
      startTime
      endTime
      roomId
      members {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      getMembers {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      memberId
      createDate
    }
    createDate
  }
}
    `;
export type RoomFindComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<RoomFindQuery, RoomFindQueryVariables>, 'query'> & ({ variables: RoomFindQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const RoomFindComponent = (props: RoomFindComponentProps) => (
      <ApolloReactComponents.Query<RoomFindQuery, RoomFindQueryVariables> query={RoomFindDocument} {...props} />
    );
    
export type RoomFindProps<TChildProps = {}> = ApolloReactHoc.DataProps<RoomFindQuery, RoomFindQueryVariables> & TChildProps;
export function withRoomFind<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RoomFindQuery,
  RoomFindQueryVariables,
  RoomFindProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, RoomFindQuery, RoomFindQueryVariables, RoomFindProps<TChildProps>>(RoomFindDocument, {
      alias: 'withRoomFind',
      ...operationOptions
    });
};
export type RoomFindQueryResult = ApolloReactCommon.QueryResult<RoomFindQuery, RoomFindQueryVariables>;
export const RoomTypeFindDocument = gql`
    query roomTypeFind($entity: RoomTypeInputWhere!, $order: RoomTypeInputOrder!, $limit: PageLimitInput) {
  roomTypeFind(entity: $entity, order: $order, limit: $limit) {
    id
    title
    rooms {
      relations
      id
      password
      roomTypeId
      status
      autoStart
      owner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      ownerId
      getOwner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      members {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      getMembers {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        members {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        getMembers {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        members {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        getMembers {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        memberId
        createDate
      }
      createDate
    }
    getRooms {
      relations
      id
      password
      roomTypeId
      status
      autoStart
      owner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      ownerId
      getOwner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      members {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      getMembers {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        members {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        getMembers {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        members {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        getMembers {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        memberId
        createDate
      }
      createDate
    }
  }
}
    `;
export type RoomTypeFindComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<RoomTypeFindQuery, RoomTypeFindQueryVariables>, 'query'> & ({ variables: RoomTypeFindQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const RoomTypeFindComponent = (props: RoomTypeFindComponentProps) => (
      <ApolloReactComponents.Query<RoomTypeFindQuery, RoomTypeFindQueryVariables> query={RoomTypeFindDocument} {...props} />
    );
    
export type RoomTypeFindProps<TChildProps = {}> = ApolloReactHoc.DataProps<RoomTypeFindQuery, RoomTypeFindQueryVariables> & TChildProps;
export function withRoomTypeFind<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RoomTypeFindQuery,
  RoomTypeFindQueryVariables,
  RoomTypeFindProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, RoomTypeFindQuery, RoomTypeFindQueryVariables, RoomTypeFindProps<TChildProps>>(RoomTypeFindDocument, {
      alias: 'withRoomTypeFind',
      ...operationOptions
    });
};
export type RoomTypeFindQueryResult = ApolloReactCommon.QueryResult<RoomTypeFindQuery, RoomTypeFindQueryVariables>;
export const SettingFindDocument = gql`
    query settingFind($entity: SettingInputWhere!, $order: SettingInputOrder!, $limit: PageLimitInput) {
  settingFind(entity: $entity, order: $order, limit: $limit) {
    id
    key
    value
  }
}
    `;
export type SettingFindComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SettingFindQuery, SettingFindQueryVariables>, 'query'> & ({ variables: SettingFindQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SettingFindComponent = (props: SettingFindComponentProps) => (
      <ApolloReactComponents.Query<SettingFindQuery, SettingFindQueryVariables> query={SettingFindDocument} {...props} />
    );
    
export type SettingFindProps<TChildProps = {}> = ApolloReactHoc.DataProps<SettingFindQuery, SettingFindQueryVariables> & TChildProps;
export function withSettingFind<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SettingFindQuery,
  SettingFindQueryVariables,
  SettingFindProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, SettingFindQuery, SettingFindQueryVariables, SettingFindProps<TChildProps>>(SettingFindDocument, {
      alias: 'withSettingFind',
      ...operationOptions
    });
};
export type SettingFindQueryResult = ApolloReactCommon.QueryResult<SettingFindQuery, SettingFindQueryVariables>;
export const TixianLogFindDocument = gql`
    query tixianLogFind($entity: TixianLogInputWhere!, $order: TixianLogInputOrder!, $limit: PageLimitInput) {
  tixianLogFind(entity: $entity, order: $order, limit: $limit) {
    relations
    id
    member {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      rooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      createRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getCreateRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        room {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          createDate
        }
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    memberId
    getMember {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      rooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      createRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getCreateRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        room {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          createDate
        }
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    count
    status
    createDate
  }
}
    `;
export type TixianLogFindComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TixianLogFindQuery, TixianLogFindQueryVariables>, 'query'> & ({ variables: TixianLogFindQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const TixianLogFindComponent = (props: TixianLogFindComponentProps) => (
      <ApolloReactComponents.Query<TixianLogFindQuery, TixianLogFindQueryVariables> query={TixianLogFindDocument} {...props} />
    );
    
export type TixianLogFindProps<TChildProps = {}> = ApolloReactHoc.DataProps<TixianLogFindQuery, TixianLogFindQueryVariables> & TChildProps;
export function withTixianLogFind<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TixianLogFindQuery,
  TixianLogFindQueryVariables,
  TixianLogFindProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, TixianLogFindQuery, TixianLogFindQueryVariables, TixianLogFindProps<TChildProps>>(TixianLogFindDocument, {
      alias: 'withTixianLogFind',
      ...operationOptions
    });
};
export type TixianLogFindQueryResult = ApolloReactCommon.QueryResult<TixianLogFindQuery, TixianLogFindQueryVariables>;
export const GameLogFindDocument = gql`
    query gameLogFind($entity: GameLogInputWhere!, $order: GameLogInputOrder!, $limit: PageLimitInput) {
  gameLogFind(entity: $entity, order: $order, limit: $limit) {
    relations
    id
    status
    count
    startTime
    endTime
    room {
      relations
      id
      password
      roomType {
        id
        title
      }
      roomTypeId
      status
      autoStart
      owner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      ownerId
      getOwner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      members {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      getMembers {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      createDate
    }
    roomId
    members {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      rooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      getRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      createRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      getCreateRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    getMembers {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      rooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      getRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      createRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      getCreateRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    memberId
    createDate
  }
}
    `;
export type GameLogFindComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GameLogFindQuery, GameLogFindQueryVariables>, 'query'> & ({ variables: GameLogFindQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GameLogFindComponent = (props: GameLogFindComponentProps) => (
      <ApolloReactComponents.Query<GameLogFindQuery, GameLogFindQueryVariables> query={GameLogFindDocument} {...props} />
    );
    
export type GameLogFindProps<TChildProps = {}> = ApolloReactHoc.DataProps<GameLogFindQuery, GameLogFindQueryVariables> & TChildProps;
export function withGameLogFind<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GameLogFindQuery,
  GameLogFindQueryVariables,
  GameLogFindProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GameLogFindQuery, GameLogFindQueryVariables, GameLogFindProps<TChildProps>>(GameLogFindDocument, {
      alias: 'withGameLogFind',
      ...operationOptions
    });
};
export type GameLogFindQueryResult = ApolloReactCommon.QueryResult<GameLogFindQuery, GameLogFindQueryVariables>;
export const TicketFindDocument = gql`
    query ticketFind($entity: TicketInputWhere!, $order: TicketInputOrder!, $limit: PageLimitInput) {
  ticketFind(entity: $entity, order: $order, limit: $limit) {
    id
    title
    logs {
      relations
      id
      ticket_Id
      member {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        rooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        getRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        createRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        getCreateRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          room {
            relations
            id
            password
            roomType {
              id
              title
            }
            roomTypeId
            status
            autoStart
            ownerId
            createDate
          }
          roomId
          memberId
          createDate
        }
        createDate
      }
      member_id
      createDate
    }
    getTicketLogs {
      relations
      id
      ticket_Id
      member {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        rooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        getRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        createRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        getCreateRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          room {
            relations
            id
            password
            roomType {
              id
              title
            }
            roomTypeId
            status
            autoStart
            ownerId
            createDate
          }
          roomId
          memberId
          createDate
        }
        createDate
      }
      member_id
      createDate
    }
  }
}
    `;
export type TicketFindComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TicketFindQuery, TicketFindQueryVariables>, 'query'> & ({ variables: TicketFindQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const TicketFindComponent = (props: TicketFindComponentProps) => (
      <ApolloReactComponents.Query<TicketFindQuery, TicketFindQueryVariables> query={TicketFindDocument} {...props} />
    );
    
export type TicketFindProps<TChildProps = {}> = ApolloReactHoc.DataProps<TicketFindQuery, TicketFindQueryVariables> & TChildProps;
export function withTicketFind<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TicketFindQuery,
  TicketFindQueryVariables,
  TicketFindProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, TicketFindQuery, TicketFindQueryVariables, TicketFindProps<TChildProps>>(TicketFindDocument, {
      alias: 'withTicketFind',
      ...operationOptions
    });
};
export type TicketFindQueryResult = ApolloReactCommon.QueryResult<TicketFindQuery, TicketFindQueryVariables>;
export const TicketLogFindDocument = gql`
    query ticketLogFind($entity: TicketLogInputWhere!, $order: TicketLogInputOrder!, $limit: PageLimitInput) {
  ticketLogFind(entity: $entity, order: $order, limit: $limit) {
    relations
    id
    ticket {
      id
      title
    }
    ticket_Id
    member {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      rooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      createRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getCreateRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        room {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          createDate
        }
        roomId
        memberId
        createDate
      }
      createDate
    }
    member_id
    createDate
  }
}
    `;
export type TicketLogFindComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TicketLogFindQuery, TicketLogFindQueryVariables>, 'query'> & ({ variables: TicketLogFindQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const TicketLogFindComponent = (props: TicketLogFindComponentProps) => (
      <ApolloReactComponents.Query<TicketLogFindQuery, TicketLogFindQueryVariables> query={TicketLogFindDocument} {...props} />
    );
    
export type TicketLogFindProps<TChildProps = {}> = ApolloReactHoc.DataProps<TicketLogFindQuery, TicketLogFindQueryVariables> & TChildProps;
export function withTicketLogFind<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TicketLogFindQuery,
  TicketLogFindQueryVariables,
  TicketLogFindProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, TicketLogFindQuery, TicketLogFindQueryVariables, TicketLogFindProps<TChildProps>>(TicketLogFindDocument, {
      alias: 'withTicketLogFind',
      ...operationOptions
    });
};
export type TicketLogFindQueryResult = ApolloReactCommon.QueryResult<TicketLogFindQuery, TicketLogFindQueryVariables>;
export const MemberCountDocument = gql`
    query memberCount($where: MemberInputWhere!) {
  memberCount(where: $where)
}
    `;
export type MemberCountComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MemberCountQuery, MemberCountQueryVariables>, 'query'> & ({ variables: MemberCountQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const MemberCountComponent = (props: MemberCountComponentProps) => (
      <ApolloReactComponents.Query<MemberCountQuery, MemberCountQueryVariables> query={MemberCountDocument} {...props} />
    );
    
export type MemberCountProps<TChildProps = {}> = ApolloReactHoc.DataProps<MemberCountQuery, MemberCountQueryVariables> & TChildProps;
export function withMemberCount<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MemberCountQuery,
  MemberCountQueryVariables,
  MemberCountProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, MemberCountQuery, MemberCountQueryVariables, MemberCountProps<TChildProps>>(MemberCountDocument, {
      alias: 'withMemberCount',
      ...operationOptions
    });
};
export type MemberCountQueryResult = ApolloReactCommon.QueryResult<MemberCountQuery, MemberCountQueryVariables>;
export const RoomCountDocument = gql`
    query roomCount($where: RoomInputWhere!) {
  roomCount(where: $where)
}
    `;
export type RoomCountComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<RoomCountQuery, RoomCountQueryVariables>, 'query'> & ({ variables: RoomCountQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const RoomCountComponent = (props: RoomCountComponentProps) => (
      <ApolloReactComponents.Query<RoomCountQuery, RoomCountQueryVariables> query={RoomCountDocument} {...props} />
    );
    
export type RoomCountProps<TChildProps = {}> = ApolloReactHoc.DataProps<RoomCountQuery, RoomCountQueryVariables> & TChildProps;
export function withRoomCount<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RoomCountQuery,
  RoomCountQueryVariables,
  RoomCountProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, RoomCountQuery, RoomCountQueryVariables, RoomCountProps<TChildProps>>(RoomCountDocument, {
      alias: 'withRoomCount',
      ...operationOptions
    });
};
export type RoomCountQueryResult = ApolloReactCommon.QueryResult<RoomCountQuery, RoomCountQueryVariables>;
export const RoomTypeCountDocument = gql`
    query roomTypeCount($where: RoomTypeInputWhere!) {
  roomTypeCount(where: $where)
}
    `;
export type RoomTypeCountComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<RoomTypeCountQuery, RoomTypeCountQueryVariables>, 'query'> & ({ variables: RoomTypeCountQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const RoomTypeCountComponent = (props: RoomTypeCountComponentProps) => (
      <ApolloReactComponents.Query<RoomTypeCountQuery, RoomTypeCountQueryVariables> query={RoomTypeCountDocument} {...props} />
    );
    
export type RoomTypeCountProps<TChildProps = {}> = ApolloReactHoc.DataProps<RoomTypeCountQuery, RoomTypeCountQueryVariables> & TChildProps;
export function withRoomTypeCount<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RoomTypeCountQuery,
  RoomTypeCountQueryVariables,
  RoomTypeCountProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, RoomTypeCountQuery, RoomTypeCountQueryVariables, RoomTypeCountProps<TChildProps>>(RoomTypeCountDocument, {
      alias: 'withRoomTypeCount',
      ...operationOptions
    });
};
export type RoomTypeCountQueryResult = ApolloReactCommon.QueryResult<RoomTypeCountQuery, RoomTypeCountQueryVariables>;
export const SettingCountDocument = gql`
    query settingCount($where: SettingInputWhere!) {
  settingCount(where: $where)
}
    `;
export type SettingCountComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SettingCountQuery, SettingCountQueryVariables>, 'query'> & ({ variables: SettingCountQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const SettingCountComponent = (props: SettingCountComponentProps) => (
      <ApolloReactComponents.Query<SettingCountQuery, SettingCountQueryVariables> query={SettingCountDocument} {...props} />
    );
    
export type SettingCountProps<TChildProps = {}> = ApolloReactHoc.DataProps<SettingCountQuery, SettingCountQueryVariables> & TChildProps;
export function withSettingCount<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SettingCountQuery,
  SettingCountQueryVariables,
  SettingCountProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, SettingCountQuery, SettingCountQueryVariables, SettingCountProps<TChildProps>>(SettingCountDocument, {
      alias: 'withSettingCount',
      ...operationOptions
    });
};
export type SettingCountQueryResult = ApolloReactCommon.QueryResult<SettingCountQuery, SettingCountQueryVariables>;
export const TixianLogCountDocument = gql`
    query tixianLogCount($where: TixianLogInputWhere!) {
  tixianLogCount(where: $where)
}
    `;
export type TixianLogCountComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TixianLogCountQuery, TixianLogCountQueryVariables>, 'query'> & ({ variables: TixianLogCountQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const TixianLogCountComponent = (props: TixianLogCountComponentProps) => (
      <ApolloReactComponents.Query<TixianLogCountQuery, TixianLogCountQueryVariables> query={TixianLogCountDocument} {...props} />
    );
    
export type TixianLogCountProps<TChildProps = {}> = ApolloReactHoc.DataProps<TixianLogCountQuery, TixianLogCountQueryVariables> & TChildProps;
export function withTixianLogCount<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TixianLogCountQuery,
  TixianLogCountQueryVariables,
  TixianLogCountProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, TixianLogCountQuery, TixianLogCountQueryVariables, TixianLogCountProps<TChildProps>>(TixianLogCountDocument, {
      alias: 'withTixianLogCount',
      ...operationOptions
    });
};
export type TixianLogCountQueryResult = ApolloReactCommon.QueryResult<TixianLogCountQuery, TixianLogCountQueryVariables>;
export const GameLogCountDocument = gql`
    query gameLogCount($where: GameLogInputWhere!) {
  gameLogCount(where: $where)
}
    `;
export type GameLogCountComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GameLogCountQuery, GameLogCountQueryVariables>, 'query'> & ({ variables: GameLogCountQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GameLogCountComponent = (props: GameLogCountComponentProps) => (
      <ApolloReactComponents.Query<GameLogCountQuery, GameLogCountQueryVariables> query={GameLogCountDocument} {...props} />
    );
    
export type GameLogCountProps<TChildProps = {}> = ApolloReactHoc.DataProps<GameLogCountQuery, GameLogCountQueryVariables> & TChildProps;
export function withGameLogCount<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GameLogCountQuery,
  GameLogCountQueryVariables,
  GameLogCountProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GameLogCountQuery, GameLogCountQueryVariables, GameLogCountProps<TChildProps>>(GameLogCountDocument, {
      alias: 'withGameLogCount',
      ...operationOptions
    });
};
export type GameLogCountQueryResult = ApolloReactCommon.QueryResult<GameLogCountQuery, GameLogCountQueryVariables>;
export const TicketCountDocument = gql`
    query ticketCount($where: TicketInputWhere!) {
  ticketCount(where: $where)
}
    `;
export type TicketCountComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TicketCountQuery, TicketCountQueryVariables>, 'query'> & ({ variables: TicketCountQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const TicketCountComponent = (props: TicketCountComponentProps) => (
      <ApolloReactComponents.Query<TicketCountQuery, TicketCountQueryVariables> query={TicketCountDocument} {...props} />
    );
    
export type TicketCountProps<TChildProps = {}> = ApolloReactHoc.DataProps<TicketCountQuery, TicketCountQueryVariables> & TChildProps;
export function withTicketCount<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TicketCountQuery,
  TicketCountQueryVariables,
  TicketCountProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, TicketCountQuery, TicketCountQueryVariables, TicketCountProps<TChildProps>>(TicketCountDocument, {
      alias: 'withTicketCount',
      ...operationOptions
    });
};
export type TicketCountQueryResult = ApolloReactCommon.QueryResult<TicketCountQuery, TicketCountQueryVariables>;
export const TicketLogCountDocument = gql`
    query ticketLogCount($where: TicketLogInputWhere!) {
  ticketLogCount(where: $where)
}
    `;
export type TicketLogCountComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TicketLogCountQuery, TicketLogCountQueryVariables>, 'query'> & ({ variables: TicketLogCountQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const TicketLogCountComponent = (props: TicketLogCountComponentProps) => (
      <ApolloReactComponents.Query<TicketLogCountQuery, TicketLogCountQueryVariables> query={TicketLogCountDocument} {...props} />
    );
    
export type TicketLogCountProps<TChildProps = {}> = ApolloReactHoc.DataProps<TicketLogCountQuery, TicketLogCountQueryVariables> & TChildProps;
export function withTicketLogCount<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TicketLogCountQuery,
  TicketLogCountQueryVariables,
  TicketLogCountProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, TicketLogCountQuery, TicketLogCountQueryVariables, TicketLogCountProps<TChildProps>>(TicketLogCountDocument, {
      alias: 'withTicketLogCount',
      ...operationOptions
    });
};
export type TicketLogCountQueryResult = ApolloReactCommon.QueryResult<TicketLogCountQuery, TicketLogCountQueryVariables>;
export const MemberSaveDocument = gql`
    mutation memberSave($entity: MemberInput!) {
  memberSave(entity: $entity) {
    relations
    id
    nickname
    password
    avatar
    mobile
    openid
    status
    fee
    fee2
    fee3
    rooms {
      relations
      id
      password
      roomType {
        id
        title
      }
      roomTypeId
      status
      autoStart
      ownerId
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      createDate
    }
    getRooms {
      relations
      id
      password
      roomType {
        id
        title
      }
      roomTypeId
      status
      autoStart
      ownerId
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      createDate
    }
    createRooms {
      relations
      id
      password
      roomType {
        id
        title
      }
      roomTypeId
      status
      autoStart
      ownerId
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      createDate
    }
    getCreateRooms {
      relations
      id
      password
      roomType {
        id
        title
      }
      roomTypeId
      status
      autoStart
      ownerId
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      createDate
    }
    tixianLogs {
      relations
      id
      memberId
      count
      status
      createDate
    }
    getTixianLogs {
      relations
      id
      memberId
      count
      status
      createDate
    }
    gameLogs {
      relations
      id
      status
      count
      startTime
      endTime
      room {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      roomId
      memberId
      createDate
    }
    ticketLogs {
      relations
      id
      ticket {
        id
        title
      }
      ticket_Id
      member_id
      createDate
    }
    getTicketLogs {
      relations
      id
      ticket {
        id
        title
      }
      ticket_Id
      member_id
      createDate
    }
    createDate
  }
}
    `;
export type MemberSaveMutationFn = ApolloReactCommon.MutationFunction<MemberSaveMutation, MemberSaveMutationVariables>;
export type MemberSaveComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<MemberSaveMutation, MemberSaveMutationVariables>, 'mutation'>;

    export const MemberSaveComponent = (props: MemberSaveComponentProps) => (
      <ApolloReactComponents.Mutation<MemberSaveMutation, MemberSaveMutationVariables> mutation={MemberSaveDocument} {...props} />
    );
    
export type MemberSaveProps<TChildProps = {}> = ApolloReactHoc.MutateProps<MemberSaveMutation, MemberSaveMutationVariables> & TChildProps;
export function withMemberSave<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MemberSaveMutation,
  MemberSaveMutationVariables,
  MemberSaveProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, MemberSaveMutation, MemberSaveMutationVariables, MemberSaveProps<TChildProps>>(MemberSaveDocument, {
      alias: 'withMemberSave',
      ...operationOptions
    });
};
export type MemberSaveMutationResult = ApolloReactCommon.MutationResult<MemberSaveMutation>;
export type MemberSaveMutationOptions = ApolloReactCommon.BaseMutationOptions<MemberSaveMutation, MemberSaveMutationVariables>;
export const RoomSaveDocument = gql`
    mutation roomSave($entity: RoomInput!) {
  roomSave(entity: $entity) {
    relations
    id
    password
    roomType {
      id
      title
    }
    roomTypeId
    status
    autoStart
    owner {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    ownerId
    getOwner {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    members {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    getMembers {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    gameLogs {
      relations
      id
      status
      count
      startTime
      endTime
      roomId
      members {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      getMembers {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      memberId
      createDate
    }
    getGameLogs {
      relations
      id
      status
      count
      startTime
      endTime
      roomId
      members {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      getMembers {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      memberId
      createDate
    }
    createDate
  }
}
    `;
export type RoomSaveMutationFn = ApolloReactCommon.MutationFunction<RoomSaveMutation, RoomSaveMutationVariables>;
export type RoomSaveComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RoomSaveMutation, RoomSaveMutationVariables>, 'mutation'>;

    export const RoomSaveComponent = (props: RoomSaveComponentProps) => (
      <ApolloReactComponents.Mutation<RoomSaveMutation, RoomSaveMutationVariables> mutation={RoomSaveDocument} {...props} />
    );
    
export type RoomSaveProps<TChildProps = {}> = ApolloReactHoc.MutateProps<RoomSaveMutation, RoomSaveMutationVariables> & TChildProps;
export function withRoomSave<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RoomSaveMutation,
  RoomSaveMutationVariables,
  RoomSaveProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, RoomSaveMutation, RoomSaveMutationVariables, RoomSaveProps<TChildProps>>(RoomSaveDocument, {
      alias: 'withRoomSave',
      ...operationOptions
    });
};
export type RoomSaveMutationResult = ApolloReactCommon.MutationResult<RoomSaveMutation>;
export type RoomSaveMutationOptions = ApolloReactCommon.BaseMutationOptions<RoomSaveMutation, RoomSaveMutationVariables>;
export const RoomTypeSaveDocument = gql`
    mutation roomTypeSave($entity: RoomTypeInput!) {
  roomTypeSave(entity: $entity) {
    id
    title
    rooms {
      relations
      id
      password
      roomTypeId
      status
      autoStart
      owner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      ownerId
      getOwner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      members {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      getMembers {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        members {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        getMembers {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        members {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        getMembers {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        memberId
        createDate
      }
      createDate
    }
    getRooms {
      relations
      id
      password
      roomTypeId
      status
      autoStart
      owner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      ownerId
      getOwner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      members {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      getMembers {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        members {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        getMembers {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        members {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        getMembers {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        memberId
        createDate
      }
      createDate
    }
  }
}
    `;
export type RoomTypeSaveMutationFn = ApolloReactCommon.MutationFunction<RoomTypeSaveMutation, RoomTypeSaveMutationVariables>;
export type RoomTypeSaveComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RoomTypeSaveMutation, RoomTypeSaveMutationVariables>, 'mutation'>;

    export const RoomTypeSaveComponent = (props: RoomTypeSaveComponentProps) => (
      <ApolloReactComponents.Mutation<RoomTypeSaveMutation, RoomTypeSaveMutationVariables> mutation={RoomTypeSaveDocument} {...props} />
    );
    
export type RoomTypeSaveProps<TChildProps = {}> = ApolloReactHoc.MutateProps<RoomTypeSaveMutation, RoomTypeSaveMutationVariables> & TChildProps;
export function withRoomTypeSave<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RoomTypeSaveMutation,
  RoomTypeSaveMutationVariables,
  RoomTypeSaveProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, RoomTypeSaveMutation, RoomTypeSaveMutationVariables, RoomTypeSaveProps<TChildProps>>(RoomTypeSaveDocument, {
      alias: 'withRoomTypeSave',
      ...operationOptions
    });
};
export type RoomTypeSaveMutationResult = ApolloReactCommon.MutationResult<RoomTypeSaveMutation>;
export type RoomTypeSaveMutationOptions = ApolloReactCommon.BaseMutationOptions<RoomTypeSaveMutation, RoomTypeSaveMutationVariables>;
export const SettingSaveDocument = gql`
    mutation settingSave($entity: SettingInput!) {
  settingSave(entity: $entity) {
    id
    key
    value
  }
}
    `;
export type SettingSaveMutationFn = ApolloReactCommon.MutationFunction<SettingSaveMutation, SettingSaveMutationVariables>;
export type SettingSaveComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SettingSaveMutation, SettingSaveMutationVariables>, 'mutation'>;

    export const SettingSaveComponent = (props: SettingSaveComponentProps) => (
      <ApolloReactComponents.Mutation<SettingSaveMutation, SettingSaveMutationVariables> mutation={SettingSaveDocument} {...props} />
    );
    
export type SettingSaveProps<TChildProps = {}> = ApolloReactHoc.MutateProps<SettingSaveMutation, SettingSaveMutationVariables> & TChildProps;
export function withSettingSave<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SettingSaveMutation,
  SettingSaveMutationVariables,
  SettingSaveProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, SettingSaveMutation, SettingSaveMutationVariables, SettingSaveProps<TChildProps>>(SettingSaveDocument, {
      alias: 'withSettingSave',
      ...operationOptions
    });
};
export type SettingSaveMutationResult = ApolloReactCommon.MutationResult<SettingSaveMutation>;
export type SettingSaveMutationOptions = ApolloReactCommon.BaseMutationOptions<SettingSaveMutation, SettingSaveMutationVariables>;
export const TixianLogSaveDocument = gql`
    mutation tixianLogSave($entity: TixianLogInput!) {
  tixianLogSave(entity: $entity) {
    relations
    id
    member {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      rooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      createRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getCreateRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        room {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          createDate
        }
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    memberId
    getMember {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      rooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      createRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getCreateRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        room {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          createDate
        }
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    count
    status
    createDate
  }
}
    `;
export type TixianLogSaveMutationFn = ApolloReactCommon.MutationFunction<TixianLogSaveMutation, TixianLogSaveMutationVariables>;
export type TixianLogSaveComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<TixianLogSaveMutation, TixianLogSaveMutationVariables>, 'mutation'>;

    export const TixianLogSaveComponent = (props: TixianLogSaveComponentProps) => (
      <ApolloReactComponents.Mutation<TixianLogSaveMutation, TixianLogSaveMutationVariables> mutation={TixianLogSaveDocument} {...props} />
    );
    
export type TixianLogSaveProps<TChildProps = {}> = ApolloReactHoc.MutateProps<TixianLogSaveMutation, TixianLogSaveMutationVariables> & TChildProps;
export function withTixianLogSave<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TixianLogSaveMutation,
  TixianLogSaveMutationVariables,
  TixianLogSaveProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, TixianLogSaveMutation, TixianLogSaveMutationVariables, TixianLogSaveProps<TChildProps>>(TixianLogSaveDocument, {
      alias: 'withTixianLogSave',
      ...operationOptions
    });
};
export type TixianLogSaveMutationResult = ApolloReactCommon.MutationResult<TixianLogSaveMutation>;
export type TixianLogSaveMutationOptions = ApolloReactCommon.BaseMutationOptions<TixianLogSaveMutation, TixianLogSaveMutationVariables>;
export const GameLogSaveDocument = gql`
    mutation gameLogSave($entity: GameLogInput!) {
  gameLogSave(entity: $entity) {
    relations
    id
    status
    count
    startTime
    endTime
    room {
      relations
      id
      password
      roomType {
        id
        title
      }
      roomTypeId
      status
      autoStart
      owner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      ownerId
      getOwner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      members {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      getMembers {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      createDate
    }
    roomId
    members {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      rooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      getRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      createRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      getCreateRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    getMembers {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      rooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      getRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      createRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      getCreateRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    memberId
    createDate
  }
}
    `;
export type GameLogSaveMutationFn = ApolloReactCommon.MutationFunction<GameLogSaveMutation, GameLogSaveMutationVariables>;
export type GameLogSaveComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<GameLogSaveMutation, GameLogSaveMutationVariables>, 'mutation'>;

    export const GameLogSaveComponent = (props: GameLogSaveComponentProps) => (
      <ApolloReactComponents.Mutation<GameLogSaveMutation, GameLogSaveMutationVariables> mutation={GameLogSaveDocument} {...props} />
    );
    
export type GameLogSaveProps<TChildProps = {}> = ApolloReactHoc.MutateProps<GameLogSaveMutation, GameLogSaveMutationVariables> & TChildProps;
export function withGameLogSave<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GameLogSaveMutation,
  GameLogSaveMutationVariables,
  GameLogSaveProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, GameLogSaveMutation, GameLogSaveMutationVariables, GameLogSaveProps<TChildProps>>(GameLogSaveDocument, {
      alias: 'withGameLogSave',
      ...operationOptions
    });
};
export type GameLogSaveMutationResult = ApolloReactCommon.MutationResult<GameLogSaveMutation>;
export type GameLogSaveMutationOptions = ApolloReactCommon.BaseMutationOptions<GameLogSaveMutation, GameLogSaveMutationVariables>;
export const TicketSaveDocument = gql`
    mutation ticketSave($entity: TicketInput!) {
  ticketSave(entity: $entity) {
    id
    title
    logs {
      relations
      id
      ticket_Id
      member {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        rooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        getRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        createRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        getCreateRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          room {
            relations
            id
            password
            roomType {
              id
              title
            }
            roomTypeId
            status
            autoStart
            ownerId
            createDate
          }
          roomId
          memberId
          createDate
        }
        createDate
      }
      member_id
      createDate
    }
    getTicketLogs {
      relations
      id
      ticket_Id
      member {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        rooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        getRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        createRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        getCreateRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          room {
            relations
            id
            password
            roomType {
              id
              title
            }
            roomTypeId
            status
            autoStart
            ownerId
            createDate
          }
          roomId
          memberId
          createDate
        }
        createDate
      }
      member_id
      createDate
    }
  }
}
    `;
export type TicketSaveMutationFn = ApolloReactCommon.MutationFunction<TicketSaveMutation, TicketSaveMutationVariables>;
export type TicketSaveComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<TicketSaveMutation, TicketSaveMutationVariables>, 'mutation'>;

    export const TicketSaveComponent = (props: TicketSaveComponentProps) => (
      <ApolloReactComponents.Mutation<TicketSaveMutation, TicketSaveMutationVariables> mutation={TicketSaveDocument} {...props} />
    );
    
export type TicketSaveProps<TChildProps = {}> = ApolloReactHoc.MutateProps<TicketSaveMutation, TicketSaveMutationVariables> & TChildProps;
export function withTicketSave<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TicketSaveMutation,
  TicketSaveMutationVariables,
  TicketSaveProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, TicketSaveMutation, TicketSaveMutationVariables, TicketSaveProps<TChildProps>>(TicketSaveDocument, {
      alias: 'withTicketSave',
      ...operationOptions
    });
};
export type TicketSaveMutationResult = ApolloReactCommon.MutationResult<TicketSaveMutation>;
export type TicketSaveMutationOptions = ApolloReactCommon.BaseMutationOptions<TicketSaveMutation, TicketSaveMutationVariables>;
export const TicketLogSaveDocument = gql`
    mutation ticketLogSave($entity: TicketLogInput!) {
  ticketLogSave(entity: $entity) {
    relations
    id
    ticket {
      id
      title
    }
    ticket_Id
    member {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      rooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      createRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getCreateRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        room {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          createDate
        }
        roomId
        memberId
        createDate
      }
      createDate
    }
    member_id
    createDate
  }
}
    `;
export type TicketLogSaveMutationFn = ApolloReactCommon.MutationFunction<TicketLogSaveMutation, TicketLogSaveMutationVariables>;
export type TicketLogSaveComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<TicketLogSaveMutation, TicketLogSaveMutationVariables>, 'mutation'>;

    export const TicketLogSaveComponent = (props: TicketLogSaveComponentProps) => (
      <ApolloReactComponents.Mutation<TicketLogSaveMutation, TicketLogSaveMutationVariables> mutation={TicketLogSaveDocument} {...props} />
    );
    
export type TicketLogSaveProps<TChildProps = {}> = ApolloReactHoc.MutateProps<TicketLogSaveMutation, TicketLogSaveMutationVariables> & TChildProps;
export function withTicketLogSave<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TicketLogSaveMutation,
  TicketLogSaveMutationVariables,
  TicketLogSaveProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, TicketLogSaveMutation, TicketLogSaveMutationVariables, TicketLogSaveProps<TChildProps>>(TicketLogSaveDocument, {
      alias: 'withTicketLogSave',
      ...operationOptions
    });
};
export type TicketLogSaveMutationResult = ApolloReactCommon.MutationResult<TicketLogSaveMutation>;
export type TicketLogSaveMutationOptions = ApolloReactCommon.BaseMutationOptions<TicketLogSaveMutation, TicketLogSaveMutationVariables>;
export const MemberInsertDocument = gql`
    mutation memberInsert($entity: MemberInput!) {
  memberInsert(entity: $entity) {
    relations
    id
    nickname
    password
    avatar
    mobile
    openid
    status
    fee
    fee2
    fee3
    rooms {
      relations
      id
      password
      roomType {
        id
        title
      }
      roomTypeId
      status
      autoStart
      ownerId
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      createDate
    }
    getRooms {
      relations
      id
      password
      roomType {
        id
        title
      }
      roomTypeId
      status
      autoStart
      ownerId
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      createDate
    }
    createRooms {
      relations
      id
      password
      roomType {
        id
        title
      }
      roomTypeId
      status
      autoStart
      ownerId
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      createDate
    }
    getCreateRooms {
      relations
      id
      password
      roomType {
        id
        title
      }
      roomTypeId
      status
      autoStart
      ownerId
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      createDate
    }
    tixianLogs {
      relations
      id
      memberId
      count
      status
      createDate
    }
    getTixianLogs {
      relations
      id
      memberId
      count
      status
      createDate
    }
    gameLogs {
      relations
      id
      status
      count
      startTime
      endTime
      room {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      roomId
      memberId
      createDate
    }
    ticketLogs {
      relations
      id
      ticket {
        id
        title
      }
      ticket_Id
      member_id
      createDate
    }
    getTicketLogs {
      relations
      id
      ticket {
        id
        title
      }
      ticket_Id
      member_id
      createDate
    }
    createDate
  }
}
    `;
export type MemberInsertMutationFn = ApolloReactCommon.MutationFunction<MemberInsertMutation, MemberInsertMutationVariables>;
export type MemberInsertComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<MemberInsertMutation, MemberInsertMutationVariables>, 'mutation'>;

    export const MemberInsertComponent = (props: MemberInsertComponentProps) => (
      <ApolloReactComponents.Mutation<MemberInsertMutation, MemberInsertMutationVariables> mutation={MemberInsertDocument} {...props} />
    );
    
export type MemberInsertProps<TChildProps = {}> = ApolloReactHoc.MutateProps<MemberInsertMutation, MemberInsertMutationVariables> & TChildProps;
export function withMemberInsert<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MemberInsertMutation,
  MemberInsertMutationVariables,
  MemberInsertProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, MemberInsertMutation, MemberInsertMutationVariables, MemberInsertProps<TChildProps>>(MemberInsertDocument, {
      alias: 'withMemberInsert',
      ...operationOptions
    });
};
export type MemberInsertMutationResult = ApolloReactCommon.MutationResult<MemberInsertMutation>;
export type MemberInsertMutationOptions = ApolloReactCommon.BaseMutationOptions<MemberInsertMutation, MemberInsertMutationVariables>;
export const RoomInsertDocument = gql`
    mutation roomInsert($entity: RoomInput!) {
  roomInsert(entity: $entity) {
    relations
    id
    password
    roomType {
      id
      title
    }
    roomTypeId
    status
    autoStart
    owner {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    ownerId
    getOwner {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    members {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    getMembers {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    gameLogs {
      relations
      id
      status
      count
      startTime
      endTime
      roomId
      members {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      getMembers {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      memberId
      createDate
    }
    getGameLogs {
      relations
      id
      status
      count
      startTime
      endTime
      roomId
      members {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      getMembers {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      memberId
      createDate
    }
    createDate
  }
}
    `;
export type RoomInsertMutationFn = ApolloReactCommon.MutationFunction<RoomInsertMutation, RoomInsertMutationVariables>;
export type RoomInsertComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RoomInsertMutation, RoomInsertMutationVariables>, 'mutation'>;

    export const RoomInsertComponent = (props: RoomInsertComponentProps) => (
      <ApolloReactComponents.Mutation<RoomInsertMutation, RoomInsertMutationVariables> mutation={RoomInsertDocument} {...props} />
    );
    
export type RoomInsertProps<TChildProps = {}> = ApolloReactHoc.MutateProps<RoomInsertMutation, RoomInsertMutationVariables> & TChildProps;
export function withRoomInsert<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RoomInsertMutation,
  RoomInsertMutationVariables,
  RoomInsertProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, RoomInsertMutation, RoomInsertMutationVariables, RoomInsertProps<TChildProps>>(RoomInsertDocument, {
      alias: 'withRoomInsert',
      ...operationOptions
    });
};
export type RoomInsertMutationResult = ApolloReactCommon.MutationResult<RoomInsertMutation>;
export type RoomInsertMutationOptions = ApolloReactCommon.BaseMutationOptions<RoomInsertMutation, RoomInsertMutationVariables>;
export const RoomTypeInsertDocument = gql`
    mutation roomTypeInsert($entity: RoomTypeInput!) {
  roomTypeInsert(entity: $entity) {
    id
    title
    rooms {
      relations
      id
      password
      roomTypeId
      status
      autoStart
      owner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      ownerId
      getOwner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      members {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      getMembers {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        members {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        getMembers {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        members {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        getMembers {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        memberId
        createDate
      }
      createDate
    }
    getRooms {
      relations
      id
      password
      roomTypeId
      status
      autoStart
      owner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      ownerId
      getOwner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      members {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      getMembers {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        members {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        getMembers {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        members {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        getMembers {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        memberId
        createDate
      }
      createDate
    }
  }
}
    `;
export type RoomTypeInsertMutationFn = ApolloReactCommon.MutationFunction<RoomTypeInsertMutation, RoomTypeInsertMutationVariables>;
export type RoomTypeInsertComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RoomTypeInsertMutation, RoomTypeInsertMutationVariables>, 'mutation'>;

    export const RoomTypeInsertComponent = (props: RoomTypeInsertComponentProps) => (
      <ApolloReactComponents.Mutation<RoomTypeInsertMutation, RoomTypeInsertMutationVariables> mutation={RoomTypeInsertDocument} {...props} />
    );
    
export type RoomTypeInsertProps<TChildProps = {}> = ApolloReactHoc.MutateProps<RoomTypeInsertMutation, RoomTypeInsertMutationVariables> & TChildProps;
export function withRoomTypeInsert<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RoomTypeInsertMutation,
  RoomTypeInsertMutationVariables,
  RoomTypeInsertProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, RoomTypeInsertMutation, RoomTypeInsertMutationVariables, RoomTypeInsertProps<TChildProps>>(RoomTypeInsertDocument, {
      alias: 'withRoomTypeInsert',
      ...operationOptions
    });
};
export type RoomTypeInsertMutationResult = ApolloReactCommon.MutationResult<RoomTypeInsertMutation>;
export type RoomTypeInsertMutationOptions = ApolloReactCommon.BaseMutationOptions<RoomTypeInsertMutation, RoomTypeInsertMutationVariables>;
export const SettingInsertDocument = gql`
    mutation settingInsert($entity: SettingInput!) {
  settingInsert(entity: $entity) {
    id
    key
    value
  }
}
    `;
export type SettingInsertMutationFn = ApolloReactCommon.MutationFunction<SettingInsertMutation, SettingInsertMutationVariables>;
export type SettingInsertComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SettingInsertMutation, SettingInsertMutationVariables>, 'mutation'>;

    export const SettingInsertComponent = (props: SettingInsertComponentProps) => (
      <ApolloReactComponents.Mutation<SettingInsertMutation, SettingInsertMutationVariables> mutation={SettingInsertDocument} {...props} />
    );
    
export type SettingInsertProps<TChildProps = {}> = ApolloReactHoc.MutateProps<SettingInsertMutation, SettingInsertMutationVariables> & TChildProps;
export function withSettingInsert<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SettingInsertMutation,
  SettingInsertMutationVariables,
  SettingInsertProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, SettingInsertMutation, SettingInsertMutationVariables, SettingInsertProps<TChildProps>>(SettingInsertDocument, {
      alias: 'withSettingInsert',
      ...operationOptions
    });
};
export type SettingInsertMutationResult = ApolloReactCommon.MutationResult<SettingInsertMutation>;
export type SettingInsertMutationOptions = ApolloReactCommon.BaseMutationOptions<SettingInsertMutation, SettingInsertMutationVariables>;
export const TixianLogInsertDocument = gql`
    mutation tixianLogInsert($entity: TixianLogInput!) {
  tixianLogInsert(entity: $entity) {
    relations
    id
    member {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      rooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      createRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getCreateRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        room {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          createDate
        }
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    memberId
    getMember {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      rooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      createRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getCreateRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        room {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          createDate
        }
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    count
    status
    createDate
  }
}
    `;
export type TixianLogInsertMutationFn = ApolloReactCommon.MutationFunction<TixianLogInsertMutation, TixianLogInsertMutationVariables>;
export type TixianLogInsertComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<TixianLogInsertMutation, TixianLogInsertMutationVariables>, 'mutation'>;

    export const TixianLogInsertComponent = (props: TixianLogInsertComponentProps) => (
      <ApolloReactComponents.Mutation<TixianLogInsertMutation, TixianLogInsertMutationVariables> mutation={TixianLogInsertDocument} {...props} />
    );
    
export type TixianLogInsertProps<TChildProps = {}> = ApolloReactHoc.MutateProps<TixianLogInsertMutation, TixianLogInsertMutationVariables> & TChildProps;
export function withTixianLogInsert<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TixianLogInsertMutation,
  TixianLogInsertMutationVariables,
  TixianLogInsertProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, TixianLogInsertMutation, TixianLogInsertMutationVariables, TixianLogInsertProps<TChildProps>>(TixianLogInsertDocument, {
      alias: 'withTixianLogInsert',
      ...operationOptions
    });
};
export type TixianLogInsertMutationResult = ApolloReactCommon.MutationResult<TixianLogInsertMutation>;
export type TixianLogInsertMutationOptions = ApolloReactCommon.BaseMutationOptions<TixianLogInsertMutation, TixianLogInsertMutationVariables>;
export const GameLogInsertDocument = gql`
    mutation gameLogInsert($entity: GameLogInput!) {
  gameLogInsert(entity: $entity) {
    relations
    id
    status
    count
    startTime
    endTime
    room {
      relations
      id
      password
      roomType {
        id
        title
      }
      roomTypeId
      status
      autoStart
      owner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      ownerId
      getOwner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      members {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      getMembers {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      createDate
    }
    roomId
    members {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      rooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      getRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      createRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      getCreateRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    getMembers {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      rooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      getRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      createRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      getCreateRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    memberId
    createDate
  }
}
    `;
export type GameLogInsertMutationFn = ApolloReactCommon.MutationFunction<GameLogInsertMutation, GameLogInsertMutationVariables>;
export type GameLogInsertComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<GameLogInsertMutation, GameLogInsertMutationVariables>, 'mutation'>;

    export const GameLogInsertComponent = (props: GameLogInsertComponentProps) => (
      <ApolloReactComponents.Mutation<GameLogInsertMutation, GameLogInsertMutationVariables> mutation={GameLogInsertDocument} {...props} />
    );
    
export type GameLogInsertProps<TChildProps = {}> = ApolloReactHoc.MutateProps<GameLogInsertMutation, GameLogInsertMutationVariables> & TChildProps;
export function withGameLogInsert<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GameLogInsertMutation,
  GameLogInsertMutationVariables,
  GameLogInsertProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, GameLogInsertMutation, GameLogInsertMutationVariables, GameLogInsertProps<TChildProps>>(GameLogInsertDocument, {
      alias: 'withGameLogInsert',
      ...operationOptions
    });
};
export type GameLogInsertMutationResult = ApolloReactCommon.MutationResult<GameLogInsertMutation>;
export type GameLogInsertMutationOptions = ApolloReactCommon.BaseMutationOptions<GameLogInsertMutation, GameLogInsertMutationVariables>;
export const TicketInsertDocument = gql`
    mutation ticketInsert($entity: TicketInput!) {
  ticketInsert(entity: $entity) {
    id
    title
    logs {
      relations
      id
      ticket_Id
      member {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        rooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        getRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        createRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        getCreateRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          room {
            relations
            id
            password
            roomType {
              id
              title
            }
            roomTypeId
            status
            autoStart
            ownerId
            createDate
          }
          roomId
          memberId
          createDate
        }
        createDate
      }
      member_id
      createDate
    }
    getTicketLogs {
      relations
      id
      ticket_Id
      member {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        rooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        getRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        createRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        getCreateRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          room {
            relations
            id
            password
            roomType {
              id
              title
            }
            roomTypeId
            status
            autoStart
            ownerId
            createDate
          }
          roomId
          memberId
          createDate
        }
        createDate
      }
      member_id
      createDate
    }
  }
}
    `;
export type TicketInsertMutationFn = ApolloReactCommon.MutationFunction<TicketInsertMutation, TicketInsertMutationVariables>;
export type TicketInsertComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<TicketInsertMutation, TicketInsertMutationVariables>, 'mutation'>;

    export const TicketInsertComponent = (props: TicketInsertComponentProps) => (
      <ApolloReactComponents.Mutation<TicketInsertMutation, TicketInsertMutationVariables> mutation={TicketInsertDocument} {...props} />
    );
    
export type TicketInsertProps<TChildProps = {}> = ApolloReactHoc.MutateProps<TicketInsertMutation, TicketInsertMutationVariables> & TChildProps;
export function withTicketInsert<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TicketInsertMutation,
  TicketInsertMutationVariables,
  TicketInsertProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, TicketInsertMutation, TicketInsertMutationVariables, TicketInsertProps<TChildProps>>(TicketInsertDocument, {
      alias: 'withTicketInsert',
      ...operationOptions
    });
};
export type TicketInsertMutationResult = ApolloReactCommon.MutationResult<TicketInsertMutation>;
export type TicketInsertMutationOptions = ApolloReactCommon.BaseMutationOptions<TicketInsertMutation, TicketInsertMutationVariables>;
export const TicketLogInsertDocument = gql`
    mutation ticketLogInsert($entity: TicketLogInput!) {
  ticketLogInsert(entity: $entity) {
    relations
    id
    ticket {
      id
      title
    }
    ticket_Id
    member {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      rooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      createRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getCreateRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        room {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          createDate
        }
        roomId
        memberId
        createDate
      }
      createDate
    }
    member_id
    createDate
  }
}
    `;
export type TicketLogInsertMutationFn = ApolloReactCommon.MutationFunction<TicketLogInsertMutation, TicketLogInsertMutationVariables>;
export type TicketLogInsertComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<TicketLogInsertMutation, TicketLogInsertMutationVariables>, 'mutation'>;

    export const TicketLogInsertComponent = (props: TicketLogInsertComponentProps) => (
      <ApolloReactComponents.Mutation<TicketLogInsertMutation, TicketLogInsertMutationVariables> mutation={TicketLogInsertDocument} {...props} />
    );
    
export type TicketLogInsertProps<TChildProps = {}> = ApolloReactHoc.MutateProps<TicketLogInsertMutation, TicketLogInsertMutationVariables> & TChildProps;
export function withTicketLogInsert<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TicketLogInsertMutation,
  TicketLogInsertMutationVariables,
  TicketLogInsertProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, TicketLogInsertMutation, TicketLogInsertMutationVariables, TicketLogInsertProps<TChildProps>>(TicketLogInsertDocument, {
      alias: 'withTicketLogInsert',
      ...operationOptions
    });
};
export type TicketLogInsertMutationResult = ApolloReactCommon.MutationResult<TicketLogInsertMutation>;
export type TicketLogInsertMutationOptions = ApolloReactCommon.BaseMutationOptions<TicketLogInsertMutation, TicketLogInsertMutationVariables>;
export const MemberUpdateDocument = gql`
    mutation memberUpdate($where: MemberPartial!, $entity: MemberInput!) {
  memberUpdate(where: $where, entity: $entity) {
    relations
    id
    nickname
    password
    avatar
    mobile
    openid
    status
    fee
    fee2
    fee3
    rooms {
      relations
      id
      password
      roomType {
        id
        title
      }
      roomTypeId
      status
      autoStart
      ownerId
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      createDate
    }
    getRooms {
      relations
      id
      password
      roomType {
        id
        title
      }
      roomTypeId
      status
      autoStart
      ownerId
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      createDate
    }
    createRooms {
      relations
      id
      password
      roomType {
        id
        title
      }
      roomTypeId
      status
      autoStart
      ownerId
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      createDate
    }
    getCreateRooms {
      relations
      id
      password
      roomType {
        id
        title
      }
      roomTypeId
      status
      autoStart
      ownerId
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      createDate
    }
    tixianLogs {
      relations
      id
      memberId
      count
      status
      createDate
    }
    getTixianLogs {
      relations
      id
      memberId
      count
      status
      createDate
    }
    gameLogs {
      relations
      id
      status
      count
      startTime
      endTime
      room {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      roomId
      memberId
      createDate
    }
    ticketLogs {
      relations
      id
      ticket {
        id
        title
      }
      ticket_Id
      member_id
      createDate
    }
    getTicketLogs {
      relations
      id
      ticket {
        id
        title
      }
      ticket_Id
      member_id
      createDate
    }
    createDate
  }
}
    `;
export type MemberUpdateMutationFn = ApolloReactCommon.MutationFunction<MemberUpdateMutation, MemberUpdateMutationVariables>;
export type MemberUpdateComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<MemberUpdateMutation, MemberUpdateMutationVariables>, 'mutation'>;

    export const MemberUpdateComponent = (props: MemberUpdateComponentProps) => (
      <ApolloReactComponents.Mutation<MemberUpdateMutation, MemberUpdateMutationVariables> mutation={MemberUpdateDocument} {...props} />
    );
    
export type MemberUpdateProps<TChildProps = {}> = ApolloReactHoc.MutateProps<MemberUpdateMutation, MemberUpdateMutationVariables> & TChildProps;
export function withMemberUpdate<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MemberUpdateMutation,
  MemberUpdateMutationVariables,
  MemberUpdateProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, MemberUpdateMutation, MemberUpdateMutationVariables, MemberUpdateProps<TChildProps>>(MemberUpdateDocument, {
      alias: 'withMemberUpdate',
      ...operationOptions
    });
};
export type MemberUpdateMutationResult = ApolloReactCommon.MutationResult<MemberUpdateMutation>;
export type MemberUpdateMutationOptions = ApolloReactCommon.BaseMutationOptions<MemberUpdateMutation, MemberUpdateMutationVariables>;
export const RoomUpdateDocument = gql`
    mutation roomUpdate($where: RoomPartial!, $entity: RoomInput!) {
  roomUpdate(where: $where, entity: $entity) {
    relations
    id
    password
    roomType {
      id
      title
    }
    roomTypeId
    status
    autoStart
    owner {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    ownerId
    getOwner {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    members {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    getMembers {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    gameLogs {
      relations
      id
      status
      count
      startTime
      endTime
      roomId
      members {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      getMembers {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      memberId
      createDate
    }
    getGameLogs {
      relations
      id
      status
      count
      startTime
      endTime
      roomId
      members {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      getMembers {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      memberId
      createDate
    }
    createDate
  }
}
    `;
export type RoomUpdateMutationFn = ApolloReactCommon.MutationFunction<RoomUpdateMutation, RoomUpdateMutationVariables>;
export type RoomUpdateComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RoomUpdateMutation, RoomUpdateMutationVariables>, 'mutation'>;

    export const RoomUpdateComponent = (props: RoomUpdateComponentProps) => (
      <ApolloReactComponents.Mutation<RoomUpdateMutation, RoomUpdateMutationVariables> mutation={RoomUpdateDocument} {...props} />
    );
    
export type RoomUpdateProps<TChildProps = {}> = ApolloReactHoc.MutateProps<RoomUpdateMutation, RoomUpdateMutationVariables> & TChildProps;
export function withRoomUpdate<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RoomUpdateMutation,
  RoomUpdateMutationVariables,
  RoomUpdateProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, RoomUpdateMutation, RoomUpdateMutationVariables, RoomUpdateProps<TChildProps>>(RoomUpdateDocument, {
      alias: 'withRoomUpdate',
      ...operationOptions
    });
};
export type RoomUpdateMutationResult = ApolloReactCommon.MutationResult<RoomUpdateMutation>;
export type RoomUpdateMutationOptions = ApolloReactCommon.BaseMutationOptions<RoomUpdateMutation, RoomUpdateMutationVariables>;
export const RoomTypeUpdateDocument = gql`
    mutation roomTypeUpdate($where: RoomTypePartial!, $entity: RoomTypeInput!) {
  roomTypeUpdate(where: $where, entity: $entity) {
    id
    title
    rooms {
      relations
      id
      password
      roomTypeId
      status
      autoStart
      owner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      ownerId
      getOwner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      members {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      getMembers {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        members {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        getMembers {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        members {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        getMembers {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        memberId
        createDate
      }
      createDate
    }
    getRooms {
      relations
      id
      password
      roomTypeId
      status
      autoStart
      owner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      ownerId
      getOwner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      members {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      getMembers {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        members {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        getMembers {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        memberId
        createDate
      }
      getGameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        roomId
        members {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        getMembers {
          relations
          id
          nickname
          password
          avatar
          mobile
          openid
          status
          fee
          fee2
          fee3
          tixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          getTixianLogs {
            relations
            id
            memberId
            count
            status
            createDate
          }
          ticketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          getTicketLogs {
            relations
            id
            ticket {
              id
              title
            }
            ticket_Id
            member_id
            createDate
          }
          createDate
        }
        memberId
        createDate
      }
      createDate
    }
  }
}
    `;
export type RoomTypeUpdateMutationFn = ApolloReactCommon.MutationFunction<RoomTypeUpdateMutation, RoomTypeUpdateMutationVariables>;
export type RoomTypeUpdateComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RoomTypeUpdateMutation, RoomTypeUpdateMutationVariables>, 'mutation'>;

    export const RoomTypeUpdateComponent = (props: RoomTypeUpdateComponentProps) => (
      <ApolloReactComponents.Mutation<RoomTypeUpdateMutation, RoomTypeUpdateMutationVariables> mutation={RoomTypeUpdateDocument} {...props} />
    );
    
export type RoomTypeUpdateProps<TChildProps = {}> = ApolloReactHoc.MutateProps<RoomTypeUpdateMutation, RoomTypeUpdateMutationVariables> & TChildProps;
export function withRoomTypeUpdate<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RoomTypeUpdateMutation,
  RoomTypeUpdateMutationVariables,
  RoomTypeUpdateProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, RoomTypeUpdateMutation, RoomTypeUpdateMutationVariables, RoomTypeUpdateProps<TChildProps>>(RoomTypeUpdateDocument, {
      alias: 'withRoomTypeUpdate',
      ...operationOptions
    });
};
export type RoomTypeUpdateMutationResult = ApolloReactCommon.MutationResult<RoomTypeUpdateMutation>;
export type RoomTypeUpdateMutationOptions = ApolloReactCommon.BaseMutationOptions<RoomTypeUpdateMutation, RoomTypeUpdateMutationVariables>;
export const SettingUpdateDocument = gql`
    mutation settingUpdate($where: SettingPartial!, $entity: SettingInput!) {
  settingUpdate(where: $where, entity: $entity) {
    id
    key
    value
  }
}
    `;
export type SettingUpdateMutationFn = ApolloReactCommon.MutationFunction<SettingUpdateMutation, SettingUpdateMutationVariables>;
export type SettingUpdateComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SettingUpdateMutation, SettingUpdateMutationVariables>, 'mutation'>;

    export const SettingUpdateComponent = (props: SettingUpdateComponentProps) => (
      <ApolloReactComponents.Mutation<SettingUpdateMutation, SettingUpdateMutationVariables> mutation={SettingUpdateDocument} {...props} />
    );
    
export type SettingUpdateProps<TChildProps = {}> = ApolloReactHoc.MutateProps<SettingUpdateMutation, SettingUpdateMutationVariables> & TChildProps;
export function withSettingUpdate<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SettingUpdateMutation,
  SettingUpdateMutationVariables,
  SettingUpdateProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, SettingUpdateMutation, SettingUpdateMutationVariables, SettingUpdateProps<TChildProps>>(SettingUpdateDocument, {
      alias: 'withSettingUpdate',
      ...operationOptions
    });
};
export type SettingUpdateMutationResult = ApolloReactCommon.MutationResult<SettingUpdateMutation>;
export type SettingUpdateMutationOptions = ApolloReactCommon.BaseMutationOptions<SettingUpdateMutation, SettingUpdateMutationVariables>;
export const TixianLogUpdateDocument = gql`
    mutation tixianLogUpdate($where: TixianLogPartial!, $entity: TixianLogInput!) {
  tixianLogUpdate(where: $where, entity: $entity) {
    relations
    id
    member {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      rooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      createRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getCreateRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        room {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          createDate
        }
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    memberId
    getMember {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      rooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      createRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getCreateRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        room {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          createDate
        }
        roomId
        memberId
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    count
    status
    createDate
  }
}
    `;
export type TixianLogUpdateMutationFn = ApolloReactCommon.MutationFunction<TixianLogUpdateMutation, TixianLogUpdateMutationVariables>;
export type TixianLogUpdateComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<TixianLogUpdateMutation, TixianLogUpdateMutationVariables>, 'mutation'>;

    export const TixianLogUpdateComponent = (props: TixianLogUpdateComponentProps) => (
      <ApolloReactComponents.Mutation<TixianLogUpdateMutation, TixianLogUpdateMutationVariables> mutation={TixianLogUpdateDocument} {...props} />
    );
    
export type TixianLogUpdateProps<TChildProps = {}> = ApolloReactHoc.MutateProps<TixianLogUpdateMutation, TixianLogUpdateMutationVariables> & TChildProps;
export function withTixianLogUpdate<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TixianLogUpdateMutation,
  TixianLogUpdateMutationVariables,
  TixianLogUpdateProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, TixianLogUpdateMutation, TixianLogUpdateMutationVariables, TixianLogUpdateProps<TChildProps>>(TixianLogUpdateDocument, {
      alias: 'withTixianLogUpdate',
      ...operationOptions
    });
};
export type TixianLogUpdateMutationResult = ApolloReactCommon.MutationResult<TixianLogUpdateMutation>;
export type TixianLogUpdateMutationOptions = ApolloReactCommon.BaseMutationOptions<TixianLogUpdateMutation, TixianLogUpdateMutationVariables>;
export const GameLogUpdateDocument = gql`
    mutation gameLogUpdate($where: GameLogPartial!, $entity: GameLogInput!) {
  gameLogUpdate(where: $where, entity: $entity) {
    relations
    id
    status
    count
    startTime
    endTime
    room {
      relations
      id
      password
      roomType {
        id
        title
      }
      roomTypeId
      status
      autoStart
      owner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      ownerId
      getOwner {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      members {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      getMembers {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        ticketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        getTicketLogs {
          relations
          id
          ticket {
            id
            title
          }
          ticket_Id
          member_id
          createDate
        }
        createDate
      }
      createDate
    }
    roomId
    members {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      rooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      getRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      createRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      getCreateRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    getMembers {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      rooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      getRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      createRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      getCreateRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        createDate
      }
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      ticketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      getTicketLogs {
        relations
        id
        ticket {
          id
          title
        }
        ticket_Id
        member_id
        createDate
      }
      createDate
    }
    memberId
    createDate
  }
}
    `;
export type GameLogUpdateMutationFn = ApolloReactCommon.MutationFunction<GameLogUpdateMutation, GameLogUpdateMutationVariables>;
export type GameLogUpdateComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<GameLogUpdateMutation, GameLogUpdateMutationVariables>, 'mutation'>;

    export const GameLogUpdateComponent = (props: GameLogUpdateComponentProps) => (
      <ApolloReactComponents.Mutation<GameLogUpdateMutation, GameLogUpdateMutationVariables> mutation={GameLogUpdateDocument} {...props} />
    );
    
export type GameLogUpdateProps<TChildProps = {}> = ApolloReactHoc.MutateProps<GameLogUpdateMutation, GameLogUpdateMutationVariables> & TChildProps;
export function withGameLogUpdate<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GameLogUpdateMutation,
  GameLogUpdateMutationVariables,
  GameLogUpdateProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, GameLogUpdateMutation, GameLogUpdateMutationVariables, GameLogUpdateProps<TChildProps>>(GameLogUpdateDocument, {
      alias: 'withGameLogUpdate',
      ...operationOptions
    });
};
export type GameLogUpdateMutationResult = ApolloReactCommon.MutationResult<GameLogUpdateMutation>;
export type GameLogUpdateMutationOptions = ApolloReactCommon.BaseMutationOptions<GameLogUpdateMutation, GameLogUpdateMutationVariables>;
export const TicketUpdateDocument = gql`
    mutation ticketUpdate($where: TicketPartial!, $entity: TicketInput!) {
  ticketUpdate(where: $where, entity: $entity) {
    id
    title
    logs {
      relations
      id
      ticket_Id
      member {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        rooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        getRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        createRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        getCreateRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          room {
            relations
            id
            password
            roomType {
              id
              title
            }
            roomTypeId
            status
            autoStart
            ownerId
            createDate
          }
          roomId
          memberId
          createDate
        }
        createDate
      }
      member_id
      createDate
    }
    getTicketLogs {
      relations
      id
      ticket_Id
      member {
        relations
        id
        nickname
        password
        avatar
        mobile
        openid
        status
        fee
        fee2
        fee3
        rooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        getRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        createRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        getCreateRooms {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          gameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          getGameLogs {
            relations
            id
            status
            count
            startTime
            endTime
            roomId
            memberId
            createDate
          }
          createDate
        }
        tixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        getTixianLogs {
          relations
          id
          memberId
          count
          status
          createDate
        }
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          room {
            relations
            id
            password
            roomType {
              id
              title
            }
            roomTypeId
            status
            autoStart
            ownerId
            createDate
          }
          roomId
          memberId
          createDate
        }
        createDate
      }
      member_id
      createDate
    }
  }
}
    `;
export type TicketUpdateMutationFn = ApolloReactCommon.MutationFunction<TicketUpdateMutation, TicketUpdateMutationVariables>;
export type TicketUpdateComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<TicketUpdateMutation, TicketUpdateMutationVariables>, 'mutation'>;

    export const TicketUpdateComponent = (props: TicketUpdateComponentProps) => (
      <ApolloReactComponents.Mutation<TicketUpdateMutation, TicketUpdateMutationVariables> mutation={TicketUpdateDocument} {...props} />
    );
    
export type TicketUpdateProps<TChildProps = {}> = ApolloReactHoc.MutateProps<TicketUpdateMutation, TicketUpdateMutationVariables> & TChildProps;
export function withTicketUpdate<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TicketUpdateMutation,
  TicketUpdateMutationVariables,
  TicketUpdateProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, TicketUpdateMutation, TicketUpdateMutationVariables, TicketUpdateProps<TChildProps>>(TicketUpdateDocument, {
      alias: 'withTicketUpdate',
      ...operationOptions
    });
};
export type TicketUpdateMutationResult = ApolloReactCommon.MutationResult<TicketUpdateMutation>;
export type TicketUpdateMutationOptions = ApolloReactCommon.BaseMutationOptions<TicketUpdateMutation, TicketUpdateMutationVariables>;
export const TicketLogUpdateDocument = gql`
    mutation ticketLogUpdate($where: TicketLogPartial!, $entity: TicketLogInput!) {
  ticketLogUpdate(where: $where, entity: $entity) {
    relations
    id
    ticket {
      id
      title
    }
    ticket_Id
    member {
      relations
      id
      nickname
      password
      avatar
      mobile
      openid
      status
      fee
      fee2
      fee3
      rooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      createRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      getCreateRooms {
        relations
        id
        password
        roomType {
          id
          title
        }
        roomTypeId
        status
        autoStart
        ownerId
        gameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        getGameLogs {
          relations
          id
          status
          count
          startTime
          endTime
          roomId
          memberId
          createDate
        }
        createDate
      }
      tixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      getTixianLogs {
        relations
        id
        memberId
        count
        status
        createDate
      }
      gameLogs {
        relations
        id
        status
        count
        startTime
        endTime
        room {
          relations
          id
          password
          roomType {
            id
            title
          }
          roomTypeId
          status
          autoStart
          ownerId
          createDate
        }
        roomId
        memberId
        createDate
      }
      createDate
    }
    member_id
    createDate
  }
}
    `;
export type TicketLogUpdateMutationFn = ApolloReactCommon.MutationFunction<TicketLogUpdateMutation, TicketLogUpdateMutationVariables>;
export type TicketLogUpdateComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<TicketLogUpdateMutation, TicketLogUpdateMutationVariables>, 'mutation'>;

    export const TicketLogUpdateComponent = (props: TicketLogUpdateComponentProps) => (
      <ApolloReactComponents.Mutation<TicketLogUpdateMutation, TicketLogUpdateMutationVariables> mutation={TicketLogUpdateDocument} {...props} />
    );
    
export type TicketLogUpdateProps<TChildProps = {}> = ApolloReactHoc.MutateProps<TicketLogUpdateMutation, TicketLogUpdateMutationVariables> & TChildProps;
export function withTicketLogUpdate<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TicketLogUpdateMutation,
  TicketLogUpdateMutationVariables,
  TicketLogUpdateProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, TicketLogUpdateMutation, TicketLogUpdateMutationVariables, TicketLogUpdateProps<TChildProps>>(TicketLogUpdateDocument, {
      alias: 'withTicketLogUpdate',
      ...operationOptions
    });
};
export type TicketLogUpdateMutationResult = ApolloReactCommon.MutationResult<TicketLogUpdateMutation>;
export type TicketLogUpdateMutationOptions = ApolloReactCommon.BaseMutationOptions<TicketLogUpdateMutation, TicketLogUpdateMutationVariables>;
export const MemberDeleteDocument = gql`
    mutation memberDelete($id: Int!) {
  memberDelete(id: $id)
}
    `;
export type MemberDeleteMutationFn = ApolloReactCommon.MutationFunction<MemberDeleteMutation, MemberDeleteMutationVariables>;
export type MemberDeleteComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<MemberDeleteMutation, MemberDeleteMutationVariables>, 'mutation'>;

    export const MemberDeleteComponent = (props: MemberDeleteComponentProps) => (
      <ApolloReactComponents.Mutation<MemberDeleteMutation, MemberDeleteMutationVariables> mutation={MemberDeleteDocument} {...props} />
    );
    
export type MemberDeleteProps<TChildProps = {}> = ApolloReactHoc.MutateProps<MemberDeleteMutation, MemberDeleteMutationVariables> & TChildProps;
export function withMemberDelete<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MemberDeleteMutation,
  MemberDeleteMutationVariables,
  MemberDeleteProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, MemberDeleteMutation, MemberDeleteMutationVariables, MemberDeleteProps<TChildProps>>(MemberDeleteDocument, {
      alias: 'withMemberDelete',
      ...operationOptions
    });
};
export type MemberDeleteMutationResult = ApolloReactCommon.MutationResult<MemberDeleteMutation>;
export type MemberDeleteMutationOptions = ApolloReactCommon.BaseMutationOptions<MemberDeleteMutation, MemberDeleteMutationVariables>;
export const RoomDeleteDocument = gql`
    mutation roomDelete($id: Int!) {
  roomDelete(id: $id)
}
    `;
export type RoomDeleteMutationFn = ApolloReactCommon.MutationFunction<RoomDeleteMutation, RoomDeleteMutationVariables>;
export type RoomDeleteComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RoomDeleteMutation, RoomDeleteMutationVariables>, 'mutation'>;

    export const RoomDeleteComponent = (props: RoomDeleteComponentProps) => (
      <ApolloReactComponents.Mutation<RoomDeleteMutation, RoomDeleteMutationVariables> mutation={RoomDeleteDocument} {...props} />
    );
    
export type RoomDeleteProps<TChildProps = {}> = ApolloReactHoc.MutateProps<RoomDeleteMutation, RoomDeleteMutationVariables> & TChildProps;
export function withRoomDelete<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RoomDeleteMutation,
  RoomDeleteMutationVariables,
  RoomDeleteProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, RoomDeleteMutation, RoomDeleteMutationVariables, RoomDeleteProps<TChildProps>>(RoomDeleteDocument, {
      alias: 'withRoomDelete',
      ...operationOptions
    });
};
export type RoomDeleteMutationResult = ApolloReactCommon.MutationResult<RoomDeleteMutation>;
export type RoomDeleteMutationOptions = ApolloReactCommon.BaseMutationOptions<RoomDeleteMutation, RoomDeleteMutationVariables>;
export const RoomTypeDeleteDocument = gql`
    mutation roomTypeDelete($id: Int!) {
  roomTypeDelete(id: $id)
}
    `;
export type RoomTypeDeleteMutationFn = ApolloReactCommon.MutationFunction<RoomTypeDeleteMutation, RoomTypeDeleteMutationVariables>;
export type RoomTypeDeleteComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RoomTypeDeleteMutation, RoomTypeDeleteMutationVariables>, 'mutation'>;

    export const RoomTypeDeleteComponent = (props: RoomTypeDeleteComponentProps) => (
      <ApolloReactComponents.Mutation<RoomTypeDeleteMutation, RoomTypeDeleteMutationVariables> mutation={RoomTypeDeleteDocument} {...props} />
    );
    
export type RoomTypeDeleteProps<TChildProps = {}> = ApolloReactHoc.MutateProps<RoomTypeDeleteMutation, RoomTypeDeleteMutationVariables> & TChildProps;
export function withRoomTypeDelete<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RoomTypeDeleteMutation,
  RoomTypeDeleteMutationVariables,
  RoomTypeDeleteProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, RoomTypeDeleteMutation, RoomTypeDeleteMutationVariables, RoomTypeDeleteProps<TChildProps>>(RoomTypeDeleteDocument, {
      alias: 'withRoomTypeDelete',
      ...operationOptions
    });
};
export type RoomTypeDeleteMutationResult = ApolloReactCommon.MutationResult<RoomTypeDeleteMutation>;
export type RoomTypeDeleteMutationOptions = ApolloReactCommon.BaseMutationOptions<RoomTypeDeleteMutation, RoomTypeDeleteMutationVariables>;
export const SettingDeleteDocument = gql`
    mutation settingDelete($id: Int!) {
  settingDelete(id: $id)
}
    `;
export type SettingDeleteMutationFn = ApolloReactCommon.MutationFunction<SettingDeleteMutation, SettingDeleteMutationVariables>;
export type SettingDeleteComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SettingDeleteMutation, SettingDeleteMutationVariables>, 'mutation'>;

    export const SettingDeleteComponent = (props: SettingDeleteComponentProps) => (
      <ApolloReactComponents.Mutation<SettingDeleteMutation, SettingDeleteMutationVariables> mutation={SettingDeleteDocument} {...props} />
    );
    
export type SettingDeleteProps<TChildProps = {}> = ApolloReactHoc.MutateProps<SettingDeleteMutation, SettingDeleteMutationVariables> & TChildProps;
export function withSettingDelete<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SettingDeleteMutation,
  SettingDeleteMutationVariables,
  SettingDeleteProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, SettingDeleteMutation, SettingDeleteMutationVariables, SettingDeleteProps<TChildProps>>(SettingDeleteDocument, {
      alias: 'withSettingDelete',
      ...operationOptions
    });
};
export type SettingDeleteMutationResult = ApolloReactCommon.MutationResult<SettingDeleteMutation>;
export type SettingDeleteMutationOptions = ApolloReactCommon.BaseMutationOptions<SettingDeleteMutation, SettingDeleteMutationVariables>;
export const TixianLogDeleteDocument = gql`
    mutation tixianLogDelete($id: Int!) {
  tixianLogDelete(id: $id)
}
    `;
export type TixianLogDeleteMutationFn = ApolloReactCommon.MutationFunction<TixianLogDeleteMutation, TixianLogDeleteMutationVariables>;
export type TixianLogDeleteComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<TixianLogDeleteMutation, TixianLogDeleteMutationVariables>, 'mutation'>;

    export const TixianLogDeleteComponent = (props: TixianLogDeleteComponentProps) => (
      <ApolloReactComponents.Mutation<TixianLogDeleteMutation, TixianLogDeleteMutationVariables> mutation={TixianLogDeleteDocument} {...props} />
    );
    
export type TixianLogDeleteProps<TChildProps = {}> = ApolloReactHoc.MutateProps<TixianLogDeleteMutation, TixianLogDeleteMutationVariables> & TChildProps;
export function withTixianLogDelete<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TixianLogDeleteMutation,
  TixianLogDeleteMutationVariables,
  TixianLogDeleteProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, TixianLogDeleteMutation, TixianLogDeleteMutationVariables, TixianLogDeleteProps<TChildProps>>(TixianLogDeleteDocument, {
      alias: 'withTixianLogDelete',
      ...operationOptions
    });
};
export type TixianLogDeleteMutationResult = ApolloReactCommon.MutationResult<TixianLogDeleteMutation>;
export type TixianLogDeleteMutationOptions = ApolloReactCommon.BaseMutationOptions<TixianLogDeleteMutation, TixianLogDeleteMutationVariables>;
export const GameLogDeleteDocument = gql`
    mutation gameLogDelete($id: Int!) {
  gameLogDelete(id: $id)
}
    `;
export type GameLogDeleteMutationFn = ApolloReactCommon.MutationFunction<GameLogDeleteMutation, GameLogDeleteMutationVariables>;
export type GameLogDeleteComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<GameLogDeleteMutation, GameLogDeleteMutationVariables>, 'mutation'>;

    export const GameLogDeleteComponent = (props: GameLogDeleteComponentProps) => (
      <ApolloReactComponents.Mutation<GameLogDeleteMutation, GameLogDeleteMutationVariables> mutation={GameLogDeleteDocument} {...props} />
    );
    
export type GameLogDeleteProps<TChildProps = {}> = ApolloReactHoc.MutateProps<GameLogDeleteMutation, GameLogDeleteMutationVariables> & TChildProps;
export function withGameLogDelete<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GameLogDeleteMutation,
  GameLogDeleteMutationVariables,
  GameLogDeleteProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, GameLogDeleteMutation, GameLogDeleteMutationVariables, GameLogDeleteProps<TChildProps>>(GameLogDeleteDocument, {
      alias: 'withGameLogDelete',
      ...operationOptions
    });
};
export type GameLogDeleteMutationResult = ApolloReactCommon.MutationResult<GameLogDeleteMutation>;
export type GameLogDeleteMutationOptions = ApolloReactCommon.BaseMutationOptions<GameLogDeleteMutation, GameLogDeleteMutationVariables>;
export const TicketDeleteDocument = gql`
    mutation ticketDelete($id: Int!) {
  ticketDelete(id: $id)
}
    `;
export type TicketDeleteMutationFn = ApolloReactCommon.MutationFunction<TicketDeleteMutation, TicketDeleteMutationVariables>;
export type TicketDeleteComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<TicketDeleteMutation, TicketDeleteMutationVariables>, 'mutation'>;

    export const TicketDeleteComponent = (props: TicketDeleteComponentProps) => (
      <ApolloReactComponents.Mutation<TicketDeleteMutation, TicketDeleteMutationVariables> mutation={TicketDeleteDocument} {...props} />
    );
    
export type TicketDeleteProps<TChildProps = {}> = ApolloReactHoc.MutateProps<TicketDeleteMutation, TicketDeleteMutationVariables> & TChildProps;
export function withTicketDelete<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TicketDeleteMutation,
  TicketDeleteMutationVariables,
  TicketDeleteProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, TicketDeleteMutation, TicketDeleteMutationVariables, TicketDeleteProps<TChildProps>>(TicketDeleteDocument, {
      alias: 'withTicketDelete',
      ...operationOptions
    });
};
export type TicketDeleteMutationResult = ApolloReactCommon.MutationResult<TicketDeleteMutation>;
export type TicketDeleteMutationOptions = ApolloReactCommon.BaseMutationOptions<TicketDeleteMutation, TicketDeleteMutationVariables>;
export const TicketLogDeleteDocument = gql`
    mutation ticketLogDelete($id: Int!) {
  ticketLogDelete(id: $id)
}
    `;
export type TicketLogDeleteMutationFn = ApolloReactCommon.MutationFunction<TicketLogDeleteMutation, TicketLogDeleteMutationVariables>;
export type TicketLogDeleteComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<TicketLogDeleteMutation, TicketLogDeleteMutationVariables>, 'mutation'>;

    export const TicketLogDeleteComponent = (props: TicketLogDeleteComponentProps) => (
      <ApolloReactComponents.Mutation<TicketLogDeleteMutation, TicketLogDeleteMutationVariables> mutation={TicketLogDeleteDocument} {...props} />
    );
    
export type TicketLogDeleteProps<TChildProps = {}> = ApolloReactHoc.MutateProps<TicketLogDeleteMutation, TicketLogDeleteMutationVariables> & TChildProps;
export function withTicketLogDelete<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TicketLogDeleteMutation,
  TicketLogDeleteMutationVariables,
  TicketLogDeleteProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, TicketLogDeleteMutation, TicketLogDeleteMutationVariables, TicketLogDeleteProps<TChildProps>>(TicketLogDeleteDocument, {
      alias: 'withTicketLogDelete',
      ...operationOptions
    });
};
export type TicketLogDeleteMutationResult = ApolloReactCommon.MutationResult<TicketLogDeleteMutation>;
export type TicketLogDeleteMutationOptions = ApolloReactCommon.BaseMutationOptions<TicketLogDeleteMutation, TicketLogDeleteMutationVariables>;
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
  "__schema": {
    "types": []
  }
};

      export default result;
    