import { Module } from '@nestjs/common';
import { WebAppBasicModule } from '../basic/basic.module';
import { MemberService } from './src/memberService';
import { RoomService } from './src/roomService';

@Module({
    imports: [WebAppBasicModule],
    providers: [MemberService, RoomService],
    exports: [MemberService, RoomService]
})
export class WebAppDomainModule { }
