import { Module } from '@nestjs/common';
import { WebAppBasicModule } from '../basic/basic.module';
import { MemberService } from './src/memberService';
import { RoomService } from './src/roomService';
import { TicketService } from './src/ticketService';

@Module({
	imports: [WebAppBasicModule],
	providers: [MemberService,RoomService,TicketService],
	exports: [MemberService,RoomService,TicketService]
})
export class WebAppDomainModule { }
