
import { runner } from '@luna/entities';
import { MemberInputWhere, MemberInputOrder, PageLimitInput, RoomTypeInputWhere, RoomTypeInputOrder } from '@luna/entities';
interface FindRoomTypeResult {
    	findRoomType: {
	id: number;
	title: string;
	getRooms: {
	id: number;

}[];

}[];


}
export async function findRoomType(entity: RoomTypeInputWhere, order: RoomTypeInputOrder): Promise<FindRoomTypeResult> {
    const names = ["entity","order"];
    const args: any = {};
    for (let i = 0; i < arguments.length; i++) {
        args[names[i]] = arguments[i]
    }
    return runner<FindRoomTypeResult>(`query findRoomType($entity: RoomTypeInputWhere!, $order: RoomTypeInputOrder!) {
  findRoomType(entity: $entity, order: $order) {
    id
    title
    getRooms {
      id
    }
  }
}
`, args)
}
