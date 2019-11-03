import { Magnus, Mutation } from '@notadd/magnus-core';
import { MessageNoData } from '../../../message';
import { MemberService } from '../../domain/src/memberService';
interface MemberInput {
    openid: string;
    nickName: string;
    avatarUrl: string;
    gender: number;
    country: string;
    province: string;
    city: string;
    language: string;
}

@Magnus()
export class MemberUpdate {
    constructor(public memberService: MemberService) { }

	@Mutation()
	async memberUpdate(entity: MemberInput): Promise<MessageNoData> {
		try {
			await this.memberService.updateMember(entity);
			return new MessageNoData('B00010400', '更新成功');
		} catch (e) {
			return new MessageNoData(`B200104${e.code}`, `更新失败,${e.message}`);
		}
	}
}
