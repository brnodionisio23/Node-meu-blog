const Sequelize = require('sequelize');
const databasePort = 3006;
const banco = 'meublognode';

const connection = new Sequelize(banco, 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

module.exports = {
    connection: connection,
    databasePort: databasePort,
    banco: banco
}