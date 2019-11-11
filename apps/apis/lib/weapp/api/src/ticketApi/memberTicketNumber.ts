import { Magnus, Query } from "@notadd/magnus-core";
import { TicketService } from "../../../domain/src/ticketService";
import { Message } from "../../message";

interface MemberTicketNumberInput {
    openid: string;
}

interface TicketTitleAndCount {
    /** 卷的名字 */
    title: string;
    /** 卷的数量 */
    count: number;
}

interface MemberTicketNumberResult {
    /** 用户的id */
    id: number;
    /** 用户的名字 */
    nickname: string;
    allTicketTitleAndCount: TicketTitleAndCount[]
}

@Magnus()
export class MemberTicketNumber {
    constructor(public ticketService: TicketService) { }
    /**
     * 用户名字,拥有了多少券
     * @param where 查询条件,用户信息
     */
    @Query()
    async memberTicketNumber(where: MemberTicketNumberInput): Promise<Message<MemberTicketNumberResult>> {
        try {
            const result = await this.ticketService.memberTicketNumber(where.openid);
            return new Message<MemberTicketNumberResult>(`B20012100`, `查询成功`, result);
        } catch (e) {
            return new Message<MemberTicketNumberResult>(`B200121${e.code}`, `查询失败`);
        }
    }
}