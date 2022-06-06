import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../api-v1/user/entities/user.entity';
import {ImmichJwtService} from "../modules/immich-auth/immich-jwt.service";

@Injectable()
export class AdminRolesGuard implements CanActivate {
  constructor(
      private reflector: Reflector,
      private immichJwtService: ImmichJwtService,
      @InjectRepository(UserEntity)
      private userRepository: Repository<UserEntity>,
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    if (!request.user) return false;
    return request.user.isAdmin;
  }
}