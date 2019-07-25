import {
    ExecutionContext,
    HttpException,
    Injectable,
    Logger,
    NestInterceptor,
    CallHandler
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()
export class ErrorsInterceptor<T = any, R = any> implements NestInterceptor<T, R> {
    intercept(
        context: ExecutionContext,
        next: CallHandler<T>
    ): Observable<R> | Promise<Observable<R>> {
        const gqlCtx = GqlExecutionContext.create(context);
        const logger = new Logger('API Logger');
        logger.log(
            `request_path: ${context.getHandler().name}, request_param: ${JSON.stringify(
                gqlCtx.getArgs()
            )}`
        );
        return next.handle().pipe(
            catchError(
                (err, caught): any => {
                    if (err instanceof HttpException) {
                        return Promise.resolve({
                            code: err.getStatus(),
                            message: err.getResponse()
                        });
                    }
                    if (err.details) {
                        return Promise.resolve({
                            code: err.code ? err.code : 500,
                            message: err.details
                        });
                    }
                    return Promise.resolve({
                        code: 500,
                        message: err.toString()
                    });
                }
            )
        ) as Observable<R>;
    }
}
