import { Magnus, Mutation } from "@notadd/magnus-core";
import { MemberService } from "../../domain/src/memberService";
import { MessageNoData } from "../message";

interface MemberBindSteamIdInput {
    openid: string;
    steamId: string;
}

@Magnus()
export class MemberBindSteamId {
    constructor(public memberSerice: MemberService) { }

    /**
     * 用户绑定steamId
     * @param input 用户openid和steamId
     */
    @Mutation()
    async memberBindSteamId(input: MemberBindSteamIdInput): Promise<MessageNoData> {
        try {
            // 未校验steamId是否存在
            await this.memberSerice.memberBindSteamId(input.openid, input.steamId);
            return new MessageNoData(`B00013000`, `绑定成功`);
        } catch (e) {
            return new MessageNoData(`B200130${e.code}`, `绑定失败,${e.message}`);
        }
    }
}