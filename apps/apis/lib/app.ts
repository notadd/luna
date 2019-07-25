import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
@Module({
    imports: [
        GraphQLModule.forRoot({
            typePaths: [join(__dirname, 'assets/apis/magnus.graphql')]
        })
    ]
})
export class AppModule { }
