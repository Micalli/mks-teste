import { DataSource } from 'typeorm';
import { Movies } from './entities/movies.entity';

export const moviesProviders = [
  {
    provide: 'MOVIES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Movies),
    inject: ['DATA_SOURCE'],
  },
];
