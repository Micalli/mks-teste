import { Inject } from '@nestjs/common';
import { createMovieDto } from 'src/modules/Movies/dto/createMovie.dto';
import { Movies } from 'src/modules/Movies/entities/movies.entity';
import { SingupDto } from 'src/modules/Users/dto/singup.dto';
import { User } from 'src/modules/Users/entities/users.entity';
import { Repository } from 'typeorm';

export class MoviesRepositoryService {
  constructor(
    @Inject('MOVIES_REPOSITORY')
    private readonly moviesRepository: Repository<Movies>,
    @Inject('USERS_REPOSITORY')
    private readonly usersRepository: Repository<User>,
  ) {}

  async findMoviesByUserId(userId: string) {
    return await this.moviesRepository
      .createQueryBuilder('movie')
      .leftJoinAndSelect('movie.user', 'user')
      .where('user.id = :userId', { userId })
      .select('movie.id')
      .addSelect('movie.category')
      .addSelect('movie.name')
      .addSelect('user.id')
      .getMany();
  }
  async findMoviesById(id: string) {
    return await this.moviesRepository
      .createQueryBuilder('movie')
      .where('movie.id = :id', { id })
      .getOne();
  }

  async createUser(createMovieDto: createMovieDto, user: User) {
    const { category, name } = createMovieDto;
    return await this.usersRepository
      .createQueryBuilder('user')
      .insert()
      .into(Movies)
      .values({
        category,
        name,
        user,
      })
      .execute();
  }

  async updateMovie(updateMovieDto: createMovieDto, id: string) {
    const { category, name } = updateMovieDto;
    return await this.usersRepository
      .createQueryBuilder('movie')
      .update(Movies)
      .set({
        category,
        name,
      })
      .where(' id = :id', { id })
      .execute();
  }

  async deleteMovie(id: string) {
    return await this.usersRepository
      .createQueryBuilder('movie')
      .delete()
      .from(Movies)
      .where('id = :id', {
        id,
      })
      .execute();
  }
  // async createNewUser(createUser: any) {
  //   return await this.usersRepository.save(createUser);
  // }

  // async findUserById(id: string) {
  //   return await this.usersRepository
  //     .createQueryBuilder('user')
  //     .where('user.id = :id', { id })
  //     .getOne();
  // }
}
