const express = require('express');
const connectDB = require('./src/config/db.js');
const routes = require('./src/routes/api.js');
require('dotenv').config();

const app = express();

connectDB();

app.get("/", (req, res) => {
    res.send(`
        <h1>Image Processing API</h1>
        <p>Test the API in Postman with these steps:</p>
        <ol>
            <li>Set method to <strong>POST</strong>.</li>
            <li>Use URL: <strong>https://image-processor-1qsz.onrender.com/api/upload</strong>.</li>
            <li>In the <strong>Body</strong> tab, select <strong>form-data</strong>.</li>
            <li>For the key <strong>"csv"</strong> (file type), upload your file.</li>
            <li>Optionally, add the key <strong>"webhookUrl"</strong> to receive processed data.  
                You can use <a href="https://webhook.site" target="_blank">webhook.site</a> to generate a test URL.</li>
            <li>For a detailed overview on how to use the API, please check the <a href="https://github.com/himanshu181749/image-processor/blob/main/README.md" target="_blank">README</a>.</li>
        </ol>
    `);
});


app.use(express.json());
app.use('/api', routes);

// Show the shrunk pictures
app.use('/output', express.static('output'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));