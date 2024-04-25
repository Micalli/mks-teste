import { Movies } from 'src/modules/Movies/entities/movies.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Movies, (movie) => movie.user, { cascade: true })
  movies: Movies;
}
