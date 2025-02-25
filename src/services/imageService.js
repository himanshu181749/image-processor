const sharp = require('sharp');
const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');

const processImage = async (inputUrl) => {
  try {
    const response = await axios.get(inputUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const outputPath = path.join(__dirname, '../../output', `${Date.now()}.jpg`);

    await sharp(buffer)
      .jpeg({ quality: 50 }) // Shrink to 50% quality
      .toFile(outputPath);

    return `http://localhost:3000/output/${path.basename(outputPath)}`;
  } catch (error) {
    throw new Error(`Failed to process image: ${error.message}`);
  }
};

module.exports = { processImage };