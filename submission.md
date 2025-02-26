### Google Doc Content: Image Processing System Submission

#### Image Processing System Assignment Submission

**Prepared by: HIMANSHU GUPTA**  
**Date: February 24, 2025**

---

### Project Overview

This document outlines the submission for my Image Processing System project, designed to process image data from CSV files, shrink images to 50% quality, store results in a database, and provide APIs for tracking progress. The project meets all assignment requirements and includes bonus features like webhook notifications. Below are the key components and links for review.

---

### Submission Details

1. **GitHub Repository**

   - **Description**: Contains all project code, design documents, diagram, and API documentation.
   - **Link**: [Insert GitHub Repo URL here, e.g., `https://github.com/your-username/image-processor`]
   - **Contents**:
     - Source code (`src/`, `app.js`, etc.) written in Node.js.
     - `DESIGN.md`: Technical design document detailing the system architecture and flow.
     - `system-diagram.png`: Visual flowchart of the system (created using Draw.io or similar).
     - `README.md`: Project overview and API documentation.
     - `image-processor-postman-collection.json`: Postman collection for testing APIs.

2. **Postman Collection**

   - **Description**: A publicly accessible Postman collection file for testing the `POST /api/upload` and `GET /api/status/:requestId` APIs.
   - **Link**: [Insert Postman Collection Raw URL here, e.g., `https://raw.githubusercontent.com/your-username/image-processor/main/image-processor-postman-collection.json`]
   - **Details**:
     - Includes requests to upload a CSV file and check the processing status.
     - Ready for import into Postman for immediate testing.

3. **Technical Design Document**

   - **Location**: Included in the GitHub repository as `DESIGN.md`.
   - **Purpose**: Provides a detailed explanation of the system’s components, flow, and implementation, written in my own voice.
   - **Key Sections**:
     - Overview of the system’s goals and functionality.
     - Description of components (Upload API, Image Processing, Database, Status API, Webhook).
     - System flow from CSV upload to webhook notification.
     - Tech stack used (Node.js, Express, Multer, Sharp, MongoDB, Axios, Papa Parse).

4. **Visual Diagram**

   - **Location**: Included in the GitHub repository as `system-diagram.png`.
   - **Purpose**: A flowchart illustrating the system’s architecture and data flow, created using Draw.io.
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

- Please review the links provided above to access the GitHub repository and Postman collection.
- The repository contains all necessary files for evaluation, including source code, documentation, and the visual diagram.
- For any questions or clarifications, feel free to contact me at [Your Contact Info, e.g., email or student ID].

---

### Formatting Tips for Google Docs

- **Copy This Text**: Paste it into a new Google Doc at [docs.google.com](https://docs.google.com/).
- **Style It**:
  - Use “Title” for “Image Processing System Assignment Submission.”
  - Use “Heading 1” for “Project Overview” and “Submission Details.”
  - Use “Heading 2” for each numbered item (e.g., “GitHub Repository,” “Postman Collection”).
  - Keep the body text as “Normal Text.”
  - Use “Hyperlink” for the links (highlight the placeholder text like “[Insert GitHub Repo URL here]” and click the link icon to add your URL).
- **Add Links**:
  - Replace `[Insert GitHub Repo URL here]` with your actual GitHub URL (e.g., `https://github.com/your-username/image-processor`).
  - Replace `[Insert Postman Collection Raw URL here]` with your Postman raw URL (e.g., `https://raw.githubusercontent.com/your-username/image-processor/main/image-processor-postman-collection.json`).
- **Share It**:
  - File → Share → “Anyone with the link” → Copy the link to attach to the Google Form.

---

### Why This Looks Pro

- **Structured**: Clear sections with headings for easy reading.
- **Professional**: Formal tone, no slang, but still personal (e.g., “I built it with…”).
- **Complete**: Covers everything from the assignment—GitHub, Postman, design doc, diagram, APIs.
- **Flexible**: You can add your name, contact, or adjust the tone before submitting.

---

### Your Turn

- Copy this text into a new Google Doc.
- Add your GitHub and Postman links where indicated (share those URLs with me if you want a quick check!).
- Format it as described (headings, hyperlinks).
- Say “Done!” when you’ve got the Google Doc ready to attach—or “Help!” if you need assistance (e.g., can’t share the doc or format it).
- If you’re set to submit, say “Next!” to confirm, and we’ll wrap up.

How’s it looking? Ready to plug in those links and submit? 😊 What’s next?
