const { makeTopStockMoversCall } = require('./topStockMovers.service.js');
const utils = require('../utils/index.js');

const topMoversgetService = async req => {
  const niftyStocks = await utils.makeAPICall(
    `https://run.mocky.io/v3/14d3b980-b3c0-414c-86e0-39ef7c458706`,
    'GET',
    {},
  );
  const topStockMovers = makeTopStockMoversCall({ niftyStocks }, req);
  return topStockMovers;
};
module.exports = { topMoversgetService };
