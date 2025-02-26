# **Image Processing API**

A RESTful API that processes images from a **CSV file**, optimizes them, and stores metadata in **MongoDB**. Supports **asynchronous processing** with **request tracking** and optional **webhook notifications**.

---

## **Features**

- **CSV Upload** – Accepts CSV files with image URLs.
- **Validation** – Ensures correct format and accessible images.
- **Image Processing** – Resizes images to **50% quality** using **Sharp**.
- **Asynchronous Processing** – Returns a `requestId` for tracking.
- **Status API** – Retrieves job progress and processed image URLs.
- **Webhook Support** – Optional callback when processing is complete.

---

## **API Endpoints**

### **1. Upload API**

- **Endpoint:** `POST /api/upload`
- **Content-Type:** `multipart/form-data`
- **Parameters:**
  - `csv` (**required**) – CSV file containing `S. No.`, `Product Name`, and `Input Image Urls`.
  - `webhookUrl` (_optional_) – URL to receive a callback when processing completes.

#### **Example Response**

```json
{
  "requestId": "f3b08031-e8b9-40a4-8a42-77ba2aa04fe3"
}
```

---

### **2. Status API**

- **Endpoint:** `GET /api/status/:requestId`
- **Returns:** Processing status and output image URLs.

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

## **Setup & Deployment**

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

---

## **Sample CSV File**

```csv
S. No.,Product Name,Input Image Urls
1,Teddy Bear,https://images.pexels.com/photos/4488352/pexels-photo-4488352.jpeg
2,Toy Car,https://images.pexels.com/photos/163036/toy-car-car-mini-cooper-mini-163036.jpeg
```

---
