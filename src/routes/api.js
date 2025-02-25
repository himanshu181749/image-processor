const express = require('express');
const multer = require('multer');
const { uploadCSV } = require('../controllers/uploadController');
const { getStatus } = require('../controllers/statusController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('csv'), uploadCSV);
router.get('/status/:requestId', getStatus);

module.exports = router;    