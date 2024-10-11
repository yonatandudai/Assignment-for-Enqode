#  Darkweb Scanner API

This project implements a simple API that allows users to perform DNS lookups using the `nslookup` command-line tool. The API is built with Node.js and Express and returns structured JSON data, making it easy to integrate into other applications.

## Table of Contents
- [Requirements](#requirements)
- [Setup](#setup)
- [API Endpoints](#api-endpoints)
- [Testing the API](#testing-the-api)
- [Contributing](#contributing)
- [License](#license)

## Requirements
- Node.js
- npm (Node Package Manager)

## Design Choices
* This implementation uses command-line tools (nslookup) instead of a cURL-based API 
to query DNS records for specified domains.  
* While the original requirement suggested querying dark web data, I opted for a simpler approach using local tools.  
* This avoids dependency on external services and focuses on providing a straightforward DNS lookup API.

## Setup
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yonatandudai/Assignment-for-Enqode.git
   cd Assignment-for-Enqode/part2
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   node server.js
   ```

4. **Access the API**: 
   The API will be running on `http://localhost:3000`.

## API Endpoints
### `GET /domain-lookup`
- **Description**: Queries the DNS records for a specified domain.
- **Query Parameters**:
  - `domain`: The domain name to look up (e.g., `w3schools.com`).
- **Response**:
  - Returns JSON data containing the domain and its associated IP addresses.
  
**Request Example**:
```bash
curl "http://localhost:3000/domain-lookup?domain=w3schools.com"
```

**Response Example**:
```json
{
    "domain": "w3schools.com",
    "addresses": [
        "10.100.102.1"
    ]
}
```

## Testing with Postman

1. Open Postman and create a new request.

2. Select the request type as **GET**.

3. Enter the following URL in the request field:  
```http://localhost:3000/domain-lookup?domain=w3schools.com```

4. Click on the **Send** button.

5. You should receive a response similar to the following:
```json
{
    "domain": "w3schools.com",
    "addresses": [
        "10.100.102.1"
    ]
}
```

## Note
The code demonstrating my API implementation is in the file located at:  
```Assignment-for-Enqode\part2\server.js```

## License
This project is licensed under the MIT License
```