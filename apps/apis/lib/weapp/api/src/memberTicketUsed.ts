import { Message, MessageNoData } from "../../../message";
import { Magnus, Query, Bool } from "@notadd/magnus-core";
import { TicketService } from "../../domain/src/ticketService";

interface MemberTicketCheckInput {
    openId: string;
    limitId: number;
}

interface MemberTicketCheckResult {
    result: boolean;
}

@Magnus()
export class MemberTicketCheck {

    constructor(public ticketService: TicketService){}

    /**
     * 扣除该用户对应房间类型的券
     * @param where 
     */
    @Query()
    async memberTicketUsed(where: MemberTicketCheckInput): Promise<MessageNoData>{
        try {
           await this.ticketService.memberTicketUsed(where.limitId,where.openId);
           return new Message(`B00010300`,`使用成功`);
        } catch (e) {
           return new Message(`B200103${e.code}`,`使用失败,${e.message}`)
        }
    }
}