import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ActiveUserId } from 'src/shared/decorators/ActiveUserId';
import { MoviesService } from './movies.service';
import { createMovieDto } from './dto/createMovie.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getMoviesByUser(@ActiveUserId() userId: string) {
    return this.moviesService.getMovies(userId);
  }

  @Post()
  create(
    @Body() createMovieDto: createMovieDto,
    @ActiveUserId() userId: string,
  ) {
    return this.moviesService.insertMovie(createMovieDto, userId);
  }

  @Put(':movieId')
  updateMovie(
    @Body() updateMovieDto: createMovieDto,
    @Param('movieId') movieId: string,
  ) {
    return this.moviesService.updateMovie(updateMovieDto, movieId);
  }

  @Delete(':movieId')
  deleteMovie(@Param('movieId') movieId: string) {
    return this.moviesService.deleteMovie(movieId);
  }
}
