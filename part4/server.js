const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// In-memory storage for Zero-Trust Score data
let zeroTrustData = [];

// Endpoint to submit Zero-Trust Score data
app.post('/submit-data', (req, res) => {
  const data = req.body;
  zeroTrustData.push(data);
  res.status(201).send({ message: 'Data received and stored successfully.' });
});

// Endpoint to retrieve stored data
app.get('/get-data', (req, res) => {
  res.status(200).json(zeroTrustData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});