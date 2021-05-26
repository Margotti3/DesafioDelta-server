import { getRepository } from "typeorm";
import Student from "../models/Student";

interface Params {
  name: string;
  profileImg: string;
  address: object;
}

export default class CreateStudent {
  async execute({name, profileImg, address}: Params) {
    const studentsRepository = getRepository(Student);
      
    const student = studentsRepository.create({
      name,
      profileImg,
      address
    });
    await studentsRepository.save(student);

    return student;
  }
}