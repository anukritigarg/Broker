const services = require('../services/health.service.js');

const healthgetHandler = async (req, res) => {
  try {
    const result = await services.healthgetService(req);
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { healthgetHandler };
