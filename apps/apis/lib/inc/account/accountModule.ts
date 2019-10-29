import { Module } from "@nestjs/common";
import { LoginController } from "./accountController";
import { AccountService } from "./accountService";

@Module({
    providers: [AccountService],
    controllers: [LoginController]
})
export class AccountModule {}