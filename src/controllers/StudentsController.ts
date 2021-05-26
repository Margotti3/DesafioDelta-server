import { Request, Response } from "express";
import CreateStudent from "../services/CreateStudent";
import ShowStudent from "../services/ShowStudent";
import ListStudents from "../services/ListStudents";
import UpdateStudent from "../services/UpdateStudent";
import DeleteStudent from "../services/DeleteStudent";
import studentView from "../views/student.view";
import studentsView from "../views/students.view";

export default class StudentsController {
  async index(req: Request, res: Response) {
    const { search = '' } = req.query;

    const listStudents = new ListStudents();

    const students = await listStudents.execute(String(search));

    return res.status(200).json(studentsView.render(students));
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const showStudent = new ShowStudent();

    const student = await showStudent.execute(Number(id));

    return res.status(200).json(studentView.render(student));
  }

  async store(req: Request, res: Response) {
    const profileImg = req.file.filename;

    const {
      name,
      zipcode,
      state,
      city,
      neighborhood,
      street,
      number,
      complement
    } = req.body;

    const address = {
      zipcode,
      state,
      city,
      neighborhood,
      street,
      number,
      complement
    };

    const createStudent = new CreateStudent();

    await createStudent.execute({ name, profileImg, address });

    return res.sendStatus(201);
  }
  
  async update(req: Request, res: Response) {
    const { id } = req.params;

    const profileImg = req.file ? req.file.filename : '';

    const {
      name,
      zipcode,
      state,
      city,
      neighborhood,
      street,
      number,
      complement
    } = req.body;

    const address = {
      zipcode,
      state,
      city,
      neighborhood,
      street,
      number,
      complement
    };

    const updateStudent = new UpdateStudent();

    await updateStudent.execute({
      id: Number(id),
      name,
      profileImg,
      address
    });

    return res.sendStatus(201);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const deleteStudent = new DeleteStudent();

    await deleteStudent.execute(Number(id));

    return res.sendStatus(200);
  }
}