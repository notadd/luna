import { Module } from "@nestjs/common";
import { WebAppError } from "../webapp.error";
import { AccountService } from "./src/accountService";
import { Auth } from "../core/lib";
import { AuthImpl } from "../basic/lib";
import { WebAppBasicModule } from "../basic/basic.module";

@Module({
  imports: [WebAppBasicModule],
  providers: [
    AccountService
  ],
  exports: [AccountService]
})
export class WebAppDomainModule {}
