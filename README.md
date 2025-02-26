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

   Clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/himanshu181749/image-processor.git
   cd image-processor
   ```

2. **Install Dependencies**

   Navigate to the project directory and install the necessary dependencies:

   ```bash
   npm install
   ```

3. **Run the Server**

   Start the server using the following command:

   ```bash
   npm start
   ```

---

## **Sample CSV File**

Below is an example of a CSV file that can be uploaded to the API:

```csv
S. No.,Product Name,Input Image Urls
1,Teddy Bear,https://images.pexels.com/photos/4488352/pexels-photo-4488352.jpeg
2,Toy Car,https://images.pexels.com/photos/163036/toy-car-car-mini-cooper-mini-163036.jpeg
```

---

For detailed design information, please refer to the [Design Document](https://github.com/himanshu181749/image-processor/blob/main/DESIGN.md). Additionally, the Low-Level Design (LLD) documentation can be found [here](https://github.com/himanshu181749/image-processor/blob/main/system-diagram.png).

This documentation provides all the necessary details to effectively utilize the Image Processing API. For further assistance, please visit the project's [GitHub repository](https://github.com/himanshu181749/image-processor) or contact our support team.
