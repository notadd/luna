import { Magnus, Mutation } from "@notadd/magnus-core";
import { Room } from "../../../../entities";
import { RoomService } from "../../../domain/src/roomService";
import { TicketService } from "../../../domain/src/ticketService";
import { Message } from "../../message";

interface RoomCreateInput {
    title: string;
    password: string;
    openId: string;
    /** 场地黄金白银青铜 */
    roomTypeId: number;
    /** 段位 */
    roomLimitId: number;
    isHidden: boolean;
    startType: number;
}

@Magnus()
export class RoomCreate {
    constructor(
        public roomService: RoomService,
        public ticketService: TicketService
    ) { }

    /**
     * 创建房间，并且扣除创建该房间需要的券加入房间 TODO 当前没有限制房间数量
     * @param entity 
     */
    @Mutation()
    async roomCreate(entity: RoomCreateInput): Promise<Message<Room>> {
        try {
            const ticketLogId = await this.ticketService.memberHaveTicketCheck({
                openid: entity.openId,
                roomTypeId: entity.roomTypeId
            });
            const room = await this.roomService.roomCreate(entity);
            await this.ticketService.memberTicketUsed(ticketLogId);
            return new Message<Room>(`B00010300`, `创建成功`, room);
        } catch (e) {
            return new Message<Room>(`B200103${e.code}`, `创建失败,${e.message}`);
        }
    }
}