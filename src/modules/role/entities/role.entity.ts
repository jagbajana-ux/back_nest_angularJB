import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities/user.entity.js";

@Entity('roles')
export class Role {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nombre: string;

    @Column()
    detalle: string;

    @ManyToMany(()=>User)
    @JoinTable({name:'role_user'})
    user:User[]
}
