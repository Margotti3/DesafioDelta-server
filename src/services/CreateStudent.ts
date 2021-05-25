import { getRepository } from "typeorm";
import Student from "../models/Student";

interface Params {
  name: string;
  profileImg: string;
  zipcode: number;
  street: string;
  state: string;
  city: string;
  neighborhood: string;
  complement: string;
  number: number;
}

export default class CreateStudent {
  async execute(data: Params) {
    const studentsRepository = getRepository(Student);

    const {
      name,
      profileImg,
      zipcode,
      state,
      city,
      neighborhood,
      street,
      number,
      complement
    } = data;

    const address = {
      zipcode,
      state,
      city,
      neighborhood,
      street,
      number,
      complement
    };
      
    const student = studentsRepository.create({
      name,
      profileImg,
      address
    });
    await studentsRepository.save(student);

    return student;
  }
}