import Discipline from '../models/Discipline';
import Campus from '../models/Campus';
import StudentDiscipline from '../models/StudentDiscipline';

class RegistrationController {
  async store(req, res) {
    req.body.forEach(async (element) => {
      await StudentDiscipline.create(element);
      return res.json({ success: 'Matricula realizada com sucesso.' });
    });
  }

  async index(req, res) {
    const { id_student } = req.body;

    const disciplines = await StudentDiscipline.findAll({
      where: { id_student },
    });

    return res.json(disciplines);
  }

  async show(req, res) {
    const { idStudent } = req.params;

    const disciplines = await StudentDiscipline.findAll({
      where: {
        id_student: idStudent,
      },
      attributes: ['id_student', 'id_discipline'],
      include: [
        {
          model: Discipline,
          as: 'discipline',
          attributes: ['title'],
          include: [
            {
              model: Campus,
              as: 'campus',
              attributes: ['name'],
            },
          ],
        },
      ],
    });

    return res.json(disciplines);
  }
}

export default new RegistrationController();
