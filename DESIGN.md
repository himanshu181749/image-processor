# Image Processing System: Technical Design Document

## Overview

This document outlines the technical design of an advanced image processing system developed to handle CSV files containing product names and image URLs. The system reduces image quality to 50% to optimize loading times and stores all relevant details in a database. Users receive a unique identifier to track the status of their requests and can check the progress at any time. Additionally, a webhook notification feature informs users upon the completion of the image processing task.

## Objectives

The primary objectives of this project were:

- Accept a CSV file containing columns such as `S. No.`, `Product Name`, and `Input Image Urls`.
- Validate the integrity of the CSV file before processing.
- Reduce the image quality to 50% to optimize loading times while maintaining acceptable visual quality.
- Store all relevant details, including the new image URLs, in a database to ensure data persistence.
- Provide users with a unique identifier to track the status of their requests.
- Implement a webhook notification system to inform users upon the completion of the image processing task.

## System Components

The system is composed of several key components:

### 1. Upload API

- **Endpoint**: `POST /api/upload`
- **Functionality**: Allows users to upload a CSV file containing product information. Optionally, users can provide a `webhookUrl` for notifications upon completion.
- **Implementation**:
  - Utilizes Multer to handle file uploads, ensuring the file is named `csv`.
  - Employs Papa Parse to validate and parse the CSV file, checking for required columns: `S. No.`, `Product Name`, and `Input Image Urls`. If any columns are missing, the upload is rejected.
  - Generates a unique `requestId` using `uuid`, stores the initial data in MongoDB, and initiates the image processing workflow immediately.
- **Response**: Returns a JSON object containing the `requestId` for tracking purposes: `{ "requestId": "unique-id" }`.

### 2. Image Processing Service

- **Functionality**: Downloads images from the URLs in the CSV, reduces their quality to 50%, and saves them with unique names.
- **Implementation**:
  - Uses Axios to download each image.
  - Utilizes Sharp to reduce the image quality to 50% and saves it in the `output/` folder with a unique name.
  - Updates the database with the new image URLs.
- **Considerations**: Ensures the `output/` folder exists to avoid errors.

### 3. Database Interaction

- **Tool**: MongoDB
- **Schema**:
  - `requestId`: A unique identifier for each job.
  - `status`: Indicates the current state of the job (`pending`, `completed`, or `failed`).
  - `products`: An array containing objects with properties: `serialNo`, `productName`, `inputImageUrls`, and `outputImageUrls`.
  - `webhookUrl`: An optional field for the callback URL provided by the user.
- **Process**:

  - Saves initial information with empty `outputImageUrls`.
  - Updates the `outputImageUrls` as images are processed.
  - Marks the `status` as “completed” once all images are processed.

  ![DB request collections](image.png)

### 4. Status API

- **Endpoint**: `GET /api/status/:requestId`
- **Functionality**: Provides users with the current status of their image processing request.
- **Implementation**:
  - Queries MongoDB with the `requestId` to retrieve the relevant record.
  - Returns the `requestId`, `status`, and all `products` with their input and output URLs.

### 5. Webhook Handling

- **Functionality**: Sends a notification to a specified URL upon completion of the image processing task.
- **Implementation**:
  - Sends a POST request with Axios to the `webhookUrl` when the `status` is “completed”.
  - Includes error handling to log any issues with the webhook.

### Webhook Response Example

You can check out the response of the webhook here: `https://webhook.site/#!/view/0395fd13-ebf9-46d7-b824-37897bea87a3`

## Workflow

The following steps outline the workflow of the application:

1. Users upload a CSV to `/api/upload`.
2. The CSV is validated, and a `requestId` is generated and saved in MongoDB.
3. The image processing service downloads and processes each image.
4. MongoDB is updated with the new image URLs.
5. The `status` is updated to “completed” once all images are processed.
6. If a `webhookUrl` is provided, a notification is sent upon completion.
7. Users can check the status via `/api/status/:requestId`.

![Workflow of the App](image-2.png)

## Technologies Used

The following technologies were used to build the system:

- **Node.js**: The runtime environment.
- **Express**: Framework for building APIs.
- **Multer**: Middleware for handling file uploads.
- **Sharp**: Image processing library.
- **MongoDB**: Database for storing data.
- **Axios**: HTTP client for downloading images and sending webhooks.
- **Papa Parse**: CSV parsing library.
- **UUID**: Library for generating unique identifiers.
