module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('disciplines', [
      // Ciência da Computação/Análise e Des. de Sistemas
      {
        title: 'COMPILADORES',
        id_campus: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'COMPILADORES',
        id_campus: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'INTELIGÊNCIA ARTIFICIAL E APRENDIZADO DE MÁQUINA',
        id_campus: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'INTELIGÊNCIA ARTIFICIAL E APRENDIZADO DE MÁQUINA',
        id_campus: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'BANCO DE DADOS I',
        id_campus: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'BANCO DE DADOS I',
        id_campus: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'ESTRUTURA DE DADOS',
        id_campus: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'ESTRUTURA DE DADOS',
        id_campus: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'SISTEMAS OPERACIONAIS',
        id_campus: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'SISTEMAS OPERACIONAIS',
        id_campus: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'REDES DE COMPUTADORES',
        id_campus: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'REDES DE COMPUTADORES',
        id_campus: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'LOGICA DE PROGRAMACAO',
        id_campus: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'LOGICA DE PROGRAMACAO',
        id_campus: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'ENGENHARIA DE SOFTWARE',
        id_campus: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'ENGENHARIA DE SOFTWARE',
        id_campus: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'PRÁTICAS DE BANCO DE DADOS',
        id_campus: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'PRÁTICAS DE BANCO DE DADOS',
        id_campus: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'SISTEMAS DISTRIBUIDOS',
        id_campus: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'SISTEMAS DISTRIBUIDOS',
        id_campus: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      // Administração
      {
        title: 'ESTRATÉGIAS DE NEGOCIAÇÃO',
        id_campus: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'ESTRATÉGIAS DE NEGOCIAÇÃO',
        id_campus: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'TEORIAS ORGANIZACIONAIS',
        id_campus: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'TEORIAS ORGANIZACIONAIS',
        id_campus: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'GESTÃO DE PESSOAS',
        id_campus: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'GESTÃO DE PESSOAS',
        id_campus: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'SISTEMAS DE INFORMACOES GERENCIAIS',
        id_campus: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'SISTEMAS DE INFORMACOES GERENCIAIS',
        id_campus: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'PESQUISA DE MERCADO',
        id_campus: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'PESQUISA DE MERCADO',
        id_campus: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      // História
      {
        title: 'HISTÓRIA DA ANTIGUIDADE CLÁSSICA',
        id_campus: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'HISTÓRIA DA ANTIGUIDADE CLÁSSICA',
        id_campus: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'HISTÓRIA MEDIEVAL OCIDENTAL',
        id_campus: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'HISTÓRIA MEDIEVAL OCIDENTAL',
        id_campus: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'HISTÓRIA DO BRASIL COLÔNIA',
        id_campus: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'HISTÓRIA DO BRASIL COLÔNIA',
        id_campus: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'HISTÓRIA MODERNA: SÉCULOS XVII E XVIII',
        id_campus: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'HISTÓRIA MODERNA: SÉCULOS XVII E XVIII',
        id_campus: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'TECNOLOGIA NA EDUCAÇÃO',
        id_campus: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        title: 'TECNOLOGIA NA EDUCAÇÃO',
        id_campus: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('disciplines', null, {});
  },
};
