const services = require('../services/topMovers.service.js');

const topMoversgetHandler = async (req, res) => {
  try {
    const result = await services.topMoversgetService(req);
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { topMoversgetHandler };
