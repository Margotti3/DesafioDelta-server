import { getRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import Address from "../models/Address";
import Student from "../models/Student";

interface params{
  id: number,
  data: {
    name: string;
    profileImg: string;
    zipcode: number;
    street: string;
    state: string;
    city: string;
    neighborhood: string;
    complement: string;
    number: number;
    profile: string;
  },
}

export default class UpdateStudent {
  async execute({id, data }: params) {

    const studentsRepository = getRepository(Student);
    const addressRepository = getRepository(Address);
      
    const studentExist = await studentsRepository.findOne({id});
    const addressExist = await addressRepository.findOne({where: {student_id: id}});

    if (!studentExist || !addressExist) {
      throw new AppError('Data not found');
    }

    const {
      name,
      zipcode,
      street,
      number,
      state,
      city,
      neighborhood,
      complement,
      profile
    } = data;

    const address = {
      zipcode,
      street,
      number,
      state,
      city,
      neighborhood,
      complement,
    };

    const profileImg = profile ? profile : studentExist.profileImg;

    await studentsRepository.update({id}, {name, profileImg});
    await addressRepository.update({id: addressExist.id}, address);
  }
}