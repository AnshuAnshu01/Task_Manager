# 🚀 MERN Task Manager

A full-stack **Task Manager web application** built using the **MERN stack (MongoDB, Express, React, Node.js)**.  
This application allows users to securely manage daily tasks with authentication, real-time updates, and a clean productivity-focused UI.

---

## 📑 Table of Contents

- [Features](#features)
- [Tools and Technologies](#tools-and-technologies)
- [Dependencies](#dependencies)
- [Dev Dependencies](#dev-dependencies)
- [Prerequisites](#prerequisites)
- [Installation and Setup](#installation-and-setup)
- [Backend API](#backend-api)
- [Frontend Pages](#frontend-pages)
- [NPM Scripts](#npm-scripts)
- [Contact](#contact)

---

## ✨ Features

### 👤 User Features
- User Signup & Login
- Secure JWT Authentication
- Create, view, update, and delete tasks
- User-specific task management
- Logout functionality

### 🧑‍💻 Technical Features
- Token-based authentication
- Protected routes (frontend & backend)
- Global state management using Redux
- Toast notifications for success & errors
- Frontend & backend validations
- Custom React hooks (`useFetch`)
- Dynamic document titles
- Fully responsive UI using Tailwind CSS
- Reusable layout components
- RESTful API architecture
- Middleware-based authorization
- Clean and scalable code structure

---

## 🛠️ Tools and Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- Tailwind CSS
- React.js
- Redux
- Node.js
- Express.js
- MongoDB

---

## 📦 Dependencies

- axios
- react
- react-dom
- react-redux
- react-router-dom
- react-toastify
- redux
- redux-thunk
- bcrypt
- cors
- dotenv
- express
- jsonwebtoken
- mongoose

---

## 🧪 Dev Dependencies

- nodemon
- concurrently

---

## ✅ Prerequisites

- Node.js installed
- MongoDB (local or cloud)
- Code editor (VS Code recommended)

---

## ⚙️ Installation and Setup

1️⃣ Install all dependencies:

```bash
npm run install-all
2️⃣ Create a .env file inside the backend folder and add environment variables based on .env.example

3️⃣ Start both frontend and backend:

npm run dev


4️⃣ Open your browser and visit:

http://localhost:3000

🔗 Backend API Endpoints
POST     /api/auth/signup
POST     /api/auth/login
GET      /api/tasks
GET      /api/tasks/:taskId
POST     /api/tasks
PUT      /api/tasks/:taskId
DELETE   /api/tasks/:taskId
GET      /api/profile

🖥️ Frontend Pages
/                  Home (Public landing + Private dashboard)
/signup            User signup
/login             User login
/tasks/add         Add a new task
/tasks/:taskId     Edit an existing task

📜 NPM Scripts
Root

npm run dev – Start frontend & backend

npm run dev-server – Start backend only

npm run dev-client – Start frontend only

npm run install-all – Install all dependencies

Frontend

npm start – Start frontend

npm run build – Build frontend for production

Backend

npm run dev – Start backend with nodemon

npm start – Start backend normally

📬 Contact

Developer: Anshuman Panda
📧 Email: anshumanpanda481@gmail.com

🔗 LinkedIn: https://www.linkedin.com/in/anshuman-panda-9a22a2364/

🐙 GitHub: https://github.com/AnshuAnshu01