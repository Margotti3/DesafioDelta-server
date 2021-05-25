import { getRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import Student from "../models/Student";

export default class ShowStudent {
  async execute(id: number) {
    const studentsRepository = getRepository(Student);

    const student = await studentsRepository.findOne({
      where: {
        id,
      },
      relations: ['address']
    });

    if (!student) {
      throw new AppError('Student not found');
    }

    return student;
  }
}