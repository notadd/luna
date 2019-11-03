import { Injectable } from "@nestjs/common";
import { Db } from "../../core/repository/db";

@Injectable()
export class RoomViewDb {
    constructor(public db: Db){}

    async find(where: string): Promise<any[]> {
        return this.db.getConnection().query(`
            SELECT title, "isHidden", id, "password", "startType", "roomTypeId", owner_id as "ownerId", 
            create_date, "roomLimitId", "roomLimitTitle", "roomTypeTitle", join_count as "joinCount"
            FROM public.room_with_join_count ${where} order by "join_count" desc
        `);
    }
}