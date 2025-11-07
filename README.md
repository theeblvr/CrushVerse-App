# CrushVerse App

CrushVerse is a playful social app that allows realtime messaging. This repository contains the backend API built with Node.js and Express.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Folder Structure](#folder-structure)

## Features
 
- Custom JWT Authentication and secure login  
- RESTful API with Node.js and Express  
- Modular controller and route structure  
- Real-time Messaging via Socket.io
- Welcome Emails on Signup via Resend
- Image Uploads with Cloudinary
- MongoDB for Data Persistence

## Tech Stack

- **Backend Framework:** Node.js with Express.js
- **Database:** MongoDB Atlas 
- **Authentication:** JWT (JSON Web Tokens)  
- **File Storage:** Cloudinary

## Setup Instructions

To get started with the backend locally:

1. **Install Node.js**

   Download and Install from the official website if you don't have it installed: [http://nodejs.org](https://nodejs.org)

2. **Install MongoDB and create a cluster**

   If you don't have MongoDB installed:
   - Sign up at [MongoDB](https://www.mongodb.com)
   - Follow this guide to create a cluster: [MongoDB Atlas Getting Started](https://www.mongodb.com/docs/atlas/getting-started/)

3. **Clone the repository**

   ```bash
   git clone https://github.com/theeblvr/CrushVerse-App.git
   cd CrushVerse-App/backend
   ```

4. **Install dependencies**

   Run the command below to install all required packages
   ```bash
   npm install
   ```

5. **Set up environment variables**

   Open .env and copy the example file below to fill in the required values
   ```
   PORT=3000
   MONGO_URI=your_mongo_uri_here

   NODE_ENV=development

   JWT_SECRET=your_jwt_secret

   RESEND_API_KEY=your_resend_api_key

   EMAIL_FROM=email_from_address
   EMAIL_FROM_NAME=your_email_from_name

   CLIENT_URL=http://localhost:3000

   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

6. **Run the application**

   Start the server with the command below:
   ```bash
   npm run dev
   ```
   You should get a confirmation message in the terminal indicating that the server is running.

## Folder Structure

   ```
  backend/
   ├── src/
   │   ├── config/       # Configuration files
   |   |   ├── cloudinary.js       # Configures Cloudinary for image & media uploads
   |   |   ├── database.js       # Sets up and exports the database connection logic
   |   |   ├── index.js       # Exporting environment variables
   |   |   ├── resend.js       # Configures resend API for sending transactional emails
   |   |   ├── socket.js       # Initializes and configures WebSocket server for real-time communication
   |   |   ├── utils.js       # Contains JWT configurations for token generation & expiration
   │   ├── controllers/       # Logic for handling requests
   |   |   ├── auth.controller.js       # Handles signup, login, logout, and profile updates
   |   |   ├── message.controller.js       # Manages messaging operations and retreiving accounts
   │   ├── middleware/       # Middleware Functions
   |   |   ├── auth.middleware.js       # Contains logic to verfiy user authentication
   |   |   ├── socket.auth.middleware.js       # Authenticate users before allowing socket connections
   │   ├── models/            # Mongoose models 
   |   |   ├── message.model.js       # Schema and model for user messages
   |   |   ├── user.model.js       # Schema and model for user accounts
   │   ├── routes/            # API route definitions
   |   |   ├── auth.route.js       # Defines route for authentication endpoints
   |   |   ├── message.route.js       # Sets up route for message related calls
   │   ├── services/       # Logic for handling requests
   |   |   ├── emailHandler.js       # Sends emails using configured templates
   │   ├── templates-emails       # Email template
   |   |   ├── welcome.js       # Template for email
   │   └── server.js          # Entry point
   ├── .env        # Environment Variables
   ├── .gitignore        # Ignored files for git
   ├── package.json        # Project dependencies
   ├── README.md        # Project documentation

   ```

