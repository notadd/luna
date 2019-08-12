import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { MagnusWebModule } from '@luna/entities';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
@Module({
    imports: [
        MagnusWebModule.forRoot(4000),
        GraphQLModule.forRoot({
            typePaths: [join(__dirname, 'assets/apis/magnus.graphql')]
        })
    ],
    providers: [AppResolver, AppService]
})
export class AppModule { }
