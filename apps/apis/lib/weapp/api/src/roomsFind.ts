import { Magnus, Query } from "@notadd/magnus-core";
import { RoomService } from "../../domain/src/roomService";
import { Messages } from "../../../message";

interface RoomsFindInput {
    title?: string;
    roomLimitId?: number;
    roomTypeId?: number;
}

interface RoomsFindResult {
    id: number;
    title: string;
    password: string;
    roomTypeId: number;
    roomTypeTitle: string;
    roomLimitId: number;
    roomLimitTitle: string;
    ownerId: number;
    joinCount: number;
}

@Magnus()
export class RoomsFind {
    constructor(public roomService: RoomService) { }

    /**
     * 查找可进入的房间
     * @param where 查找房间的条件
     */
    @Query()
    async roomsFind(where: RoomsFindInput): Promise<Messages<RoomsFindResult>> {
        try {
            const rooms = await this.roomService.roomFind(where);
            return new Messages<RoomsFindResult>(`B00010800`,`查询成功`,rooms)
        } catch (e) {
            return new Messages<RoomsFindResult>(`B200108${e.code}`,`查询失败,${e.message}`,[])
        }
    }
}