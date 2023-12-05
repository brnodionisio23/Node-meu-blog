const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 8080;


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})