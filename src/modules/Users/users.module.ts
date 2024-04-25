import { Module } from '@nestjs/common';
import { usersProviders } from './users.provider';
import { DatabaseModule } from 'src/shared/database/database.module';
import { UsersRepositoryService } from 'src/shared/database/repository/user.service';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';
import { JwtModule } from '@nestjs/jwt';
import { env } from 'src/shared/config/env';

@Module({
  imports: [
    DatabaseModule,

    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [...usersProviders, UsersRepositoryService, UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
