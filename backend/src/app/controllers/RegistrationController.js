import Discipline from '../models/Discipline';
import Campus from '../models/Campus';
import Class from '../models/Class';
import StudentDiscipline from '../models/StudentDiscipline';

class RegistrationController {
  async store(req, res) {
    const { id_student } = req.body;

    var invalidIncidences = [];
    var asyncCounter = 0;

    req.body.disciplines.forEach(async (element, index) => {
      asyncCounter++;
      const registrationExists = await StudentDiscipline.findOne({
        where: { id_student, id_discipline: element.id_discipline },
        include: [
          {
            model: Discipline,
            as: 'discipline',
            attributes: ['title'],
          },
        ],
        attributes: ['id_student', 'id_discipline'],
      });

      if (registrationExists) {
        invalidIncidences.push(registrationExists);
      } else {
        await StudentDiscipline.create({
          id_student,
          id_discipline: element.id_discipline,
        });

        const amountOfDisciplines = await StudentDiscipline.count({
          where: {
            id_discipline: element.id_discipline,
          },
        });

        if (amountOfDisciplines === 10 || amountOfDisciplines === 30) {
          await Class.create({ id_discipline: element.id_discipline });
        }
      }

      if (asyncCounter - 1 === index) {
        if (invalidIncidences.length > 0) {
          return res.status(400).json({
            error:
              'Matrícula invalida! Você já está cadastrado nas seguintes disciplinas',
            invalidIncidences,
          });
        }

        return res.json({ success: 'Matricula realizada com sucesso.' });
      }
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
