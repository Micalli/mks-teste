import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './shared/database/database.module';
import { UsersModule } from './modules/Users/users.module';
import { MoviesModule } from './modules/Movies/movies.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/Users/auth.guard';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    CacheModule.register({
      ttl: 300000, //5min
      isGlobal: true,
      host: process.env.HOST_REDIS,
      port: process.env.PORT_REDIS,
      store: redisStore,
      password: process.env.PASSWORD_REDIS,
    }),

    DatabaseModule,
    UsersModule,
    MoviesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
