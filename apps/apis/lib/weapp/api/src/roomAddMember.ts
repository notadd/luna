import { Magnus, Mutation } from "@notadd/magnus-core";
import { RoomService } from "../../domain/src/roomService";
import { MessageNoData } from "../../../message";

interface RoomAddMemberInput {
    /** 房间编号 */
    roomId: number;
    /** 用户标识 */
    openId: string;
}

@Magnus()
export class RoomAddMember {
    constructor(public roomService: RoomService){}

    /**
     * 用户加入房间,并且扣除对应的券
     * @param where 
     */
    @Mutation()
    async RoomAddMember(where: RoomAddMemberInput): Promise<MessageNoData> {
        try {
            await this.roomService.roomAddMember(where.openId,where.roomId);
            return new MessageNoData(`B20010500`, `添加成功`);
        } catch (e) {
            return new MessageNoData(`B200105${e.code}`, e.message);
        }
    }
}