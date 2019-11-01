import { Module } from '@nestjs/common';
import { AuthImpl } from './lib';
import { Auth } from '../core/lib';
import { Db } from '../core/repository/db';
import { DbImpl } from './repository/dbImpl';
@Module({
  providers: [
    {
      provide: Auth,
      useClass: AuthImpl
    },
    {
      provide: Db,
      useClass: DbImpl
    }
  ],
  exports: [
    {
      provide: Auth,
      useClass: AuthImpl
    },
    {
      provide: Db,
      useClass: DbImpl
    }
  ]
})
export class WebAppBasicModule {}
