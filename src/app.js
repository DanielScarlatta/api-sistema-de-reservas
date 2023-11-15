const express = require('express');
const cors = require('cors')

const app = express();

const userRouter = require('@routers/routerUser.js');

// configurando o JSON para as respostas
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());

app.use('/', userRouter);

module.exports = app;