import Course from '../models/Course';

class CourseController {
  async index(req, res) {
    const courses = await Course.findAll();

    return res.json(courses);
  }
}

export default new CourseController();
