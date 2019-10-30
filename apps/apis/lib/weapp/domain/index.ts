import { Module } from "@nestjs/common";
import { AccountService } from "./src/accountService";

@Module({
    providers: [AccountService],
    exports: [AccountService]
})
export class DomainModule { }