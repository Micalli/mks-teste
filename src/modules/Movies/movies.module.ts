import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/shared/database/database.module';
import { moviesProviders } from './movies.provider';
import { MoviesRepositoryService } from 'src/shared/database/repository/movie.service';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { UsersRepositoryService } from 'src/shared/database/repository/user.service';
import { usersProviders } from '../Users/users.provider';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { redisStore } from 'cache-manager-redis-yet';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...usersProviders,
    ...moviesProviders,
    MoviesRepositoryService,
    UsersRepositoryService,
    MoviesService,
  ],
  controllers: [MoviesController],
})
export class MoviesModule {}
