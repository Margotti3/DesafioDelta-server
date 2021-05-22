import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('students')
export default class Student {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  profileImg: File;
}