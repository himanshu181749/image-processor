const Request = require('../models/Request');

const getStatus = async (req, res) => {
  const { requestId } = req.params;
  const request = await Request.findOne({ requestId });

  if (!request) return res.status(404).json({ error: 'Ticket not found!' });

  res.json({
    requestId,
    status: request.status,
    products: request.products,
  });
};

module.exports = { getStatus };