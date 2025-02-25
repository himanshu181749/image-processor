const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  requestId: { type: String, unique: true, required: true },
  status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
  products: [{
    serialNo: Number,
    productName: String,
    inputImageUrls: [String],
    outputImageUrls: [String],
  }],
  webhookUrl: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Request', RequestSchema);