module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('professor_disciplines', {
      id_professor: {
        type: Sequelize.INTEGER,
        references: { model: 'professors', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      id_discipline: {
        type: Sequelize.INTEGER,
        references: { model: 'disciplines', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('professor_disciplines');
  },
};
