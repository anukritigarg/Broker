const express = require('express');
const topMoversHandler = require('../handlers/topMovers.handler.js');

const topMoversRouter = express.Router();

topMoversRouter.get('/', topMoversHandler.topMoversgetHandler);

module.exports = {
  topMoversRouter,
};
