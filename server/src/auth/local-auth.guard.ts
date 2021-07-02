import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log('localGuard (localGuard => strategy)');
    const can = await super.canActivate(context);
    if (can) {
      const request = context.switchToHttp().getRequest();
      console.log(
        `localGuard canActivate login for cookie (localGuard => serialize user)`,
      );
      await super.logIn(request);
    }
    return true;
  }
}
