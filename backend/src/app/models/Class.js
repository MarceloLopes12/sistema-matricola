import Sequelize, { Model } from 'sequelize';

class Class extends Model {
  static init(sequelize) {
    super.init(
      {
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
    this.belongsTo(models.Discipline, {
      foreignKey: 'id_discipline',
      as: 'disciplines',
    });
  }
}

export default Class;
