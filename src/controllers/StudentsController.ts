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
    req.body.profileImg = req.file ? req.file.filename : 'a.png';

    const createStudent = new CreateStudent();

    await createStudent.execute(req.body);

    return res.sendStatus(201);
  }
  
  async update(req: Request, res: Response) {
    const { id } = req.params;

    req.body.profile = req.file ? req.file.filename : '';

    const updateStudent = new UpdateStudent();

    await updateStudent.execute({
      id: Number(id),
      data: req.body
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