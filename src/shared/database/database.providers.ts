import { Movies } from 'src/modules/Movies/entities/movies.entity';
import { User } from 'src/modules/Users/entities/users.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.HOST_DATABASE,
        port: Number(process.env.PORT_DATABASE),
        username: process.env.USERNAME_DATABASE,
        password: process.env.PASSWORD_DATABASE,
        database: process.env.NAME_DATABASE,
        synchronize: true,
        entities: [User, Movies],
      });

      return dataSource.initialize();
    },
  },
];
