import { Module } from '@nestjs/common';
import { WebAppDomainModule } from '../domain/domain.module';
import { MemberLogin } from './src/memberLogin';
import { MemberUpdate } from './src/memberUpdate';
import { RoomsFind } from './src/roomsFind';
import { RoomCreate } from './src/roomCreate';
import { MemberTicketFind } from './src/memberTicketFind';
import { MemberTicketCheck } from './src/memberTicketUsed';
import { RoomAddMember } from './src/roomAddMember';
import { RoomFindOne } from './src/roomFindOne';
@Module({
  imports: [WebAppDomainModule],
  controllers: [MemberLogin],
  providers: [
    MemberUpdate,
    RoomsFind,
    RoomCreate,
    MemberTicketFind,
    MemberTicketCheck,
    RoomAddMember,
    RoomFindOne
  ]
})
export class WebAppApiModule { }
