import { Router } from 'express';

import StudentController from './app/controllers/StudentController';
import SessionController from './app/controllers/SessionController';
import CourseController from './app/controllers/CourseController';
import DisciplineController from './app/controllers/DisciplineController';

const routes = new Router();

// Student
routes.post('/students', StudentController.store);
routes.post('/sessions', SessionController.store);

// Course
routes.get('/courses', CourseController.index);

// Disciplines by course
routes.get('/disciplinesByCourse', DisciplineController.show);

export default routes;
