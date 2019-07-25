import { Transport, ClientOptions } from '@nestjs/microservices';
import { join } from 'path';
export const entitiesOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        url: '192.168.0.101:3000',
        package: 'entities',
        protoPath: join(__dirname, 'assets/entities/magnus.proto'),
    },
};
