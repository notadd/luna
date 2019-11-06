import { Magnus, Query } from '@notadd/magnus-core';
import { RoomService } from '../../domain/src/roomService';
import { Message } from '../../../message';

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
    member: RoomFindOneMember[];
    /**
     * 暂定'1'自动 '2'手动
     */
    startType: string;
    createDate: string;
    joinCount: number;
}

interface RoomFindOneMember {
    id: number;
    nickname: string;
    avatarUrl: string;
}

@Magnus()
export class RoomFindOne {

    constructor(public roomService: RoomService){}

    @Query()
    async roomFindOne(where: RoomFindOneInput): Promise<Message<RoomsFindOneResult>> {
        try {
            const room = await this.roomService.roomFindOne(where.roomId);
            return new Message(`B00010700`, `查询成功`, room);
        } catch (e) {
            return new Message(`B000107${e.code}`,`查询失败`)
        }
    }
        
}