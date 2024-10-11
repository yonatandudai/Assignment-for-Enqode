const express = require('express');
const { exec } = require('child_process');
const app = express();

// Middleware to parse JSON request body
app.use(express.json());

// Endpoint for querying domain data
app.get('/domain-lookup', (req, res) => {
    const { domain } = req.query;
    if (!domain) {
        return res.status(400).send('Domain query parameter is required.');
    }

    exec(`nslookup ${domain}`, (err, stdout, stderr) => {
        if (err) {
            return res.status(500).send(`Error: ${stderr}`);
        }

        // Parse stdout to extract relevant data
        const lines = stdout.split('\n');
        const addresses = lines
            .filter(line => line.includes('Address:'))
            .map(line => line.split('Address:')[1].trim())
            .filter(addr => addr); // Remove empty addresses

        // Return structured data
        res.json({
            domain: domain,
            addresses: addresses
        });
    });
});

// Start server on port 3000
app.listen(3000, () => {
    console.log('Server running on port 3000');
});