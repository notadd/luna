import { Injectable } from '@nestjs/common';
import { findAllMember } from './graphql/apiMember';
import { findRoomType } from './graphql/apiRoomType';
import { FindMemberResult, FindMemberInput, FindRoomTypeResult, FindRoomInput, FindRoomResult, FindTiXianLogResult, FindTiXianLogInput } from "./type";
import { PageLimitInput } from "@luna/entities";
import { findRoom } from './graphql/apiRoom';
import { findTiXianLog } from './graphql/apiTiXianLog';
@Injectable()
export class AppService {
    /**
     * 获取全部用户
     */
    async findAllMemberAndCount(where: FindMemberInput): Promise<FindMemberResult> {
        const limit: PageLimitInput = { page: where.page, psize: where.psize }
        const res = await findAllMember({}, { createDate: "DESC" }, limit);
        const members = res.findMember;
        return {
            code: 200,
            message: '查询成功',
            // todo count有问题需要修改
            count: res.countMember,
            data: members ? members.map(member => {
                return {
                    id: member.id,
                    nickname: member.nickname,
                    avatar: member.avatar,
                    mobile: member.mobile,
                    fee: member.fee,
                    fee2: member.fee2,
                    fee3: member.fee3,
                    gameCount: member.getGameLogs ? member.getGameLogs.length : 0
                }
            }) : []
        }
    }

    /**
     * 获取全部房间类型以及所对应的房间数
     */
    async findAllRoomType(): Promise<FindRoomTypeResult> {
        const result = await findRoomType({}, {});
        return {
            code: 200,
            message: '查询成功',
            data: result.findRoomType ? result.findRoomType.map(type => {
                return {
                    id: type.id,
                    title: type.title,
                    roomCount: type.getRooms ? type.getRooms.length : 0
                }
            }) : []
        }
    }

    /**
     * 获取全部房间
     * @param where 分页
     */
    async findAllRoomAndCount(where: FindRoomInput): Promise<FindRoomResult> {
        const rooms = await findRoom({}, { createDate: "DESC" }, where).then(res => res);
        return {
            code: 200,
            message: '查询成功',
            count: rooms.countRoom,
            data: rooms.findRoom ? rooms.findRoom.map(room => {
                return {
                    id: room.id,
                    status: room.status,
                    createUserName: room.getOwner ? room.getOwner.nickname : '',
                    memberName: room.getMembers ? room.getMembers.map(member => member.nickname) : []
                }
            }) : []
        }
    }

    /**
     * 查询提现记录
     * @param where 分页
     */
    async findAllTixianLogAndCount(where: FindTiXianLogInput): Promise<FindTiXianLogResult> {
        const allLog = await findTiXianLog({}, { createDate: 'DESC' }, where).then(res => res)
        return {
            code: 200,
            message: '查询成功',
            count: allLog.countTixianLog,
            data: allLog.findTixianLog ? allLog.findTixianLog.map(log => {
                return {
                    id: log.id,
                    status: log.status,
                    createDate: log.createDate,
                    moneyCount: log.count,
                    nickname: log.getMember ? log.getMember.nickname : ''
                }
            }) : []
        }
    }
}