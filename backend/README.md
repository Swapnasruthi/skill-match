# SkillMatch Backend API

This is the backend API for the SkillMatch web application. It provides all the necessary endpoints for user authentication, project management, messaging, notifications, and networking functionality.

## Tech Stack

- Node.js
- Express.js
- MongoDB (with Mongoose ORM)
- JWT Authentication

## Project Structure

```
├── models/             # Database models
│   ├── User.js
│   ├── Project.js
│   ├── Message.js
│   └── Notification.js
├── routes/             # API routes
│   ├── auth.js
│   ├── projects.js
│   ├── users.js
│   ├── messages.js
│   ├── notifications.js
│   └── network.js
├── middleware/         # Middleware functions
│   ├── auth.js
│   └── error.js
├── .env                # Environment variables
├── package.json        # Project dependencies
└── server.js           # Main application file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB instance (local or Atlas)

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRE=30d
   ```

### Running the Server

Development mode:
```
npm run dev
```

Production mode:
```
npm start
```

## API Documentation

### Authentication Routes

- **POST /api/auth/register** - Register a new user
- **POST /api/auth/login** - User login
- **GET /api/auth/me** - Get current logged-in user
- **GET /api/auth/logout** - Logout user

### Project Routes

- **GET /api/projects** - Get all projects (with filtering options)
- **GET /api/projects/featured** - Get featured projects
- **GET /api/projects/:id** - Get a single project
- **POST /api/projects** - Create a new project
- **PUT /api/projects/:id** - Update a project
- **DELETE /api/projects/:id** - Delete a project
- **PUT /api/projects/:id/like** - Like/unlike a project
- **GET /api/projects/user/:userId** - Get all projects by a specific user

### User Routes

- **GET /api/users** - Get all users (with search option)
- **GET /api/users/:id** - Get a single user
- **PUT /api/users/:id** - Update a user profile
- **GET /api/users/:id/connections** - Get a user's connections
- **PUT /api/users/updatepassword** - Change user password

### Networking Routes

- **POST /api/network/connect/:id** - Send a connection request
- **POST /api/network/accept/:id** - Accept a connection request
- **POST /api/network/reject/:id** - Reject a connection request
- **DELETE /api/network/disconnect/:id** - Remove a connection
- **GET /api/network/pending** - Get pending connection requests
- **GET /api/network/suggestions** - Get connection suggestions

### Message Routes

- **GET /api/messages** - Get all conversations
- **GET /api/messages/:userId** - Get messages with a specific user
- **POST /api/messages/:userId** - Send a message
- **DELETE /api/messages/:messageId** - Delete a message
- **PUT /api/messages/:userId/read** - Mark all messages from a user as read

### Notification Routes

- **GET /api/notifications** - Get all notifications
- **GET /api/notifications/count** - Get unread notification count
- **PUT /api/notifications/:id** - Mark notification as read
- **PUT /api/notifications/read/all** - Mark all notifications as read
- **DELETE /api/notifications/:id** - Delete a notification

## Connecting with the Frontend

To connect this backend with the React frontend, make sure to:

1. Set up proper CORS configuration in the server.js file
2. Configure the frontend to send requests to the backend API endpoints
3. Implement token-based authentication on the frontend
4. Store JWT in localStorage or cookies for persistent sessions

## Error Handling

All API routes include proper error handling with appropriate HTTP status codes and error messages. For security reasons, detailed error messages are only shown in development mode.

## Data Validation

Input data validation is performed at multiple levels:
1. Mongoose schema validation
2. Custom validation middleware for routes
3. JWT verification for protected routes