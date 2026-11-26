import { Module } from '@nestjs/common';
import { PersonaService } from './persona.service.js';
import { PersonaController } from './persona.controller.js';

@Module({
  controllers: [PersonaController],
  providers: [PersonaService],
})
export class PersonaModule {}
