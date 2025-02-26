### Image Processing System Submission

**Prepared by: HIMANSHU GUPTA**  
**Date: February 24, 2025**

---

### Project Overview

This document outlines the submission for my Image Processing System project. The system processes image data from CSV files, reduces image quality to 50%, stores results in a database, and provides APIs for tracking progress. The project meets all assignment requirements and includes bonus features like webhook notifications. Below are the key components and links for review.

---

### Submission Details

1. **GitHub Repository**

   - **Description**: Contains all project code, design documents, diagrams, and API documentation.
   - **Link**: [GitHub Repository](https://github.com/himanshu181749/image-processor)
   - **Contents**:
     - Source code (`src/`, `app.js`, etc.) written in Node.js.
     - `DESIGN.md`: Technical design document detailing the system architecture and flow.
     - `system-diagram.png`: Visual flowchart of the system (created using Draw.io or similar).
     - `README.md`: Project overview and API documentation.
     - `image-processor-postman-collection.json`: Postman collection for testing APIs.

2. **Postman Collection**

   - **Description**: A publicly accessible Postman collection file for testing the `POST /api/upload` and `GET /api/status/:requestId` APIs. It is also available in the repository named `image-processor-postman-collection.json`.
   - **Link**: [Postman Collection](https://github.com/himanshu181749/image-processor/blob/main/image-processor-postman-collection.json)
   - **Details**:
     - Includes requests to upload a CSV file (a `test.csv` is available in the repo for testing) and check the processing status.
     - Ready for import into Postman for immediate testing.

3. **Technical Design Document**

   - **Location**: Included in the GitHub repository as `DESIGN.md`.
   - **Purpose**: Provides a detailed explanation of the system’s components, flow, and implementation.
   - **Key Sections**:
     - Overview of the system’s goals and functionality.
     - Description of components (Upload API, Image Processing, Database, Status API, Webhook).
     - System flow from CSV upload to webhook notification.
     - Tech stack used (Node.js, Express, Multer, Sharp, MongoDB, Axios, Papa Parse).

4. **Visual Diagram**

   - **Location**: Included in the GitHub repository as `system-diagram.png`.
   - **Purpose**: A flowchart illustrating the system’s architecture and data flow, created using Eraser.io.
   - **Details**:
     - Shows the user, APIs, database, image processing, output folder, and webhook interactions.
     - Clear arrows and labels for a professional presentation.

5. **API Documentation**

   - **Location**: Included in the GitHub repository as part of `README.md`.
   - **Purpose**: Clear specifications for the `POST /api/upload` and `GET /api/status/:requestId` endpoints.
   - **Details**:
     - Describes endpoints, methods, request formats, response formats, and example requests/responses.
     - Includes a sample CSV for testing.

6. **Tech Stack**

   - **Languages/Frameworks**: Node.js, Express (for APIs), Multer (file uploads), Sharp (image processing), MongoDB (database), Axios (HTTP requests), Papa Parse (CSV parsing), UUID (request IDs).
   - **Notes**: NoSQL database (MongoDB) used; Redis was optional but not required for this submission.

7. **Additional Notes**

   - The system successfully handles CSV validation, asynchronous image processing (direct in this version), database storage, and webhook notifications (bonus feature).
   - All components have been tested locally and meet the assignment requirements, including the bonus webhook flow.
   - Please refer to the GitHub repository for the full project, including any updates or fixes applied during development.

---

### Submission Instructions

- For testing and evaluation purposes, please refer to the `README.md` file.
- Review the links provided above to access the GitHub repository and Postman collection.
- The repository contains all necessary files for evaluation, including source code, documentation, and the visual diagram.
- For any questions or clarifications, feel free to contact me at `himanshuhimanshu282@gmail.com` or `+917992423198`.

---
