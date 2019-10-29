import { Controller, Get, Post, Body, Param, Query } from "@nestjs/common";
import { Message } from "../../message";
import { AccountService } from "../domain/accountService";
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
      if (res.errcode) {
        return new Message<LoginResult>(`B200${res.errcode}`, `登录失败,${res.errmsg}`);
      }
      await this.accountService.saveAccount(res.openid);
      return new Message<LoginResult>(`B00012000`, "登录成功", res);
    } catch (e) {
      return new Message<LoginResult>(`B20012001`, `登录失败,${e.message}`);
    }
  }
}
