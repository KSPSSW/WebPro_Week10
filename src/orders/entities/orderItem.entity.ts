import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    DeleteDateColumn,
  } from 'typeorm';
  import { Order } from './order.entity';
  import { Product } from 'src/products/entities/product.entity';
  
  @Entity()
  export class OrderItem {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    price: number;
  
    @Column()
    total: number;
  
    @Column()
    qty: number;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deleteAt: Date;
  
    @ManyToOne(() => Order, (order) => order.orderItems)
    order: Order;
  
    @ManyToOne(() => Product, (product) => product.orderItems)
    product: Product;
  }
  