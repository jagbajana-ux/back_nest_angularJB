import { DataSource } from "typeorm"
import { ConfigService } from "../config/config.service.js"
import { Categoria } from "../modules/categoria/entities/categoria.entity.js"
export const databaseProvider=[
    {
        provide: 'DATABASE_CONNECTION_POSTGRESQL',
        inject: [ConfigService],
        useFactory: (config: ConfigService) => {
            const dataSource= new DataSource({
                type:'postgres',
                host:config.get('HOST')||'localhost',
                port: +config.get('PORT_DB'),
                username: config.get('USERNAME')||'root',
                password: config.get('PASSWORD')||'prueba',
                database: config.get('DATABASE'),
                entities: [Categoria]

            });

            return dataSource.initialize();
        }
    }
]