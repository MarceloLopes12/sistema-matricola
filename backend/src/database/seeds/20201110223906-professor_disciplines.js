module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('professor_disciplines', [
      // Ciência da computação
      {
        id_professor: 1,
        id_discipline: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 2,
        id_discipline: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 3,
        id_discipline: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 4,
        id_discipline: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 5,
        id_discipline: 5,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 6,
        id_discipline: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 7,
        id_discipline: 7,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 8,
        id_discipline: 8,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 9,
        id_discipline: 9,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 10,
        id_discipline: 10,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 11,
        id_discipline: 11,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 12,
        id_discipline: 12,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 13,
        id_discipline: 13,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 14,
        id_discipline: 14,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 15,
        id_discipline: 15,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 16,
        id_discipline: 16,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 17,
        id_discipline: 17,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 18,
        id_discipline: 18,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 19,
        id_discipline: 19,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 20,
        id_discipline: 20,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 21,
        id_discipline: 21,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 22,
        id_discipline: 22,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 23,
        id_discipline: 23,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 24,
        id_discipline: 24,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 25,
        id_discipline: 25,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 26,
        id_discipline: 26,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 27,
        id_discipline: 27,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 28,
        id_discipline: 28,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 29,
        id_discipline: 29,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 30,
        id_discipline: 30,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 31,
        id_discipline: 31,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 32,
        id_discipline: 32,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 33,
        id_discipline: 33,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 34,
        id_discipline: 34,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 35,
        id_discipline: 35,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 36,
        id_discipline: 36,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 37,
        id_discipline: 37,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 38,
        id_discipline: 38,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 39,
        id_discipline: 39,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id_professor: 40,
        id_discipline: 40,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('professor_disciplines', null, {});
  },
};
