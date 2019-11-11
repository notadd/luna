import { Magnus } from "@notadd/magnus-core";
import { RoomService } from "../../../domain/src/roomService";
import { MessageNoData } from "../../message";

interface RoomRemoveMemberInput {
    roomId: number;
    outOpenId: string;
}

@Magnus()
export class RoomRemoveMember {
    constructor(public roomService: RoomService) { }

    async roomRemoveMember(where: RoomRemoveMemberInput): Promise<MessageNoData> {
        try {
            await this.roomService.roomRemoveMember(where.roomId, where.outOpenId);
            return new MessageNoData(`B00010600`, `移出成功`)
        } catch (e) {
            return new MessageNoData(`B200106${e.code}`, `移出失败,${e.message}`);
        }
    }
}