module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('campus', [
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
      {
        name: 'Campus Canoas',
        address: 'R. Santos Dumont, 888 - Niterói, Canoas - RS, 92120-110',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Campus Iguatemi',
        address:
          'Av. João Wallig, 1800 - Passo d Areia, Porto Alegre - RS, 91340-000',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('campus', null, {});
  },
};
