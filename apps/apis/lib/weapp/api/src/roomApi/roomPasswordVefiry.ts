import { RoomService } from "../../../domain/src/roomService";
import { Message } from "../../message";

interface RoomPasswordVerifyInput {
    /** 房间编号 */
    roomId: number;
    /** 房间密码 */
    password: string;
}

interface RoomPasswordVerifyResult {
    /** 返回结果,true/false */
    result: boolean;
}

export class RoomPasswordVerify {
    constructor(public roomService: RoomService) { }

    /**
     * 验证房间密码是否正确
     */
    async roomPasswordVerify(params: RoomPasswordVerifyInput): Promise<Message<RoomPasswordVerifyResult>> {
        try {
            const result = await this.roomService.verifyRoomPassword(params.roomId, params.password);
            return new Message(`B00010500`, `验证通过`, { result });
        } catch (e) {
            return new Message(`B200105${e.code}`, `验证失败,${e.message}`, { result: false });
        }
    }
}