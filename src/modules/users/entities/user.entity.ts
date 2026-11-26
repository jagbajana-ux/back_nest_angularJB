import { Column, Entity, OneToOne, PrimaryGeneratedColumn, type Relation } from 'typeorm';
import { Persona } from '../../persona/entities/persona.entity.js';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @OneToOne(() => Persona, persona => persona.user,{cascade:true})
  persona: Relation<Persona>;
}