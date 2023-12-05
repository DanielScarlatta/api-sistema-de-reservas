const express = require('express');
const Router = express.Router();

const calendarController = require('@controllers/calendarController.js')

Router
  .post('/auth/add/event', calendarController.addEvent)

module.exports = Router