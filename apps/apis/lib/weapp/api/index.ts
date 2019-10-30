import { Module } from "@nestjs/common";
import { AccountLogin } from "./src/accountLogin";
import { DomainModule } from "../domain";
import { AccountSave } from "./src/accountSave";
@Module({
  imports: [DomainModule],
  controllers: [AccountLogin],
  providers: [AccountSave]
})
export class ApiModule {}
