import { Module } from '@nestjs/common';
import { ConfigService } from './config.service.js';

@Module({
  providers: [ConfigService]
})
export class ConfigModule {}
