const express = require('express');
const app = express();

const userRouter = require('@routers/routerUser.js');

app.use('/v1/auth/register', userRouter);

module.exports = app;