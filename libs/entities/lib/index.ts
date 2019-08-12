import { DynamicModule, Inject, Module } from '@nestjs/common';
import { bootstrap } from '@notadd/magnus-apollo';
import { ConfigService } from 'nestjs-config';
import { createConnection, DefaultNamingStrategy } from 'typeorm';
import { Controller } from './entities/controller';
import { GameLog, Member, Room, RoomType, Setting, Ticket, TicketLog, TixianLog } from './entities/index';
import { Magnus } from './runner';
export * from './mangus/magnusWeb/magnus.server';
export class MagnusNamingStrategy extends DefaultNamingStrategy {
    columnName(propertyName: string, customName: string, embeddedPrefixes: string[]): string {
        return customName || propertyName;
    }
}
const metadata = require('./assets/magnusWeb/magnus.metadata.json');
const server = require('./assets/magnusWeb/magnus.server.json');
const entity = require('./assets/magnusWeb/magnus.entity.json');

import * as entities from './entities'
export * from './runner';

@Module({
    providers: [Magnus]
})
export class MagnusWebModule {
    constructor(@Inject(`MAGNUS`) public magnus: number) { }
    static forRoot(magnus: number): DynamicModule {
        return {
            module: MagnusWebModule,
            providers: [
                {
                    provide: 'MAGNUS',
                    useValue: magnus
                }
            ]
        };
    }
    async onModuleInit() {
        // const environment = this.magnus;
        await createConnection({
            type: 'postgres',
            host: '106.12.10.139',
            port: 5432,
            database: 'magnus',
            username: 'magnus',
            password: 'magnus',
            entities: [
                GameLog,
                Member,
                Room,
                RoomType,
                Setting,
                Ticket,
                TicketLog,
                TixianLog
            ],
            synchronize: true,
            namingStrategy: new MagnusNamingStrategy()
            // debug: true,
            // logger: 'advanced-console',
            // logging: 'all'
        });
        return await bootstrap(
            metadata,
            server,
            {
                Controller
            },
            entity,
            {
                GameLog,
                Member,
                Room,
                RoomType,
                Setting,
                Ticket,
                TicketLog,
                TixianLog
            },
            this.magnus
        );
    }
}