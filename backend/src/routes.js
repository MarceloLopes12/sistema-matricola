import { Router } from 'express';

import StudentController from './app/controllers/StudentController';

const routes = new Router();

// Student
routes.post('/students', StudentController.store);

export default routes;
