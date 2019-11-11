import { Magnus } from "@notadd/magnus-core";
import { MemberService } from "../../domain/src/memberService";
import { Message } from "../message";

interface MemberDetailFindInput {
    openid: string;
}

interface MemberDetailFindResult {
    id: number;
    /** 用户名 */
    nickname: string;
    /** 用户头像地址 */
    avatarUrl: string;
    /** 国家 */
    country?: string;
    /** 省份 */
    province?: string;
    /** 城市 */
    city?: string;
    /** 状态 0禁用 1正常 */
    status: number;
    /** 余额 */
    fee: number;
    /** 金币 */
    fee2: number;
    /** 钻石 */
    fee3: number;
    /** steamId */
    steamId: string;
    /** 段位 */
    level: string;
    /** 创建时间 */
    createDate: string;
}

@Magnus()
export class MemberDetailFind {
    constructor(public memberService: MemberService) { }

    /**
     * 查找用户详情
     * @param where 查询条件,用户openid
     */
    async memberDetailFind(where: MemberDetailFindInput): Promise<Message<MemberDetailFindResult>> {
        try {
            const member = await this.memberService.memberDetail(where.openid);
            return new Message(`B00013100`, `查询成功`, member);
        } catch (e) {
            return new Message(`B200131${e.code}`, `查询失败`);
        }

    }
}