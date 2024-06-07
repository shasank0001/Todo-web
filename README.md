# Todo App

A simple todo application where a user can login, add todos, mark them as completed, and view all their todos. The project uses React for the front end, Express and Node.js for the backend, and MongoDB for the database.

## Features

- User authentication (login)
- Add todos
- View todo list
- Mark todos as completed

## Technologies Used

- Frontend: React
- Backend: Node.js, Express
- Database: MongoDB
- ORM: Mongoose
- Validation: Zod

## Installation

### Prerequisites

- Node.js
- MongoDB

## Backend Setup

1. Navigate to the `backend-todo` directory:

   ```bash
   cd backend-todo
2. Install the dependencies:
    npm install
3. Start the backend server:
    node index.js
## Frontend Setup

1. Open a new terminal window and navigate to the frontend directory:
    cd frontend
2.Install the dependencies:
    npm i
3. Start the frontend development server:
    npm run dev
## Usage

# Backend
The backend server will run on http://localhost:3000 by default. The following endpoints are available:

POST /todos: Create a new todo.
GET /todos: Retrieve all todos for a user.
PUT /todos/:id: Mark a todo as completed.
# Frontend
The frontend server will run on http://localhost:3000 by default. You can access the user interface in your web browser and interact with the todo application.