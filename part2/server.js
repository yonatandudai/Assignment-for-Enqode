const express = require('express');
const axios = require('axios'); // Use axios for HTTP requests
const { exec } = require('child_process');
const { promisify } = require('util');

const app = express();
const port = 3000;
const execAsync = promisify(exec); // Convert exec to a promise-based function for async/await use

app.use(express.json()); // Middleware to parse JSON request bodies

// Function to validate if the input is a properly formatted domain name
function isValidDomain(domain) {
  const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
  return domainRegex.test(domain);
}

// Function to sanitize user input by removing potentially dangerous characters
function sanitizeInput(input) {
  return input.replace(/[;&|`'"\$*?#]/g, '');
}

// API endpoint for domain lookup
app.get('/api/lookup', async (req, res) => {
  const { domain } = req.query;

  // Check if the domain parameter is provided
  if (!domain) {
    return res.status(400).json({ error: 'Domain parameter is required.' });
  }

  // Validate the domain format
  if (!isValidDomain(domain)) {
    return res.status(400).json({ error: 'Invalid domain format.' });
  }

  // Sanitize the domain to prevent command injection
  const sanitizedDomain = sanitizeInput(domain);

  try {
    // Use axios to make a request to the external DNS lookup API
    const response = await axios.get(`https://networkcalc.com/api/dns/lookup/${sanitizedDomain}`);
    const nslookupResult = response.data; // Capture the result from the external API

    // Perform local DNS lookup using nslookup command
    const { stdout: nslookupStdout } = await execAsync(`nslookup ${sanitizedDomain}`);

    // Parse the output from nslookup to extract IP addresses
    const lines = nslookupStdout.split('\n'); // Split the output into lines
    const addresses = lines
      .filter(line => line.includes('Address:')) // Filter lines that contain 'Address:'
      .map(line => line.split('Address:')[1].trim()) // Extract and trim the address
      .filter(addr => addr); // Remove any empty addresses

    // Respond with both the external API result and the local nslookup results
    res.json({
      domain: sanitizedDomain,
      curlApiResult: nslookupResult, // Data from the external API
      nslookupAddresses: addresses   // Data from the local nslookup command
    });
  } catch (error) {
    console.error('Error:', error); // Log the error to the console
    res.status(500).json({ error: 'An error occurred while processing your request.' }); // Send a 500 response
  }
});

// Start the server on the specified port
app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});
