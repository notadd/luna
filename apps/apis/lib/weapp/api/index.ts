import { Module } from "@nestjs/common";
import { WebAppDomainModule } from "../domain/domain.module";
import { AccountLogin } from "./src/accountLogin";
import { AccountUpdate } from "./src/accountUpdate";
@Module({
  imports: [WebAppDomainModule],
  controllers: [AccountLogin],
  providers: [AccountUpdate]
})
export class WebAppApiModule {}
