import { Magnus, Query } from "@notadd/magnus-core";
import { RoomService } from "../../domain/src/roomService";
import { Room } from "../../../entities/room";

interface RoomFindInput {
    id?: number;
    limitId?: number;
    roomTypeId?: number;
}

@Magnus()
export class RoomFind {
    constructor(public roomService: RoomService){}

    /**
     * 查找可进入的房间
     * @param where 查找房间的条件
     */
    @Query()
    async roomFind(where: RoomFindInput): Promise<Room[]>{
        return await this.roomService.roomFind(where);
    }
}