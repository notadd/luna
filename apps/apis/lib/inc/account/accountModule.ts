import { Module } from "@nestjs/common";
import { LoginController } from "./accountController";

@Module({
    controllers: [LoginController]
})
export class AccountModule {}