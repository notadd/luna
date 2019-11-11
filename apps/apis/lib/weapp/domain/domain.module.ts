import { Module } from '@nestjs/common';
import { WebAppBasicModule } from '../basic/basic.module';
import { MemberService } from './src/memberService';
import { RoomService } from './src/roomService';
import { TicketService } from './src/ticketService';
import { GameLogService } from './src/gameLogService';

@Module({
	imports: [WebAppBasicModule],
	providers: [MemberService, RoomService, TicketService, GameLogService],
	exports: [MemberService, RoomService, TicketService, GameLogService]
})
export class WebAppDomainModule { }
