import { getRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import Address from "../models/Address";
import Student from "../models/Student";

interface params{
  id: number,
  name: string,
  profileImg: string;
  address: object;
}

export default class UpdateStudent {
  async execute({id, name, profileImg, address }: params) {
    const studentsRepository = getRepository(Student);
    const addressRepository = getRepository(Address);
      
    const studentExist = await studentsRepository.findOne({id});
    const addressExist = await addressRepository.findOne({where: {student_id: id}});

    if (!studentExist || !addressExist) {
      throw new AppError('Data not found');
    }

    if (!profileImg) {
      profileImg = studentExist.profileImg;
    }
    
    await studentsRepository.update({id}, {name, profileImg});
    await addressRepository.update({id: addressExist.id}, address);
  }
}