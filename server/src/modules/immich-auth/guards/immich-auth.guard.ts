import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class ImmichAuthGuard extends AuthGuard(['oauth2', 'jwt']) {}