import { Module } from "@nestjs/common";
import { AccountLogin } from "./accountLogin";
import { DomainModule } from "../domain";
import { AccountSave } from "./accountSave";
@Module({
  imports: [DomainModule],
  controllers: [AccountLogin],
  providers: [AccountSave]
})
export class ApiModule {}
