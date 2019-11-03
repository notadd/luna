import { Module } from '@nestjs/common';
import { AuthImpl } from './lib';
import { Auth } from '../core/lib';
import { Db } from '../core/repository/db';
import { DbImpl } from './repository/dbImpl';
import { RoomViewDb } from './lib/roomViewDb';
@Module({
  providers: [
    {
      provide: Auth,
      useClass: AuthImpl
    },
    {
      provide: Db,
      useClass: DbImpl
    },
    RoomViewDb
  ],
  exports: [
    {
      provide: Auth,
      useClass: AuthImpl
    },
    {
      provide: Db,
      useClass: DbImpl
    },
    RoomViewDb
  ]
})
export class WebAppBasicModule {}
