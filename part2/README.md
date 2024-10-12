# Darkweb Scanner API

This project implements a simple API that allows users to perform DNS lookups using both the `nslookup` command-line tool and an external DNS lookup API. The API is built with Node.js and Express and returns structured JSON data, making it easy to integrate into other applications.

## Note
The code demonstrating my API implementation is in the file located at:  
```Assignment-for-Enqode\part2\server.js```

## Table of Contents
- [Requirements](#requirements)
- [Design Choices](#design-choices)
- [Setup](#setup)
- [API Endpoints](#api-endpoints)
- [Testing with Postman](#testing-with-postman)

## Requirements
- Node.js
- npm (Node Package Manager)

## Design Choices
- This implementation combines command-line tools (`nslookup`) with an external DNS lookup API to provide comprehensive DNS data for specified domains.
- While the original requirement suggested querying dark web data, I chose a simpler approach that avoids dependency on specialized dark web services and focuses on DNS data.
- I initially explored using various APIs but found that either API keys were not free or they lacked sufficient coverage for this purpose. This hybrid approach offers more detailed information while keeping costs low.

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
### `GET /api/lookup`
- **Description**: Queries DNS records for a specified domain using an external API as well as `nslookup`.
- **Query Parameters**:
  - `domain`: The domain name to look up (e.g., `w3schools.com`).
- **Response**:
  - Returns JSON data containing the domain, detailed DNS records from the external API, and IP addresses from the local `nslookup`.
  
**Request Example**:
```bash
curl "http://localhost:3000/api/lookup?domain=w3schools.com"
```

**Sample Response**:
```json
{
    "domain": "w3schools.com",
    "curlApiResult": {
        "status": "OK",
        "hostname": "w3schools.com",
        "records": {
            "A": [
                {
                    "address": "13.248.240.135",
                    "ttl": 60
                },
                {
                    "address": "76.223.115.82",
                    "ttl": 60
                }
            ],
            "CNAME": [],
            "MX": [
                {
                    "exchange": "aspmx.l.google.com",
                    "priority": 1
                }
            ],
            "NS": [
                {
                    "nameserver": "ns-1409.awsdns-48.org"
                }
            ],
            "TXT": [
                "v=spf1 include:_spf.google.com -all"
            ]
        }
    },
    "nslookupAddresses": [
        "10.100.102.1"
    ]
}
```

## Testing with Postman

1. Open Postman and create a new request.

2. Select the request type as **GET**.

3. Enter the following URL in the request field:  
   ```
   http://localhost:3000/api/lookup?domain=w3schools.com
   ```

4. Click on the **Send** button.

5. You should receive a response similar to the example shown above in the **Sample Response** section.