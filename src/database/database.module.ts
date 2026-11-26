import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseProvider } from './database.providers.js';
import { ConfigService } from '../config/config.service.js';
import { ConfigModule } from '../config/config.module.js';
import { Categoria } from '../modules/categoria/entities/categoria.entity.js';
import { User } from '../modules/users/entities/user.entity.js';


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('HOST') || 'localhost',
        port: +config.get('PORT_DB'),
        username: config.get('USERNAME') || 'root',
        password: config.get('PASSWORD') || 'prueba',
        database: config.get('DATABASE'),
        entities: [Categoria, User],
      }),
    }),
  ],
  providers: [...databaseProvider, ConfigService],
  exports: [...databaseProvider],
})
export class DatabaseModule {}