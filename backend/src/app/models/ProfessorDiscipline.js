import Sequelize, { Model } from 'sequelize';

class ProfessorDiscipline extends Model {
  static init(sequelize) {
    super.init(
      {
        id_professor: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Professor',
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
    this.belongsTo(models.Professor, {
      foreignKey: 'id_professor',
      as: 'professor',
    });
    this.belongsTo(models.Discipline, {
      foreignKey: 'id_discipline',
      as: 'discipline',
    });
  }
}

export default ProfessorDiscipline;
