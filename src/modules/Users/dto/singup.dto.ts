import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail, MinLength } from 'class-validator';

export class SingupDto {
  @ApiProperty({
    example: 'Bruno Micalli',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'email@email.com',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '123456789',
    required: true,
    description: 'Minímo 8 caracteres',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
