const Sequelize = require('sequelize');
const { connection, databasePort, banco } = require('../database/database');

const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    }, body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Article.sync({ force: false })
    .then(() => { })
    .catch((err) => { console.log(`Erro: ${err}`) })

module.exports = Article; 