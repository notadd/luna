import { Controller, Get, Query } from '@nestjs/common';
import { Message } from '../../../message';
import { MemberService } from '../../domain/src/memberService';
interface LoginResult {
    openid?: string;
    session_key?: string;
    unionid?: string;
}

@Controller()
export class MemberLogin {
    constructor(public accountService: MemberService) { }

    @Get('login')
    async memberLogin(@Query('code') code: string): Promise<Message<LoginResult>> {
        try {
            const res = await this.accountService.memberLogin(code);
            await this.accountService.memberSave(res.openid);
            return new Message<LoginResult>(`B00012000`, '登录成功', res);
        } catch (e) {
            return new Message<LoginResult>(`B200101${e.code}`, `登录失败,${e.message}`);
        }
    }
}
