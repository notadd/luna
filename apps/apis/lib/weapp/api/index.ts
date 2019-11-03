import { Module } from '@nestjs/common';
import { WebAppDomainModule } from '../domain/domain.module';
import { MemberLogin } from './src/memberLogin';
import { MemberUpdate } from './src/memberUpdate';
import { RoomsFind } from './src/roomsFind';
@Module({
  imports: [WebAppDomainModule],
  controllers: [MemberLogin],
  providers: [MemberUpdate,RoomsFind]
})
export class WebAppApiModule {}
