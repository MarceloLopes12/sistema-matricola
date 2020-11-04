import * as Yup from 'yup';

import Student from '../models/Student';

class SessionController {
  async store(req, res) {
    const validation = Yup.object().shape({
      cpf: Yup.string().required(),
      password: Yup.string().required(),
    });

    if (!(await validation.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { cpf, password } = req.body;

    const student = await Student.findOne({
      where: { cpf },
    });

    if (!student) {
      return res.status(401).json({ error: 'Student not found' });
    }

    if (!(await student.checkPassowrd(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name, email, registration } = student;

    return res.json({
      id,
      name,
      email,
      registration,
    });
  }
}

export default new SessionController();
