/* tslint:disable */
import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
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

  @Injectable({
    providedIn: 'root'
  })
  export class MemberGetGQL extends Apollo.Query<MemberGetQuery, MemberGetQueryVariables> {
    document = MemberGetDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class RoomGetGQL extends Apollo.Query<RoomGetQuery, RoomGetQueryVariables> {
    document = RoomGetDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class RoomTypeGetGQL extends Apollo.Query<RoomTypeGetQuery, RoomTypeGetQueryVariables> {
    document = RoomTypeGetDocument;
    client = 'magnusWeb';
  }
export const SettingGetDocument = gql`
    query settingGet($entity: SettingInputWhere!) {
  settingGet(entity: $entity) {
    id
    key
    value
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SettingGetGQL extends Apollo.Query<SettingGetQuery, SettingGetQueryVariables> {
    document = SettingGetDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class TixianLogGetGQL extends Apollo.Query<TixianLogGetQuery, TixianLogGetQueryVariables> {
    document = TixianLogGetDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class GameLogGetGQL extends Apollo.Query<GameLogGetQuery, GameLogGetQueryVariables> {
    document = GameLogGetDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class TicketGetGQL extends Apollo.Query<TicketGetQuery, TicketGetQueryVariables> {
    document = TicketGetDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class TicketLogGetGQL extends Apollo.Query<TicketLogGetQuery, TicketLogGetQueryVariables> {
    document = TicketLogGetDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class MemberFindGQL extends Apollo.Query<MemberFindQuery, MemberFindQueryVariables> {
    document = MemberFindDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class RoomFindGQL extends Apollo.Query<RoomFindQuery, RoomFindQueryVariables> {
    document = RoomFindDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class RoomTypeFindGQL extends Apollo.Query<RoomTypeFindQuery, RoomTypeFindQueryVariables> {
    document = RoomTypeFindDocument;
    client = 'magnusWeb';
  }
export const SettingFindDocument = gql`
    query settingFind($entity: SettingInputWhere!, $order: SettingInputOrder!, $limit: PageLimitInput) {
  settingFind(entity: $entity, order: $order, limit: $limit) {
    id
    key
    value
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SettingFindGQL extends Apollo.Query<SettingFindQuery, SettingFindQueryVariables> {
    document = SettingFindDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class TixianLogFindGQL extends Apollo.Query<TixianLogFindQuery, TixianLogFindQueryVariables> {
    document = TixianLogFindDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class GameLogFindGQL extends Apollo.Query<GameLogFindQuery, GameLogFindQueryVariables> {
    document = GameLogFindDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class TicketFindGQL extends Apollo.Query<TicketFindQuery, TicketFindQueryVariables> {
    document = TicketFindDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class TicketLogFindGQL extends Apollo.Query<TicketLogFindQuery, TicketLogFindQueryVariables> {
    document = TicketLogFindDocument;
    client = 'magnusWeb';
  }
export const MemberCountDocument = gql`
    query memberCount($where: MemberInputWhere!) {
  memberCount(where: $where)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MemberCountGQL extends Apollo.Query<MemberCountQuery, MemberCountQueryVariables> {
    document = MemberCountDocument;
    client = 'magnusWeb';
  }
export const RoomCountDocument = gql`
    query roomCount($where: RoomInputWhere!) {
  roomCount(where: $where)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RoomCountGQL extends Apollo.Query<RoomCountQuery, RoomCountQueryVariables> {
    document = RoomCountDocument;
    client = 'magnusWeb';
  }
export const RoomTypeCountDocument = gql`
    query roomTypeCount($where: RoomTypeInputWhere!) {
  roomTypeCount(where: $where)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RoomTypeCountGQL extends Apollo.Query<RoomTypeCountQuery, RoomTypeCountQueryVariables> {
    document = RoomTypeCountDocument;
    client = 'magnusWeb';
  }
export const SettingCountDocument = gql`
    query settingCount($where: SettingInputWhere!) {
  settingCount(where: $where)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SettingCountGQL extends Apollo.Query<SettingCountQuery, SettingCountQueryVariables> {
    document = SettingCountDocument;
    client = 'magnusWeb';
  }
export const TixianLogCountDocument = gql`
    query tixianLogCount($where: TixianLogInputWhere!) {
  tixianLogCount(where: $where)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TixianLogCountGQL extends Apollo.Query<TixianLogCountQuery, TixianLogCountQueryVariables> {
    document = TixianLogCountDocument;
    client = 'magnusWeb';
  }
export const GameLogCountDocument = gql`
    query gameLogCount($where: GameLogInputWhere!) {
  gameLogCount(where: $where)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GameLogCountGQL extends Apollo.Query<GameLogCountQuery, GameLogCountQueryVariables> {
    document = GameLogCountDocument;
    client = 'magnusWeb';
  }
export const TicketCountDocument = gql`
    query ticketCount($where: TicketInputWhere!) {
  ticketCount(where: $where)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TicketCountGQL extends Apollo.Query<TicketCountQuery, TicketCountQueryVariables> {
    document = TicketCountDocument;
    client = 'magnusWeb';
  }
export const TicketLogCountDocument = gql`
    query ticketLogCount($where: TicketLogInputWhere!) {
  ticketLogCount(where: $where)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TicketLogCountGQL extends Apollo.Query<TicketLogCountQuery, TicketLogCountQueryVariables> {
    document = TicketLogCountDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class MemberSaveGQL extends Apollo.Mutation<MemberSaveMutation, MemberSaveMutationVariables> {
    document = MemberSaveDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class RoomSaveGQL extends Apollo.Mutation<RoomSaveMutation, RoomSaveMutationVariables> {
    document = RoomSaveDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class RoomTypeSaveGQL extends Apollo.Mutation<RoomTypeSaveMutation, RoomTypeSaveMutationVariables> {
    document = RoomTypeSaveDocument;
    client = 'magnusWeb';
  }
export const SettingSaveDocument = gql`
    mutation settingSave($entity: SettingInput!) {
  settingSave(entity: $entity) {
    id
    key
    value
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SettingSaveGQL extends Apollo.Mutation<SettingSaveMutation, SettingSaveMutationVariables> {
    document = SettingSaveDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class TixianLogSaveGQL extends Apollo.Mutation<TixianLogSaveMutation, TixianLogSaveMutationVariables> {
    document = TixianLogSaveDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class GameLogSaveGQL extends Apollo.Mutation<GameLogSaveMutation, GameLogSaveMutationVariables> {
    document = GameLogSaveDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class TicketSaveGQL extends Apollo.Mutation<TicketSaveMutation, TicketSaveMutationVariables> {
    document = TicketSaveDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class TicketLogSaveGQL extends Apollo.Mutation<TicketLogSaveMutation, TicketLogSaveMutationVariables> {
    document = TicketLogSaveDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class MemberInsertGQL extends Apollo.Mutation<MemberInsertMutation, MemberInsertMutationVariables> {
    document = MemberInsertDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class RoomInsertGQL extends Apollo.Mutation<RoomInsertMutation, RoomInsertMutationVariables> {
    document = RoomInsertDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class RoomTypeInsertGQL extends Apollo.Mutation<RoomTypeInsertMutation, RoomTypeInsertMutationVariables> {
    document = RoomTypeInsertDocument;
    client = 'magnusWeb';
  }
export const SettingInsertDocument = gql`
    mutation settingInsert($entity: SettingInput!) {
  settingInsert(entity: $entity) {
    id
    key
    value
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SettingInsertGQL extends Apollo.Mutation<SettingInsertMutation, SettingInsertMutationVariables> {
    document = SettingInsertDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class TixianLogInsertGQL extends Apollo.Mutation<TixianLogInsertMutation, TixianLogInsertMutationVariables> {
    document = TixianLogInsertDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class GameLogInsertGQL extends Apollo.Mutation<GameLogInsertMutation, GameLogInsertMutationVariables> {
    document = GameLogInsertDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class TicketInsertGQL extends Apollo.Mutation<TicketInsertMutation, TicketInsertMutationVariables> {
    document = TicketInsertDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class TicketLogInsertGQL extends Apollo.Mutation<TicketLogInsertMutation, TicketLogInsertMutationVariables> {
    document = TicketLogInsertDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class MemberUpdateGQL extends Apollo.Mutation<MemberUpdateMutation, MemberUpdateMutationVariables> {
    document = MemberUpdateDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class RoomUpdateGQL extends Apollo.Mutation<RoomUpdateMutation, RoomUpdateMutationVariables> {
    document = RoomUpdateDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class RoomTypeUpdateGQL extends Apollo.Mutation<RoomTypeUpdateMutation, RoomTypeUpdateMutationVariables> {
    document = RoomTypeUpdateDocument;
    client = 'magnusWeb';
  }
export const SettingUpdateDocument = gql`
    mutation settingUpdate($where: SettingPartial!, $entity: SettingInput!) {
  settingUpdate(where: $where, entity: $entity) {
    id
    key
    value
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SettingUpdateGQL extends Apollo.Mutation<SettingUpdateMutation, SettingUpdateMutationVariables> {
    document = SettingUpdateDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class TixianLogUpdateGQL extends Apollo.Mutation<TixianLogUpdateMutation, TixianLogUpdateMutationVariables> {
    document = TixianLogUpdateDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class GameLogUpdateGQL extends Apollo.Mutation<GameLogUpdateMutation, GameLogUpdateMutationVariables> {
    document = GameLogUpdateDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class TicketUpdateGQL extends Apollo.Mutation<TicketUpdateMutation, TicketUpdateMutationVariables> {
    document = TicketUpdateDocument;
    client = 'magnusWeb';
  }
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

  @Injectable({
    providedIn: 'root'
  })
  export class TicketLogUpdateGQL extends Apollo.Mutation<TicketLogUpdateMutation, TicketLogUpdateMutationVariables> {
    document = TicketLogUpdateDocument;
    client = 'magnusWeb';
  }
export const MemberDeleteDocument = gql`
    mutation memberDelete($id: Int!) {
  memberDelete(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MemberDeleteGQL extends Apollo.Mutation<MemberDeleteMutation, MemberDeleteMutationVariables> {
    document = MemberDeleteDocument;
    client = 'magnusWeb';
  }
export const RoomDeleteDocument = gql`
    mutation roomDelete($id: Int!) {
  roomDelete(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RoomDeleteGQL extends Apollo.Mutation<RoomDeleteMutation, RoomDeleteMutationVariables> {
    document = RoomDeleteDocument;
    client = 'magnusWeb';
  }
export const RoomTypeDeleteDocument = gql`
    mutation roomTypeDelete($id: Int!) {
  roomTypeDelete(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RoomTypeDeleteGQL extends Apollo.Mutation<RoomTypeDeleteMutation, RoomTypeDeleteMutationVariables> {
    document = RoomTypeDeleteDocument;
    client = 'magnusWeb';
  }
export const SettingDeleteDocument = gql`
    mutation settingDelete($id: Int!) {
  settingDelete(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SettingDeleteGQL extends Apollo.Mutation<SettingDeleteMutation, SettingDeleteMutationVariables> {
    document = SettingDeleteDocument;
    client = 'magnusWeb';
  }
export const TixianLogDeleteDocument = gql`
    mutation tixianLogDelete($id: Int!) {
  tixianLogDelete(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TixianLogDeleteGQL extends Apollo.Mutation<TixianLogDeleteMutation, TixianLogDeleteMutationVariables> {
    document = TixianLogDeleteDocument;
    client = 'magnusWeb';
  }
export const GameLogDeleteDocument = gql`
    mutation gameLogDelete($id: Int!) {
  gameLogDelete(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GameLogDeleteGQL extends Apollo.Mutation<GameLogDeleteMutation, GameLogDeleteMutationVariables> {
    document = GameLogDeleteDocument;
    client = 'magnusWeb';
  }
export const TicketDeleteDocument = gql`
    mutation ticketDelete($id: Int!) {
  ticketDelete(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TicketDeleteGQL extends Apollo.Mutation<TicketDeleteMutation, TicketDeleteMutationVariables> {
    document = TicketDeleteDocument;
    client = 'magnusWeb';
  }
export const TicketLogDeleteDocument = gql`
    mutation ticketLogDelete($id: Int!) {
  ticketLogDelete(id: $id)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TicketLogDeleteGQL extends Apollo.Mutation<TicketLogDeleteMutation, TicketLogDeleteMutationVariables> {
    document = TicketLogDeleteDocument;
    client = 'magnusWeb';
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
  "__schema": {
    "types": []
  }
};

      export default result;
    