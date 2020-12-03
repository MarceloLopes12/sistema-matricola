import { Router } from 'express';

import StudentController from './app/controllers/StudentController';
import SessionController from './app/controllers/SessionController';
import CourseController from './app/controllers/CourseController';
import DisciplineController from './app/controllers/DisciplineController';
import RegistrationController from './app/controllers/RegistrationController';

const routes = new Router();

// Student
routes.post('/students', StudentController.store);
routes.post('/sessions', SessionController.store);

// Course
routes.get('/courses', CourseController.index);

// Disciplines by course
routes.get('/disciplinesByCourse/:id', DisciplineController.show);

// Registrations
routes.post('/registrations', RegistrationController.store);
routes.get('/registrations/:idStudent', RegistrationController.index);
routes.get('/registrations/:idStudent', RegistrationController.show);

export default routes;
