import { getRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import Student from "../models/Student";

export default class DeleteStudent {
  async execute(id: number) {
    const studentsRepository = getRepository(Student);
    
    const studentExist = await studentsRepository.findOne({id});

    if (!studentExist) {
      throw new AppError('Student not found');
    }

    await studentsRepository.delete({id});
  }
}