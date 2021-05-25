import Student from "../models/Student";

export default {
  render(student: Student) {
    return {
      id: student.id,
      name: student.name,
      profileImg: `http://192.168.1.107:3333/uploads/${student.profileImg}`,
      zipcode: student.address.zipcode,
      city: student.address.city,
      state: student.address.state,
      neighborhood: student.address.neighborhood,
      street: student.address.street,
      number: student.address.number,
      complement: student.address.complement,
    }
  }
}