const { buyStockspostHandler } = require('../buyStocks.handler.js');
const services = require('../../services/buyStocks.service.js');

describe('buyStockspostHandler', () => {
  it('should pass the test', () => {
    const spyOnBuyStockspostService = jest.spyOn(
      services,
      'buyStockspostService',
    );
    //TODO
  });
});
