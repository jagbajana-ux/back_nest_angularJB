import { Column, Entity, PrimaryGeneratedColumn } from "typeorm/browser";

@Entity('clientes')
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre_completo: string;

    @Column()
    dni: string;

    @Column()
    telefono: string;
}