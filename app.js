const express = require('express');
const connectDB = require('./src/config/db.js');
const routes = require('./src/routes/api.js');
require('dotenv').config();

const app = express();

connectDB();

app.use(express.json());
app.use('/api', routes);

// Show the shrunk pictures
app.use('/output', express.static('output'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Toy store open on port ${PORT}!`));