import { getRepository, Like } from "typeorm";
import { AppError } from "../errors/AppError";
import Student from "../models/Student";

export default class ListStudents {
  async execute(search: string) {
    const studentsRepository = getRepository(Student);

    const students = await studentsRepository.find({
      where: {
        name: Like(`%${search}%`)
      },
      relations: ['address']
    });

    if (!students) {
      throw new AppError('Students not found');
    }

    return students;
  }
}