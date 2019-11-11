import { Magnus, Query } from "@notadd/magnus-core";
import { GameLogService } from "../../domain/src/gameLogService";

interface MemberGameLogsInput {
    openid: string;
}

@Magnus()
export class MemberGameLogsFind {

    constructor(public gameLogService: GameLogService) { }

    /**
     * TODO
     * @param where 
     */
    @Query()
    async memberGameLogsFind(where: MemberGameLogsInput): Promise<any> {
        await this.gameLogService.memberGameLogsFind(where.openid);
    }
}