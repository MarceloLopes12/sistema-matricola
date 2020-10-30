import * as Yup from 'yup';
import { Op } from 'sequelize';

import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const validation = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      cpf: Yup.string().required(),
      password: Yup.string().required(),
    });

    if (!(await validation.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const studentExists = await Student.findOne({
      where: { [Op.or]: [{ email: req.body.email }, { cpf: req.body.cpf }] },
    });

    if (studentExists) {
      return res.status(400).json({ error: 'Student already exists.' });
    }

    const {
      id,
      name,
      email,
      cpf,
      date_of_birth,
      registration,
    } = await Student.create(req.body);

    return res.json({ id, name, email, cpf, date_of_birth, registration });
  }
}

export default new StudentController();
