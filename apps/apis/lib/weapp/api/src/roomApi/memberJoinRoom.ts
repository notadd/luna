import { Magnus, Mutation } from "@notadd/magnus-core";
import { RoomService } from "../../../domain/src/roomService";
import { TicketService } from "../../../domain/src/ticketService";
import { MessageNoData } from "../../message";

interface MemberJoinRoomInput {
    /** 房间编号 */
    roomId: number;
    /** 用户标识 */
    openId: string;
}

@Magnus()
export class MemberJoinRoom {
    constructor(
        public roomService: RoomService,
        public ticketService: TicketService,
    ) { }

    /**
     * 用户加入房间,并且扣除对应的券
     * @param where 
     */
    @Mutation()
    async memberJoinRoom(where: MemberJoinRoomInput): Promise<MessageNoData> {
        try {
            const ticketLogId = await this.ticketService.memberHaveTicketCheck({
                roomId: where.roomId,
                openid: where.openId
            });
            await this.roomService.roomAddMember(where.openId, where.roomId);
            await this.ticketService.memberTicketUsed(ticketLogId);
            return new MessageNoData(`B00010200`, `添加成功`);
        } catch (e) {
            return new MessageNoData(`B200102${e.code}`, `添加失败,${e.message}`);
        }
    }
}