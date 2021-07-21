const { healthgetHandler } = require('../health.handler.js');
const services = require('../../services/health.service.js');

describe('healthgetHandler', () => {
  it('should pass the test', () => {
    const spyOnHealthgetService = jest.spyOn(services, 'healthgetService');
    //TODO
  });
});
