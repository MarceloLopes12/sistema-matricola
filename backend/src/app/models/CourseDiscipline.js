import Sequelize, { Model } from 'sequelize';

class Course extends Model {
  static init(sequelize) {
    super.init(
      {
        id_course: Sequelize.INTEGER,
        id_discipline: Sequelize.INTEGER,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Course, { foreignKey: 'id_course', as: 'course' });
    this.belongsTo(models.Discipline, {
      foreignKey: 'id_discipline',
      as: 'discipline',
    });
  }
}

export default Course;
