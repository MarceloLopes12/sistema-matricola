import Sequelize, { Model } from 'sequelize';

class Course extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Discipline, {
      through: 'CourseDiscipline',
      as: 'discipline',
      foreignKey: 'id_course',
      otherKey: 'id_discipline',
    });
  }
}

export default Course;
