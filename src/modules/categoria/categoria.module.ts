import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service.js';
import { CategoriaController } from './categoria.controller.js';
import { categoriaProviders } from './categoria.provider.js';
import { DatabaseModule } from '../../database/database.module.js';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoriaController],
  providers: [CategoriaService, ...categoriaProviders],
})
export class CategoriaModule {}
