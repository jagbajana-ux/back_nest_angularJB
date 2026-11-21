import { MigrationInterface, QueryRunner } from "typeorm";

export class EliminadoCorreo_tableUser1795282250798 implements MigrationInterface {
    name = 'EliminadoCorreo_tableUser1795282250798'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "email" character varying NOT NULL`);
    }

}
