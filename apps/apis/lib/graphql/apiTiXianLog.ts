
import { runner } from '@luna/entities';
import { MemberInputWhere, MemberInputOrder, PageLimitInput, RoomInputWhere, RoomInputOrder, RoomTypeInputWhere, RoomTypeInputOrder, TixianLogInputWhere, TixianLogInputOrder } from '@luna/entities';
interface FindTiXianLogResult {
    	findTixianLog: {
	id: number;
	count: number;
	status: number;
	createDate: string;
	getMember: {
	id: number;
	nickname: string;

};

}[];
	countTixianLog: number;


}
export async function findTiXianLog(entity: TixianLogInputWhere, order: TixianLogInputOrder, limit?: PageLimitInput): Promise<FindTiXianLogResult> {
    const names = ["entity","order","limit"];
    const args: any = {};
    for (let i = 0; i < arguments.length; i++) {
        args[names[i]] = arguments[i]
    }
    return runner<FindTiXianLogResult>(`query findTiXianLog($entity: TixianLogInputWhere!, $order: TixianLogInputOrder!, $limit: PageLimitInput) {
  findTixianLog(entity: $entity, order: $order, limit: $limit) {
    id
    count
    status
    createDate
    getMember {
      id
      nickname
    }
  }
  countTixianLog
}
`, args)
}
