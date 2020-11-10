import Discipline from '../models/Discipline';
import Campus from '../models/Campus';
import CourseDiscipline from '../models/CourseDiscipline';

class DisciplineController {
  async show(req, res) {
    const { id_course } = req.body;

    const disciplines = await CourseDiscipline.findAll({
      where: { id_course },
      attributes: ['id_course', 'id_discipline'],
      include: [
        {
          model: Discipline,
          as: 'discipline',
          attributes: ['id', 'title', 'id_campus'],
          order: ['title'],
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

export default new DisciplineController();
