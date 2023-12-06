const Sequelize = require('sequelize');
const { connection, databasePort, banco } = require('../database/database');
const Article = require('../articles/Article');

const Category = connection.define('categories', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Category.hasmany(Article);

Category.sync({ force: false })
    .then(() => { })
    .catch((err) => { console.log(`Erro: ${err}`) })

module.exports = Category; 