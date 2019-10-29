import { Module } from "@nestjs/common";
import { AccountService } from "./accountService";

@Module({
    providers: [AccountService],
    exports: [AccountService]
})
export class DomainModule { }