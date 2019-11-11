import { Injectable } from "@nestjs/common";
import { Db } from "../../core/repository/db";
import { GameLog, Member, RoomType } from "../../../entities";
import { ServiceError, TypeError } from "../../luna.error";

@Injectable()
export class GameLogService {

    constructor(public db: Db) { }

    /**
     * 查询用户的游戏记录
     * @param openid 用户唯一编号
     */
    async memberGameLogsFind(openid: string): Promise<any> {
        if (!openid) {
            throw new TypeError(`01`, `用户唯一编号不能为空`);
        }
        const gameLogRepo = this.db.getConnection().getRepository(GameLog);
        const memberRepo = this.db.getConnection().getRepository(Member);
        const roomTypeRepo = this.db.getConnection().getRepository(RoomType);
        const member = await memberRepo.findOne({ where: { openid } });
        if (!member) {
            throw new ServiceError(`02`, `用户不存在`);
        }
        const roomTypes = await roomTypeRepo.find();
        const gameLogs = await gameLogRepo.find({
            where: { memberId: member.id },
            order: { createDate: "DESC" },
            relations: ['room','roomType']
        });
        
    }
}