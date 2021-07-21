const { makeHealthCheckCall } = require('./healthCheck.service.js');

const healthgetService = async req => {
  const healthCheck = makeHealthCheckCall(req);
  return healthCheck;
};
module.exports = { healthgetService };
