import { Injectable } from '@nestjs/common';
import { findAllMember } from './graphql/apiMember';
import { findRoomType } from './graphql/apiRoomType';
import { FindMemberResult, FindMemberInput, FindRoomTypeResult } from "./type";
import { PageLimitInput } from "@luna/entities";
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
}