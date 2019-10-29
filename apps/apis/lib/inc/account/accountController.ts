import { Controller, Get } from "@nestjs/common";
import { Message } from "../../message";
import { AccountService } from "./accountService";
interface LoginResult {
  openid?: string;
  session_key?: string;
  unionid?: string;
}

@Controller('account')
export class LoginController {
  constructor(public accountService: AccountService) {}

  @Get('login')
  async accountLogin(): Promise<Message<LoginResult>> {
    try {
      const res = await this.accountService.accountLogin();
      if (res.errcode) {
        return new Message<LoginResult>(`${res.errcode}`, `登录失败,${res.errmsg}`);
      }
      return new Message<LoginResult>(`B00012000`, "登录成功", res);
    } catch (e) {
      return new Message<LoginResult>(`B20012001`, `登录失败,${e.message}`);
    }
  }
}
