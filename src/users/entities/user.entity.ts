import { Role } from 'src/role/entities/role.entity';
import { Order } from 'src/orders/entities/order.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column()
  gender: 'male' | 'female';
  age: number;

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable()
  roles: Role[];

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
