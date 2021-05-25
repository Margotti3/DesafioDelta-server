import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import Address from './Address';

@Entity('students')
export default class Student {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  profileImg: string;

  @OneToOne(() => Address, addressTable => addressTable.student, {
    cascade: ['insert', 'update']
  })
  address: Address;
}