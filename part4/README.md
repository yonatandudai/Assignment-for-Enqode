# Data Collection Backend

This backend service collects, stores, and retrieves Zero-Trust Score data. Built with Node.js and Express, it provides two main API endpoints for data submission and retrieval.

## Table of Contents
- [Requirements](#Requirements)
- [Setup](#setup)
- [API Endpoints](#api-endpoints)
- [Testing the API](#testing-the-api)

## Requirements
- [Node.js](https://nodejs.org/) installed on your machine.

## Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yonatandudai/Assignment-for-Enqode.git
   cd part4
   ```

2. **Install Dependencies**:
   In the project directory, run:
   ```bash
   npm install
   ```

3. **Run the Server**:
   Start the server by running:
   ```bash
   node server.js
   ```
   The server will be accessible at `http://localhost:3000`.

## API Endpoints

#### POST /submit-data
- **Description**: Accepts Zero-Trust Score data in JSON format and stores it.
- **Request Body**: JSON object containing Zero-Trust Score information. Example:
  ```json
  {
    "averageShannonEntropyScore": 7.8,
    "firewallDetected": true,
    "DNSsecEnabled": true,
    "tlsVersion": "1.2",
    "certificateBitStrength": 2048,
    "securityHeadersImplemented": ["X-XSS-Protection", "X-Frame-Options"],
    "openPortsDetected": 12
  }
  ```
- **Response**:
  ```json
  { "message": "Data received and stored successfully." }
  ```

#### GET /get-data
- **Description**: Retrieves all stored Zero-Trust Score data.
- **Response**: Array of JSON objects with stored Zero-Trust Score data. Example:
  ```json
  [
    {
      "averageShannonEntropyScore": 7.8,
      "firewallDetected": true,
      "DNSsecEnabled": true,
      "tlsVersion": "1.2",
      "certificateBitStrength": 2048,
      "securityHeadersImplemented": ["X-XSS-Protection", "X-Frame-Options"],
      "openPortsDetected": 12
    }
  ]
  ```

## Testing the API
You can test the API endpoints using **Postman**, **curl**, or any other HTTP client tool.

- **Using curl**:
  - To submit data:
    ```bash
    curl -X POST http://localhost:3000/submit-data -H "Content-Type: application/json" -d '{
      "averageShannonEntropyScore": 7.8,
      "firewallDetected": true,
      "DNSsecEnabled": true,
      "tlsVersion": "1.2",
      "certificateBitStrength": 2048,
      "securityHeadersImplemented": ["X-XSS-Protection", "X-Frame-Options"],
      "openPortsDetected": 12
    }'
    ```
  - To retrieve data:
    ```bash
    curl http://localhost:3000/get-data
    ```


- **Using Postman**:
  - Open Postman and create a new request.
  - Set the request type to `POST` and enter the URL: `http://localhost:3000/submit-data`.
  - In the `Body` tab, select `raw` and choose `JSON` from the dropdown menu. Paste the JSON data in the following format:
    ```json
    {
      "averageShannonEntropyScore": 7.8,
      "firewallDetected": true,
      "DNSsecEnabled": true,
      "tlsVersion": "1.2",
      "certificateBitStrength": 2048,
      "securityHeadersImplemented": ["X-XSS-Protection", "X-Frame-Options"],
      "openPortsDetected": 12
    }
    ```
  - Click **Send** to submit the data. You should receive a success message.
  - To retrieve the data, create a `GET` request to `http://localhost:3000/get-data` and send it. You should see the array of all stored data.
