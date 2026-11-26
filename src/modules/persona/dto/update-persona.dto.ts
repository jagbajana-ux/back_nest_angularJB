import { PartialType } from '@nestjs/swagger';
import { CreatePersonaDto } from './create-persona.dto.js';

export class UpdatePersonaDto extends PartialType(CreatePersonaDto) {}
