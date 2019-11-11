import { Injectable } from "@nestjs/common";
import { Ticket } from "apps/apis/lib/entities/ticket";
import { Member, RoomType, TicketLog, Room } from "../../../entities";
import { Db } from "../../core/repository/db";
import { MemberTicketNumberResult, MemberHaveTicketCheck } from '../type';
import { ServiceError, TypeError, TypeOrmError } from "../../luna.error";

@Injectable()
export class TicketService {
    constructor(public db: Db) { }

    /**
     * 查询用户的ticket
     * @param openid 用户唯一编号
     */
    async memberTiketFind(openid: string): Promise<TicketLog[]> {
        if (!openid) {
            throw new TypeError(`01`, `用户唯一编号不能为空`)
        }
        const memberRepo = this.db.getConnection().getRepository(Member);
        const ticketLogRepo = this.db.getConnection().getRepository(TicketLog);
        const member = await memberRepo.findOne({ where: { openid } });
        if (!member) {
            throw new ServiceError(`02`, `用户不存在`)
        }
        return await ticketLogRepo.find({ where: { member_id: member.id }, relations: ['ticket'] })
    }

    /**
     * 所有券用户拥有多少
     * @param openid 用户编号
     */
    async memberTicketNumber(openid: string): Promise<MemberTicketNumberResult> {
        if (!openid) {
            throw new TypeError(`01`, `用户唯一编号不能为空`)
        }
        const memberRepo = this.db.getConnection().getRepository(Member);
        const ticketRepo = this.db.getConnection().getRepository(Ticket);
        const member = await memberRepo.findOne({ where: { openid }, relations: ['ticketLogs'] });
        if (!member) {
            throw new ServiceError(`02`, `用户不存在`)
        }
        const memberTicketIds = member.ticketLogs.map(t => t.ticket_Id);
        const tickets = await ticketRepo.find();
        const ticketTitleAndMemberCount = tickets.map(ticket => {
            const count = memberTicketIds.filter(id => id === ticket.id).length;
            return {
                count,
                title: ticket.title
            }
        })
        return {
            id: member.id,
            nickname: member.nickname,
            allTicketTitleAndCount: ticketTitleAndMemberCount
        }
    }

    /**
     * 检查用户有没有这个房间类型类型的卷
     * @param roomTypeId 房间编号
     * @param openid 用户编号
     */
    async memberHaveTicketCheck(where: MemberHaveTicketCheck): Promise<number> {
        if (!where.roomTypeId && !where.roomId) {
            throw new TypeError(`01`, `房间编号和房间类型编号必须提供一个`);
        }
        const memberRepo = this.db.getConnection().getRepository(Member);
        const member = await memberRepo.findOne({ where: { openid: where.openid }, relations: ['ticketLogs'] });
        if (!member || member.status === 0) {
            throw new ServiceError(`02`, `账户不存在或已被禁用`);
        }
        let roomType: RoomType | undefined;
        if (where.roomId) {
            const roomRepo = this.db.getConnection().getRepository(Room);
            const room = await roomRepo.findOne({ where: { id: where.roomId }, relations: ['roomType'] });
            if (!room) {
                throw new ServiceError(`03`, `该房间不存在`);
            }
            roomType = room.roomType;
        } else {
            const roomTypeRepo = this.db.getConnection().getRepository(RoomType);
            roomType = await roomTypeRepo.findOne({ where: { id: where.roomTypeId } });
        }
        if (!roomType || !roomType.ticketId) {
            throw new ServiceError(`04`, `该房间场地异常,请稍后重试`);
        }
        if (member.ticketLogs && member.ticketLogs.length > 0) {
            const ticketLog = member.ticketLogs.find(t => t.ticket_Id === roomType!.ticketId);
            if (ticketLog) {
                return ticketLog.id;
            }
        }
        throw new ServiceError(`05`, `您${roomType.title}场对应的的券不足,请先兑换`);
    }

    /**
     * 去除用户该房间所对应的卷
     * @param roomLimitId 房间场地
     * @param openid 用户唯一编号
     */
    async memberTicketUsed(ticketLogId: number): Promise<void> {
        if (!ticketLogId) {
            throw new TypeError(`05`, `参赛卷编号不能为空`);
        }
        const ticketLogRepo = this.db.getConnection().getRepository(TicketLog);
        try {
            await ticketLogRepo.delete({ id: ticketLogId });
            return;
        } catch (e) {
            throw new TypeOrmError(`06`, e.message)
        }
    }


}