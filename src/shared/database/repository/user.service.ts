import { Inject } from '@nestjs/common';
import { SingupDto } from 'src/modules/Users/dto/singup.dto';
import { User } from 'src/modules/Users/entities/users.entity';
import { Repository } from 'typeorm';

export class UsersRepositoryService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private readonly usersRepository: Repository<User>,
  ) {}

  async findUserByEmail(email: string) {
    return await this.usersRepository
      .createQueryBuilder('user')
      .where('UPPER(user.email) = UPPER(:email)', { email })
      .getOne();
  }

  async createUser(singupDto: SingupDto) {
    const { email, name, password } = singupDto;
    return await this.usersRepository
      .createQueryBuilder('user')
      .insert()
      .into(User)
      .values({
        email,
        name,
        password,
      })
      .execute();
  }

  async createNewUser(createUser: any) {
    return await this.usersRepository.save(createUser);
  }

  async findUserById(id: string) {
    return await this.usersRepository
      .createQueryBuilder('user')
      .where('user.id = :id', { id })
      .getOne();
  }
}
