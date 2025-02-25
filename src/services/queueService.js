const Queue = require('bull');
const imageService = require('./imageService');
const Request = require('../models/Request');
const axios = require('axios');

const imageQueue = new Queue('image-processing', process.env.REDIS_URL);

imageQueue.process(async (job) => {
  const { requestId, productIndex, inputUrl } = job.data;
  try {
    const outputUrl = await imageService.processImage(inputUrl);
    const request = await Request.findOne({ requestId });
    request.products[productIndex].outputImageUrls.push(outputUrl);
    request.status = 'processing';
    await request.save();

    // Check if all images are processed
    const allProcessed = request.products.every(p => p.inputImageUrls.length === p.outputImageUrls.length);
    if (allProcessed) {
      request.status = 'completed';
      await request.save();
      if (request.webhookUrl) {
        await axios.post(request.webhookUrl, { requestId, status: 'completed' });
      }
    }
  } catch (error) {
    console.error('Queue processing error:', error);
    const request = await Request.findOne({ requestId });
    request.status = 'failed';
    await request.save();
  }
});

module.exports = imageQueue;