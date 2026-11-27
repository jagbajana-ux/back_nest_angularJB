import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './modules/auth/auth.module.js';
import { UsersModule } from './modules/users/users.module.js';
import { DatabaseModule } from './database/database.module.js';
import { ConfigModule } from './config/config.module.js';
import { CategoriaModule } from './modules/categoria/categoria.module.js';
import { PersonaModule } from './modules/persona/persona.module.js';
import { ProductoModule } from './modules/producto/producto.module.js';
import { RoleModule } from './modules/role/role.module.js';
import { ClienteModule } from './modules/cliente/cliente.module.js';
import { PedidoModule } from './modules/pedido/pedido.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com,
    // then run `npx @nestjs/observe link` to write your key pair into .env.
    ObserveModule.forRoot({
      appKey: process.env.OBSERVE_APP_KEY ?? 'YOUR_APP_KEY',
      appSecret: process.env.OBSERVE_APP_SECRET ?? 'YOUR_APP_SECRET',
      serviceId: 'back_nest_angular',
    }),
    AuthModule,
    UsersModule,
    DatabaseModule,
    ConfigModule,
    CategoriaModule,
    PersonaModule,
    ProductoModule,
    RoleModule,
    ClienteModule,
    PedidoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
