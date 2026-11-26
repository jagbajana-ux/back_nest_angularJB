import { User } from '../../users/entities/user.entity.js';
import{ Column, Entity, JoinColumn, OneToOne ,PrimaryGeneratedColumn , type Relation } from 'typeorm';

@Entity()
export class Persona {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @OneToOne(() => User, user => user.persona)
    @JoinColumn()
    user: Relation<User>;




}