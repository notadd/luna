import { Module } from "@nestjs/common";
import { AccountLogin } from "./accountLogin";
import { DomainModule } from "../domain";
import { AccountUpdate } from "./accountUpdate";
@Module({
  imports: [DomainModule],
  controllers: [AccountLogin],
  providers: [AccountUpdate]
})
export class ApiModule {}
