const express = require('express');
const healthHandler = require('../handlers/health.handler.js');

const healthRouter = express.Router();

healthRouter.get('/', healthHandler.healthgetHandler);

module.exports = {
  healthRouter,
};
