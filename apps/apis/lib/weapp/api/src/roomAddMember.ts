import { Magnus } from "@notadd/magnus-core";

interface RoomAddMemberInput {
    /** 房间编号 */
    roomId: number;
    /** 用户标识 */
    openId: string;
}

@Magnus()
export class RoomAddMember {
    constructor(){}

    /**
     * 用户加入房间,并且扣除对应的券
     * @param where 
     */
    async RoomAddMember(where: RoomAddMemberInput): Promise<any> {
        return {};
    }
}