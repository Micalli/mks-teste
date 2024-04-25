import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail, MinLength } from 'class-validator';

export class createMovieDto {
  @ApiProperty({
    example: 'Joker',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Drama',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  category: string;
}
