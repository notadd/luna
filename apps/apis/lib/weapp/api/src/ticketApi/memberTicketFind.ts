import { Magnus, Query } from '@notadd/magnus-core';
import { TicketLog } from '../../../../entities';
import { Messages } from '../../message';
import { TicketService } from '../../../domain/src/ticketService';

@Magnus()
export class MemberTicketFind {

    constructor(public ticketService: TicketService){}

    /**
     * 查询用户拥有的所有类型的参赛券
     * @param openid 用户唯一编号
     */
    @Query()
    async memberTicketLogFind(openid: string): Promise<Messages<TicketLog>> {
        try {
            const ticketLogs = await this.ticketService.memberTiketFind(openid);
            return new Messages<TicketLog>(`B00012000`,`查询成功`,ticketLogs);
        } catch (e) {
            return new Messages<TicketLog>(`B200120${e.code}`,`查询失败,${e.message}`, []);
        }
    }

    
}
