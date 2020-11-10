module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('campuses', [
      {
        name: 'Campus FAPA',
        address:
          'Av. Manoel Elias, 2001 - Passo das Pedras, Porto Alegre - RS, 91240-261',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Orfanotrófio - Zona Sul',
        address:
          'Rua Orfanotrófio, 555, Alto - Teresópolis, Porto Alegre - RS, 90840-440',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('campuses', null, {});
  },
};
