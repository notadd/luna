
import { runner } from '@luna/entities';
import { MemberInputWhere, MemberInputOrder, PageLimitInput } from '@luna/entities';
interface FindAllMemberResult {
    	findMember: {
	id: number;
	nickname: string;
	avatar: string;
	mobile: string;
	openid: string;
	fee: number;
	fee2: number;
	fee3: number;
	getGameLogs: {
	id: number;
	status: number;

}[];

}[];
	countMember: number;


}
export async function findAllMember(entity: MemberInputWhere, order: MemberInputOrder, limit: PageLimitInput): Promise<FindAllMemberResult> {
    const names = ["entity","order","limit"];
    const args: any = {};
    for (let i = 0; i < arguments.length; i++) {
        args[names[i]] = arguments[i]
    }
    return runner<FindAllMemberResult>(`query findAllMember($entity: MemberInputWhere!, $order: MemberInputOrder!, $limit: PageLimitInput!) {
  findMember(entity: $entity, order: $order, limit: $limit) {
    id
    nickname
    avatar
    mobile
    openid
    fee
    fee2
    fee3
    getGameLogs {
      id
      status
    }
  }
  countMember
}
`, args)
}
