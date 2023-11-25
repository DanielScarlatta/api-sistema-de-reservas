const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://scarlatta.com.br'); // substitua com o seu domínio
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

const userRouter = require('@routers/routerUser.js');


// configurando o JSON para as respostas
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());

app.use('/', userRouter);

module.exports = app;