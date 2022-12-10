const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db', 'postgres', '3l3f4nt3', {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
});


const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection successfully db System');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

testConnection();

const db = {
      Sequelize,
      sequelize
}
  module.exports = db;