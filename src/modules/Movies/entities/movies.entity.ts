import { User } from 'src/modules/Users/entities/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('movies')
export class Movies {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  category: string;

  @ManyToOne(() => User, (user) => user.id, { nullable: true })
  user: User;
}
