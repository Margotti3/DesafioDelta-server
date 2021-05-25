import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import Student from './Student';

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

  @Column()
  complement: string;

  @OneToOne(() => Student, studentTable => studentTable.address)
  @JoinColumn({ name: 'student_id' })
  student: Student;
}