# **Image Processing API Documentation**

This document provides comprehensive information about the Image Processing API, a RESTful service designed to process images from CSV files, optimize them, and store metadata in MongoDB. The API supports asynchronous processing with request tracking and optional webhook notifications.

---

## **Features**

- **CSV Upload**: Accepts CSV files containing image URLs.
- **Validation**: Ensures the CSV file is correctly formatted and the images are accessible.
- **Image Processing**: Utilizes the Sharp library to resize images to 50% quality.
- **Asynchronous Processing**: Returns a `requestId` for tracking the processing status.
- **Status API**: Allows retrieval of job progress and processed image URLs.
- **Webhook Support**: Provides an optional callback mechanism to notify when processing is complete.

---

## **API Endpoints**

### **1. Upload API**

- **Endpoint**: `POST /api/upload`
- **Content-Type**: `multipart/form-data`
- **Parameters**:
  - `csv` (**required**): A CSV file containing columns `S. No.`, `Product Name`, and `Input Image Urls`.
  - `webhookUrl` (_optional_): A URL to receive a callback notification upon completion of image processing.

#### **Example Response**

```json
{
  "requestId": "f3b08031-e8b9-40a4-8a42-77ba2aa04fe3"
}
```

### **2. Status API**

- **Endpoint**: `GET /api/status/:requestId`
- **Returns**: The processing status and URLs of the processed images.

#### **Example Response**

```json
{
  "requestId": "f3b08031-e8b9-40a4-8a42-77ba2aa04fe3",
  "status": "completed",
  "products": [
    {
      "serialNo": 1,
      "productName": "Teddy Bear",
      "inputImageUrls": [
        "https://images.pexels.com/photos/4488352/pexels-photo-4488352.jpeg"
      ],
      "outputImageUrls": ["http://localhost:3000/output/1740499321061.jpg"]
    }
  ]
}
```

---

## **Setup and Deployment**

To set up and deploy the Image Processing API, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/himanshu181749/image-processor.git
   cd image-processor
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Server**

   ```bash
   npm start
   ```

4. **Testing the API through Postman**

   - **Install Postman**: Download and install Postman from [postman.com](https://www.postman.com/).

   - **Configure the Upload API**:

     - Create a new `POST` request in Postman.
     - Set the URL to `http://localhost:3000/api/upload`.
     - Select the `multipart/form-data` content type in the Body tab.
     - Add the following fields:
       - `Key`: `csv`, `Type`: `File`, `Value`: Select your `test.csv` file.
       - `Key`: `webhookUrl` (_optional_), `Type`: `Text`, `Value`: A valid webhook URL.
     - Send the request to receive a `requestId` in the response.

   - **Configure the Status API**:
     - Create a new `GET` request in Postman.
     - Set the URL to `http://localhost:3000/api/status/:requestId`, replacing `:requestId` with the `requestId` received from the Upload API.
     - Send the request to retrieve the processing status and processed image URLs.

---

### Postman Collection (Shortcut for the Testing)

You can use the provided Postman collection to test the API endpoints. Download the collection from the repository and import it into Postman.

---

For detailed design information, please refer to the [Design Document](https://github.com/himanshu181749/image-processor/blob/main/DESIGN.md). Additionally, the Low-Level Design (LLD) documentation can be found [here](https://github.com/himanshu181749/image-processor/blob/main/system-diagram.png).

For further assistance, please visit the project's [GitHub repository](https://github.com/himanshu181749/image-processor) or contact our support team.
