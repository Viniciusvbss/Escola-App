// Conexão com Banco de Dados


const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('escoladb', 'Admin', 'Admin123', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432
});

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

module.exports = sequelize;


