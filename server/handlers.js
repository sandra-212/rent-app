const { offers } = require("./data");

const getOffers = (req, res) => {
  res.status(200).json({ status: 200, data: offers });
};

module.exports = {
  getOffers
};
