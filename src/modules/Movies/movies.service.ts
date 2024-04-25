import { Injectable, BadRequestException, Inject } from '@nestjs/common';

import { UsersRepositoryService } from 'src/shared/database/repository/user.service';
import { MoviesRepositoryService } from 'src/shared/database/repository/movie.service';
import { createMovieDto } from './dto/createMovie.dto';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';

@Injectable()
export class MoviesService {
  constructor(
    private readonly movieRepository: MoviesRepositoryService,
    private readonly usersRepository: UsersRepositoryService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  async getMovies(userId: string) {
    const cachedMovies = await this.cacheManager.get('movies-' + userId);

    if (cachedMovies) {
      return cachedMovies;
    }
    const movies = await this.movieRepository.findMoviesByUserId(userId);

    if (movies) {
      await this.cacheManager.set('movies-' + userId, movies);
    }

    return movies;
  }
  async insertMovie(createMovieDto: createMovieDto, userId: string) {
    const user = await this.usersRepository.findUserById(userId);
    if (!user) {
      throw new BadRequestException('Usuario não encontrado.');
    }

    const cachedMovies = await this.cacheManager.get('movies-' + userId);

    if (cachedMovies) {
      await this.cacheManager.del('movies-' + userId);
    }

    await this.movieRepository.createUser(createMovieDto, user);
    return true;
  }

  async updateMovie(updateMovieDto: createMovieDto, movieId: string) {
    const movieExist = await this.movieRepository.findMoviesById(movieId);
    if (!movieExist) {
      throw new BadRequestException('Filme não encontrado.');
    }
    await this.movieRepository.updateMovie(updateMovieDto, movieId);
    return true;
  }

  async deleteMovie(movieId: string) {
    const movieExist = await this.movieRepository.findMoviesById(movieId);
    if (!movieExist) {
      throw new BadRequestException('Filme não encontrado.');
    }

    await this.movieRepository.deleteMovie(movieId);

    return true;
  }
}
