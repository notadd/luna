import { Transport, ClientOptions } from '@nestjs/microservices';
import { join } from 'path';
export const apisOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        url: '192.168.0.101:3000',
        package: 'apis',
        protoPath: join(__dirname, 'assets/apis/magnus.proto'),
    },
};
