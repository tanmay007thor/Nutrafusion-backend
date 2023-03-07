import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  private readonly JWT_SECRET = 'your_jwt_secret';

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];

    try {
      jwt.verify(token, this.JWT_SECRET);
      return true;
    } catch (error) {
      return false;
    }
  }
}