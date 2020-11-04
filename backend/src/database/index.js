import Sequelize from 'sequelize';

import Student from '../app/models/Student';
import Course from '../app/models/Course';
import Discipline from '../app/models/Discipline';
import Campus from '../app/models/Campus';
import CourseDiscipline from '../app/models/CourseDiscipline';
import StudentDisciplie from '../app/models/StudentDiscipline';

import databaseConfig from '../config/database';

const models = [
  Student,
  Course,
  Discipline,
  Campus,
  CourseDiscipline,
  StudentDisciplie,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
