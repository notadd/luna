import { Magnus, Query } from '@notadd/magnus-core';
import { RoomService } from '../../../domain/src/roomService';
import { Message } from '../../message';

interface RoomFindOneInput {
    roomId: number;
}

interface RoomsFindOneResult {
    id: number;
    title: string;
    password: string;
    roomTypeId: number;
    roomTypeTitle: string;
    roomLimitId: number;
    roomLimitTitle: string;
    ownerId: number;
    isHidden: boolean;
    members: RoomFindOneMember[];
    /**
     * 暂定 1自动 2手动
     */
    startType: number;
    createDate: string;
    joinCount: number;
}

interface RoomFindOneMember {
    id: number;
    nickname?: string;
    avatarUrl?: string;
}

@Magnus()
export class RoomFindOne {

    constructor(public roomService: RoomService) { }

    @Query()
    async roomFindOne(where: RoomFindOneInput): Promise<Message<RoomsFindOneResult>> {
        try {
            const room = await this.roomService.roomFindOne(where.roomId);
            return new Message(`B00010400`, `查询成功`, room);
        } catch (e) {
            return new Message(`B200104${e.code}`, `查询失败,${e.message}`);
        }
    }

}