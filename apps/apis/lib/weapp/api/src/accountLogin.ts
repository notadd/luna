import { Controller, Get, Query } from "@nestjs/common";
import { Message } from "../../../message";
import { AccountService } from "../../domain/src/accountService";
interface LoginResult {
  openid?: string;
  session_key?: string;
  unionid?: string;
}

@Controller()
export class AccountLogin {
  constructor(public accountService: AccountService) {}

  @Get('login')
  async accountLogin(@Query('code') code: string): Promise<Message<LoginResult>> {
    try {
      const res = await this.accountService.accountLogin(code);
      await this.accountService.saveAccount(res.openid);
      return new Message<LoginResult>(`B00012000`, "登录成功", res);
    } catch (e) {
      return new Message<LoginResult>(`B200101${e.code}`, `登录失败,${e.message}`);
    }
  }
}
