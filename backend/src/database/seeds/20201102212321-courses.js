module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('courses', [
      {
        title: 'Ciência da computação',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Analise e desenvolvimento de Sistemas',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'Administração',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'História',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('courses', null, {});
  },
};
