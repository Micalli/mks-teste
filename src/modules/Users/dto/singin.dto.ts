import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SinginDto {
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
