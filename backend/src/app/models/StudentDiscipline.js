import Sequelize, { Model } from 'sequelize';

class StudentDiscipline extends Model {
  static init(sequelize) {
    super.init(
      {
        id_student: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Student',
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
    this.belongsTo(models.Student, { foreignKey: 'id_student', as: 'student' });
    this.belongsTo(models.Discipline, {
      foreignKey: 'id_discipline',
      as: 'discipline',
    });
  }
}

export default StudentDiscipline;
