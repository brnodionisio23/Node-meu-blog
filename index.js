const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { connection, databasePort, banco } = require('./database/database');
const serverPort = 8080;


app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connection.authenticate()
    .then(() => {
        console.log(`Conectado com sucesso ao banco: ${banco}, na porta ${databasePort}`);
    })
    .catch((error) => {
        console.log(`Erro: ${error}`)
    })

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(serverPort, () => {
    console.log(`Servidor rodando na porta: ${serverPort}`)
})