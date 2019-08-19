
import { runner } from '@luna/entities';
import { MemberInputWhere } from '@luna/entities';
interface MemberGetResult {
    	memberGet: {
	id: number;
	nickname: string;
	password: string;

};


}
export async function MemberGet(entity: MemberInputWhere): Promise<MemberGetResult> {
    const names = ["entity"];
    const args: any = {};
    for (let i = 0; i < arguments.length; i++) {
        args[names[i]] = arguments[i]
    }
    return runner<MemberGetResult>(`query MemberGet($entity: MemberInputWhere!) {
  memberGet(entity: $entity) {
    id
    nickname
    password
  }
}
`, args)
}
