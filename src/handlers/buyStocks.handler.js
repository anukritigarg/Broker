const services = require('../services/buyStocks.service.js');

const buyStockspostHandler = async (req, res) => {
  try {
    const result = await services.buyStockspostService(req);
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { buyStockspostHandler };
