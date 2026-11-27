import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pedido } from "./pedido.entity.js";
import { Producto } from "../../producto/entities/producto.entity.js";

@Entity('pedido_producto')
export class PedidoProducto{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pedidoId:number;

    @Column()
    productoId: number;

    @Column()
    cantidad: number;

    @ManyToOne(()=>Pedido, (ped)=>ped.pedidoProducto)
    pedido:Pedido

    @ManyToOne(()=>Producto,(pro)=>pro.pedidoProducto)
    producto: Producto
}