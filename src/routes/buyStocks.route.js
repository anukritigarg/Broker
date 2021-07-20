const express = require('express');
const buyStocksHandler = require('../handlers/buyStocks.handler.js');

const buyStocksRouter = express.Router();

buyStocksRouter.post('/:id', buyStocksHandler.buyStockspostHandler);

module.exports = {
  buyStocksRouter,
};
