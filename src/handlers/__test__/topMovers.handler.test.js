const { topMoversgetHandler } = require('../topMovers.handler.js');
const services = require('../../services/topMovers.service.js');

describe('topMoversgetHandler', () => {
  it('should pass the test', () => {
    const spyOnTopMoversgetService = jest.spyOn(
      services,
      'topMoversgetService',
    );
    //TODO
  });
});
