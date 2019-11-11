import { Module } from '@nestjs/common';
import { WebAppDomainModule } from '../domain/domain.module';
import { MemberDetailFind } from './src/memberDetailFind';
import { MemberLogin } from './src/memberLogin';
import { MemberUpdate } from './src/memberUpdate';
import { MemberJoinRoom } from './src/roomApi/memberJoinRoom';
import { RoomCreate } from './src/roomApi/roomCreate';
import { RoomFindOne } from './src/roomApi/roomFindOne';
import { RoomPasswordVerify } from './src/roomApi/roomPasswordVefiry';
import { RoomRemoveMember } from './src/roomApi/roomRemoveMember';
import { RoomsFind } from './src/roomApi/roomsFind';
import { RoomTypesFind } from './src/roomApi/roomTypesFind';
import { MemberTicketFind } from './src/ticketApi/memberTicketFind';
import { MemberTicketNumber } from './src/ticketApi/memberTicketNumber';
import { MemberBindSteamId } from './src/memberBindSteamId';
import { MemberGameLogsFind } from './src/memberGameLogsFind';
@Module({
	imports: [WebAppDomainModule],
	controllers: [MemberLogin],
	providers: [
		MemberJoinRoom,
		RoomsFind,
		RoomCreate,
		RoomFindOne,
		RoomTypesFind,
		RoomPasswordVerify,
		RoomRemoveMember,
		MemberUpdate,
		MemberTicketFind,
		MemberTicketNumber,
		MemberDetailFind,
		MemberBindSteamId,
		MemberGameLogsFind
	]
})
export class WebAppApiModule { }
