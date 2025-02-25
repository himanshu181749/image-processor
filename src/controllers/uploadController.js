// const papa = require('papaparse');
// const fs = require('fs');
// const { v4: uuidv4 } = require('uuid');
// const Request = require('../models/Request');
// const { processImage } = require('../services/imageService');
// const axios = require('axios');

// const uploadCSV = async (req, res) => {
//   if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

//   const csvData = fs.readFileSync(req.file.path, 'utf8');
//   const parsed = papa.parse(csvData, { header: true, skipEmptyLines: true });

//   // Check if the list looks right
//   const requiredFields = ['S. No.', 'Product Name', 'Input Image Urls'];
//   if (!parsed.meta.fields || !requiredFields.every(field => parsed.meta.fields.includes(field))) {
//     return res.status(400).json({ error: 'Oops! The list is messy.' });
//   }

//   const requestId = uuidv4();
//   const products = parsed.data.map(row => ({
//     serialNo: parseInt(row['S. No.']),
//     productName: row['Product Name'],
//     inputImageUrls: row['Input Image Urls'].split(',').map(url => url.trim()),
//     outputImageUrls: [],
//   }));

//   const request = new Request({ requestId, products, webhookUrl: req.body.webhookUrl });
//   await request.save();

//   // Shrink all pictures right now!
//   try {
//     for (let product of products) {
//       for (let inputUrl of product.inputImageUrls) {
//         const outputUrl = await processImage(inputUrl);
//         // Update the product's outputImageUrls in the database
//         await Request.updateOne(
//           { requestId, 'products.serialNo': product.serialNo },
//           { $push: { 'products.$.outputImageUrls': outputUrl } }
//         );
//       }
//     }
//     request.status = 'completed';
//     await request.save();
//     if (request.webhookUrl) {
//       await axios.post(request.webhookUrl, { requestId, status: 'completed' });
//     }
//   } catch (error) {
//     console.error('Image processing error:', error.message);
//     request.status = 'failed';
//     await request.save();
//     return res.status(500).json({ error: `Something went wrong shrinking pictures: ${error.message}` });
//   }

//   fs.unlinkSync(req.file.path); // Clean up the uploaded file
//   res.json({ requestId });
// };

// module.exports = { uploadCSV };


const papa = require('papaparse');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const Request = require('../models/Request');
const { processImage } = require('../services/imageService');
const axios = require('axios');

const uploadCSV = async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

  const csvData = fs.readFileSync(req.file.path, 'utf8');
  const parsed = papa.parse(csvData, { header: true, skipEmptyLines: true });

  const requiredFields = ['S. No.', 'Product Name', 'Input Image Urls'];
  if (!parsed.meta.fields || !requiredFields.every(field => parsed.meta.fields.includes(field))) {
    return res.status(400).json({ error: 'Oops! The list is messy.' });
  }

  const requestId = uuidv4();
  const products = parsed.data.map(row => ({
    serialNo: parseInt(row['S. No.']),
    productName: row['Product Name'],
    inputImageUrls: row['Input Image Urls'].split(',').map(url => url.trim()),
    outputImageUrls: [],
  }));

  const request = new Request({ requestId, products, webhookUrl: req.body.webhookUrl });
  await request.save();

  try {
    for (let product of products) {
      for (let inputUrl of product.inputImageUrls) {
        const outputUrl = await processImage(inputUrl);
        await Request.updateOne(
          { requestId, 'products.serialNo': product.serialNo },
          { $push: { 'products.$.outputImageUrls': outputUrl } }
        );
      }
    }
    request.status = 'completed';
    await request.save();

    // Webhook tweak: Send a detailed payload
    if (request.webhookUrl) {
      const webhookPayload = {
        requestId: request.requestId,
        status: request.status,
        products: request.products.map(p => ({
          serialNo: p.serialNo,
          productName: p.productName,
          inputImageUrls: p.inputImageUrls,
          outputImageUrls: p.outputImageUrls
        })),
        completedAt: new Date()
      };
      console.log('Sending webhook to:', request.webhookUrl);
      console.log('Webhook payload:', webhookPayload);

      try {
        await axios.post(request.webhookUrl, webhookPayload, {
          headers: { 'Content-Type': 'application/json' }
        });
        console.log('Webhook sent successfully!');
      } catch (webhookError) {
        console.error('Webhook failed:', webhookError.message);
        // Don’t crash—just log it
      }
    }
  } catch (error) {
    console.error('Image processing error:', error.message);
    request.status = 'failed';
    await request.save();
    return res.status(500).json({ error: `Something went wrong shrinking pictures: ${error.message}` });
  }

  fs.unlinkSync(req.file.path);
  res.json({ requestId });
};

module.exports = { uploadCSV };