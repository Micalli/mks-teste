import { Body, Controller, Post } from '@nestjs/common';
import { SinginDto } from './dto/singin.dto';
import { SingupDto } from './dto/singup.dto';
import { UsersService } from './user.service';
import { IsPublic } from '../../shared/decorators/isPublic';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@IsPublic()
@ApiTags('Auth')
@Controller('auth')
export class UsersController {
  constructor(private readonly authService: UsersService) {}

  @Post('singin')
  @ApiResponse({ status: 401, description: 'Credenciais inválida.' })
  authenticate(@Body() singinDto: SinginDto) {
    return this.authService.singin(singinDto);
  }

  @Post('singup')
  @ApiResponse({ status: 409, description: 'O e-mail ja está em uso.' })
  create(@Body() singupDto: SingupDto) {
    return this.authService.singup(singupDto);
  }
}
