import { Magnus, Mutation } from "@notadd/magnus-core";
import { RoomService } from "../../domain/src/roomService";
import { Message } from "../../../message";
import { Room } from "../../../entities";
import { TicketService } from "../../domain/src/ticketService";

interface RoomCreateInput {
    title: string;
    password: string;
    openId: string;
    /** 场地黄金白银青铜 */
    roomTypeId: number;
    /** 段位 */
    roomLimitId: number;
    isHidden: boolean;
    startType: string;
}

@Magnus()
export class RoomCreate {
    constructor(
        public roomService: RoomService,
        public ticketService: TicketService
    ){}

    /**
     * 创建房间，并且扣除创建该房间需要的券 TODO 当前没有限制房间数量
     * @param entity 
     */
    @Mutation()
    async roomCreate(entity: RoomCreateInput): Promise<Message<Room>>{
        try {
            const room = await this.roomService.roomCreate(entity);
            await this.ticketService.memberTicketUsed(entity.roomLimitId, entity.openId);
            return new Message<Room>(`B00010600`,`创建成功`, room);
        } catch (e) {
            return new Message<Room>(`B000106${e.code}`,`创建失败,${e.message}`);
        }
    }
}