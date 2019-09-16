import { GraphqlModule } from '@magnus-plugins/nest-graphql-fastify';
import { Module } from '@nestjs/common';
import dotenv from 'dotenv';
const metadata = require('./assets/apis/magnus.metadata.json');
const server = require('./assets/apis/magnus.server.json');
const entity = require('./assets/apis/magnus.entity.json');
import { EntityController } from './runner/controller';
import { TreeController } from './runner/tree';
@Module({
    imports: [
        GraphqlModule.forRoot({
            metadata,
            typeDefs: server,
            decorators: {},
            entities: entity
        })
    ],
    providers: [
        EntityController,
        TreeController
    ]
})
export class AppModule {
    async onModuleInit() {
        dotenv.config();
    }
}
