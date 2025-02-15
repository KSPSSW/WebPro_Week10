import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  login: string;

  @Column()
  password: string;
  // roles: ('admin' | 'user')[];

  @Column()
  gender: 'male' | 'female';
  age: number;
}
