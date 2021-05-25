import { Router } from "express";
import multer from 'multer';
import uploadConfig from "./config/upload";

import StudentsController from "./controllers/StudentsController";

const routes = Router();
const upload = multer(uploadConfig);

const studentsController = new StudentsController();

routes.get('/students', studentsController.index);
routes.get('/students/:id', studentsController.show);
routes.post('/students', upload.single('file'), studentsController.store);
routes.put('/students/:id', upload.single('file'), studentsController.update);
routes.delete('/students/:id', studentsController.delete);

export default routes;