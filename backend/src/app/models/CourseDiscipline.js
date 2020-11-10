import Sequelize, { Model } from 'sequelize';

class CourseDiscipline extends Model {
  static init(sequelize) {
    super.init(
      {
        id_course: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Course',
            key: 'id',
          },
        },
        id_discipline: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Discipline',
            key: 'id',
          },
        },
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

export default CourseDiscipline;
