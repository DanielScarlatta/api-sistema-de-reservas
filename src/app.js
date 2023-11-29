const express = require('express');
const fs = require('fs')
const https = require('https')
const cors = require('cors')

const app = express();

const userRouter = require('@routers/routerUser.js');

// Configurando o JSON para as respostas
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configurando o CORS
app.use(cors({
  origin: '*',
  credentials: true,
}));

// Middleware para lidar com solicitações OPTIONS
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Origin', 'https://scarlatta.com.br');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.status(200).end();
  } else {
    next();
  }
});

// Rotas
app.use('/', userRouter);

module.exports = app;
