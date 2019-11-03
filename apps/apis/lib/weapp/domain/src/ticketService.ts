import { Injectable } from "@nestjs/common";
import { Member, RoomLimit, TicketLog } from "../../../entities";
import { Db } from "../../core/repository/db";
import { WebAppError } from "../../webapp.error";

@Injectable()
export class TicketService {
    constructor(public db: Db){}

    /**
     * 查询用户的ticket
     * @param openid 用户唯一编号
     */
    async memberTiketFind(openid: string): Promise<TicketLog[]>{
        try {
            const memberRepo = this.db.getConnection().getRepository(Member);
            const member = await memberRepo.findOne({where: {openid}, relations: ['ticketLogs']});
            if (!member || member.status === 0) {
                throw new WebAppError(`01`,`账户已被禁用`);
            }
            return member.ticketLogs;
        } catch (e) {
            throw new WebAppError(`${e.code || `02`}`,e.message);
        }
    }

    /**
     * 去除用户该房间所对应的卷
     * @param roomLimitId 房间段位
     * @param openid 用户唯一编号
     */
    async memberTicketUsed(roomLimitId: number,openid: string): Promise<void> {
        try {
            const roomLimitRepo = this.db.getConnection().getRepository(RoomLimit);
            const ticketLogRepo = this.db.getConnection().getRepository(TicketLog);
            const ticketLogs = await this.memberTiketFind(openid);
            if (ticketLogs.length > 0) {
                const roomLimit = await roomLimitRepo.findOne({where: {id: roomLimitId}});
                if (roomLimit && roomLimit.ticketId) {
                    const ticket = ticketLogs.find(t => t.ticket_Id === roomLimit.ticketId)
                    if (ticket) {
                        await ticketLogRepo.delete({id: ticket.id});
                        return;
                    }
                }
            } 
            throw new WebAppError(`03`, `您的券不足`);
        } catch (e) {
            throw new WebAppError(`${e.code || `04`}`, e.message);
        }
    }


}