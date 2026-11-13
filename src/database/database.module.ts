import { Module } from '@nestjs/common';
import { databaseProvider } from './database.providers.js';

@Module({
    providers:[...databaseProvider],
    exports:[...databaseProvider]
})
export class DatabaseModule {

}
