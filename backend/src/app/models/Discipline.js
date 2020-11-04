import Sequelize, { Model } from 'sequelize';

class Discipline extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
      },
      { sequelize }
    );

    return this;
  }

  static assoacite(models) {
    this.belongsTo(models.Campus, { foreignKey: 'id_campus', as: 'campus' });
    this.belongsToMany(models.Course, {
      through: 'CourseDiscipline',
      as: 'course',
      foreignKey: 'id_discipline',
    });
    this.belongsToMany(models.Student, {
      through: 'StudentDiscipline',
      as: 'student',
      foreignKey: 'id_discipline',
    });
  }
}

export default Discipline;
