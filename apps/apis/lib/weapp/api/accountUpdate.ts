import { Magnus, Mutation } from "@notadd/magnus-core";
import { MessageNoData } from "../../message";
import { AccountService } from "../domain/accountService";
interface AccountInput {
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
export class AccountUpdate {
  constructor(public accountService: AccountService) {}
  @Mutation()
  async accountUpdate(entity: AccountInput): Promise<MessageNoData> {
    try {
      await this.accountService.updateAccount(entity);
      return new MessageNoData("B00012000", "更新成功");
    } catch (e) {
      return new MessageNoData("B00012001", `更新失败,${e.message}`);
    }
  }
}
