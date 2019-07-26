import { Module, DynamicModule, Inject } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { bootstrap as magnusBootstrap } from '@notadd/magnus-core';
import { Controller } from './entities/controller';
import { createConnection } from 'typeorm';
const metadata = require('./assets/entities/magnus.metadata.json');
const server = require('./assets/entities/magnus.server.json');
const entity = require('./assets/entities/magnus.entity.json');
import {
    Member, Room, RoomType, Setting, TixianLog, GameLog, Ticket, TicketLog
} from './entities/index';
import { Magnus } from './runner';
export * from './runner';
import { ErrorsInterceptor } from './errorsInterceptor';
require('dotenv').config();

@Module({
    imports: [],
    providers: [Magnus, { provide: APP_INTERCEPTOR, useClass: ErrorsInterceptor }],
    exports: [Magnus]
})
export class EntitiesModule {
    static environment: any;
    constructor(@Inject(`ENVIRONMENT`) public environment: any) { }
    static forRoot(environment: any = {}): DynamicModule {
        environment = environment || {};
        environment.db = environment.db || {};
        return {
            module: EntitiesModule,
            providers: [
                {
                    provide: `ENVIRONMENT`,
                    useValue: environment
                }
            ]
        };
    }
    async onModuleInit() {
        const environment = this.environment;
        await createConnection({
            type: environment.db.type || 'postgres',
            host: environment.db.host || '106.12.10.139',
            port: environment.db.port || 5432,
            database: environment.db.database || 'magnus',
            username: environment.db.username || 'magnus',
            password: environment.db.password || 'magnus',
            entities: [
                Member, Room, RoomType, Setting, TixianLog, GameLog, Ticket, TicketLog
            ],
            synchronize: environment.db.synchronize || true
        });
        return await magnusBootstrap(
            metadata,
            server,
            {
                Controller
            },
            entity,
            this.environment.magnus.port
        );
    }
}
