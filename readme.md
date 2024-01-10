# Endpoints

## GET /books/

### Description

Get all the books. Public

### Request

- Method: `GET`
- Endpoint: `/books/`

### Response

- Status Code: `200 OK`
- Body:
  ```json
  [
    {
      "_id": "659c5d02bbcbe3c154b8aac8",
      "title": "The Great Gatsby First Book",
      "author": "F. Scott Fitzgerald",
      "__v": 0
    },
    {
      "_id": "659ddbf9f1b1532301ee06fd",
      "title": "Hamlet",
      "author": "William Shakespeare",
      "genre": "Classic",
      "createdBy": "furkan3",
      "__v": 0
    },
    {
      "_id": "659ddc4bf1b1532301ee0700",
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "genre": "Tragedy",
      "createdBy": "furkan",
      "__v": 0
    }
  ]
  ```

## Get Users

### Request

- Method: `GET`
- Endpoint: `/users`
- Token: Need Bearer Token
- Request Header Auth:Bearer eyJh...

- Status Code: `200 OK`
- Body:
  ```json
  [
    {
      "_id": "659dc084ed2386b88a87ef9d",
      "username": "furkan1",
      "email": "furkangonulal.dev@gmail.com",
      "role": "realUser",
      "favCreditLeft": 10
    },
    {
      "_id": "659dc192967aded29eb26d74",
      "username": "furkan2",
      "email": "furkangonulal.dev2@gmail.com",
      "role": "realUser",
      "favCreditLeft": 10
    },
    {
      "_id": "659dc1ffdba862586571460e",
      "username": "furkan3",
      "email": "furkangonulal.dev3@gmail.com",
      "role": "realUser",
      "favCreditLeft": 10
    }
  ]
  ```

# Authentication Endpoints

## User Registration

### Endpoint

#### Request

- Method: `POST`
- Endpoint: `/auth/register`
- Body:
  ```json
  {
    "username": "furkan3",
    "password": "password",
    "email": "furkangonulal.dev3@gmail.com"
  }
  ```

#### Response

- Body:
  Status Code: `200 OK`
  ```json
  {
    "username": "furkan4",
    "email": "furkangonulal.dev4@gmail.com",
    "registered": true
  }
  ```

##### Failed

- Failed Attempt
  Status Code: `400 Bad Request`
  ```json
  {
    "error": "Username already exists"
  }
  ```

## User Login

### Request

- Method: `POST`
- Endpoint: `/auth/login`
- Status Code: `200 OK`
- Body:
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTlkZGY1OWYxYjE1MzIzMDFlZTA3MGMiLCJ1c2VybmFtZSI6ImZ1cmthbjQiLCJpYXQiOjE3MDQ4NDU3MTMsImV4cCI6MTcwNDg0OTMxM30.u4XDtfgICpnI7p83qZh-BUsWZvRtfrPsP_WX3XXjn5g",
    "user": {
      "name": "furkan4",
      "role": "realUser",
      "email": "furkangonulal.dev4@gmail.com"
    }
  }
  ```

##### Failed

- Failed Attempt
  Status Code: `401 Unauthorized`
  ```json
  {
    "error": "Invalid credentials"
  }
  ```
- Failed 2
- Status Code: `404 Not Found`
  ```
  {
  "code": 404,
  "message": "Cannot read properties of null (reading 'username')",
  "timestamp": "10.01.2024 03:17:29",
  "request": {
      "method": "POST",
      "url": "/auth/login"
  }
  }
  ```

##### Challenges I've Encountered

- Time Management
- Adapting New Tech Stack when you have a limited time is overwhelming
- First day dedicated to use NestJs And Native MongoDB was taking much time so i continued with Javascript and Mongoose
- Unit tests for key functionalities are highly encouraged. [Dont even know what unit testing is yet need to research]
- Email addresses must be unique. [Need regex? Also need to use my time more effectively]
- Users can favorite a maximum of 10 books. [Dont know how to implement this need to research]
- Implement Dockerfile and Docker Compose for the application.[Dont know what Dockerfile and Docker Compose is need to research ]
- Error Handling was a challange im newly adapting it and its features.
- Server Setup: Set up a VPS with Ubuntu.[I've set up VPS with Ubuntu 1 to 2 times with AWS but didn't have time to even try Portainer]
- Should have committed commit messages more via git.

##### Enjoyed the task and the challanges
