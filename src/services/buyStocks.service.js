const utils = require('../utils/index.js');

const buyStockspostService = async req => {
  const buyStocks = await utils.makeAPICall(
    `https://bolder-opposite-sassafras.glitch.me/nse/buyStocks/${req.params.id}`,
    'POST',
    {},
    {
      count: `${req.body.count}`,
      company: `${req.body.company}`,
    },
  );
  return buyStocks;
};
module.exports = { buyStockspostService };
