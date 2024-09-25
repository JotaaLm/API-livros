const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const livrosRouter = require('./routes/livros');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/livros', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.use(bodyParser.json());
app.use('/livros', livrosRouter);


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
