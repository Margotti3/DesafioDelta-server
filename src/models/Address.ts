import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('address')
export default class Address {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  student_id: number;

  @Column()
  zipcode: number;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  neighborhood: string;

  @Column()
  street: string;

  @Column()
  number: number;
}