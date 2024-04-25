import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { SinginDto } from './dto/singin.dto';
import { SingupDto } from './dto/singup.dto';

import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { hash } from 'bcryptjs';
import { UsersRepositoryService } from 'src/shared/database/repository/user.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepositoryService,
    private readonly jwtService: JwtService,
  ) {}
  async singin(singInDto: SinginDto) {
    const { email, password } = singInDto;

    const user = await this.usersRepository.findUserByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Credenciais inválida.');
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciais inválida.');
    }
    const accessToken = await this.generateAccessToken(user.id);

    return { accessToken };
  }

  async singup(singupDto: SingupDto) {
    const { name, email, password } = singupDto;

    const emailTaken = await this.usersRepository.findUserByEmail(email);

    if (emailTaken) {
      throw new ConflictException('O e-mail ja está em uso.');
    }

    const hashedPassword = await hash(password, 12);

    const user = await this.usersRepository.createUser({
      name,
      email,
      password: hashedPassword,
    });
    const accessToken = await this.generateAccessToken(
      user.generatedMaps[0].id,
    );

    return { accessToken };
  }

  private async generateAccessToken(userId: string) {
    return await this.jwtService.signAsync({ sub: userId });
  }
}
