import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, type Relation } from "typeorm";
import type { Categoria } from "../../categoria/entities/categoria.entity.js";
import { PedidoProducto } from "../../pedido/entities/pedidoproducto.entity.js";

@Entity('productos')
export class Producto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    precio: number;

    @Column()
    stock: number;

    @Column()
    image: string;

    @Column()
    description: string;

    @Column()
    estado: boolean;

    @ManyToOne('Categoria', (cat: Categoria) => cat.producto)
    categoria: Relation<Categoria>;

    @OneToMany(()=>PedidoProducto,pedprod=>pedprod.producto)
    pedidoProducto: Relation<PedidoProducto[]>;
}