import Student from "../models/Student";

export default {
  render(students: Array<Student>) {
    return students.map(student => ({
      id: student.id,
      name: student.name,
      profileImg: `http://192.168.1.107:3333/uploads/${student.profileImg}`
    }));
  }
}