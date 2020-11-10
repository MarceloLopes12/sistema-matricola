import Sequelize, { Model } from 'sequelize';

class Professor extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Discipline, {
      through: 'ProfessorDiscipline',
      as: 'discipline',
      foreignKey: 'id_professor',
      otherKey: 'id_discipline',
    });
  }
}

export default Professor;
