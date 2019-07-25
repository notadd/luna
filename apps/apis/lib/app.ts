import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { EntitiesModule } from '@luna/entities';
@Module({
    imports: [
        EntitiesModule.forRoot({
            magnus: {
                port: 4000
            }
        }),
        GraphQLModule.forRoot({
            typePaths: [join(__dirname, 'assets/apis/magnus.graphql')]
        })
    ]
})
export class AppModule { }
