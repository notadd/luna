import { createConnection } from '@notadd/magnus-typeorm';
import config from './config';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import dotenv from 'dotenv';
import { install } from './install/index';
import { GameLog } from './entities/gameLog';
import { Account } from './entities/account';
import { Member } from './entities/member';
import { Room } from './entities/room';
import { RoomLimit } from './entities/roomLimit';
import { RoomType } from './entities/roomType';
import { Setting } from './entities/setting';
import { Ticket } from './entities/ticket';
import { TicketLog } from './entities/ticketLog';
import { TixianLog } from './entities/tixianLog';
async function start() {
    dotenv.config();
    const environment = config();
    await createConnection({
        type: 'postgres',
        host: environment.host || 'localhost',
        port: environment.port || 5432,
        database: environment.database || 'postgres',
        username: environment.username || 'postgres',
        password: environment.password || 'password',
        name: 'default',
        entities: [
            GameLog,
            Account,
            Member,
            Room,
            RoomLimit,
            RoomType,
            Setting,
            Ticket,
            TicketLog,
            TixianLog
        ],
        synchronize: true,
        subscribers: []
    });
    const app = await NestFactory.create(AppModule, new FastifyAdapter());
    app.listen(3004, '0.0.0.0', () => {
        install().then(res => console.log(res));
        console.log(`server ready at 0.0.0.0:3004`);
    });
}
start();
