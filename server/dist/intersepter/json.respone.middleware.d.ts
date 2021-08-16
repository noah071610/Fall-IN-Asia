import { Observable } from 'rxjs';
import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
export declare class JsonResponeGenerator implements NestInterceptor {
    intercept(ctx: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>>;
}
