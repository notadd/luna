
import { runner } from '@luna/entities';
import { MemberInputWhere, MemberInputOrder, PageLimitInput, RoomInputWhere, RoomInputOrder } from '@luna/entities';
interface FindRoomResult {
    	findRoom: {
	id: number;
	ownerId: number;
	status: number;
	getOwner: {
	id: number;
	nickname: string;

};
	getMembers: {
	id: number;
	nickname: string;

}[];
	createDate: string;

}[];
	countRoom: number;


}
export async function findRoom(entity: RoomInputWhere, order: RoomInputOrder, limit?: PageLimitInput): Promise<FindRoomResult> {
    const names = ["entity","order","limit"];
    const args: any = {};
    for (let i = 0; i < arguments.length; i++) {
        args[names[i]] = arguments[i]
    }
    return runner<FindRoomResult>(`query findRoom($entity: RoomInputWhere!, $order: RoomInputOrder!, $limit: PageLimitInput) {
  findRoom(entity: $entity, order: $order, limit: $limit) {
    id
    ownerId
    status
    getOwner {
      id
      nickname
    }
    getMembers {
      id
      nickname
    }
    createDate
  }
  countRoom
}
`, args)
}
