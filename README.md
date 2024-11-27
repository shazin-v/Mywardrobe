# MERN Stack E-Commerce Project

This is a full-stack e-commerce application built with the MERN stack: **MongoDB**, **Express.js**, **React.js**, and **Node.js**.

The project consists of two main folders:

- `client`: The front-end React application.
- `server`: The back-end Node.js/Express application.

---

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (local or cloud-based, e.g., MongoDB Atlas)

---

# Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Set Up Environment Variables

Both the client and server folders require .env files. Ensure the following variables are configured:

Front-End .env (inside client folder)

```bash
REACT_APP_API_URL=http://localhost:5000
```

Back-End .env (inside server folder)

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
---

# Run the Application

### Start the Front-End

Navigate to the client folder and run:

```bash
cd client
npm install
npm start
```

This starts the React app on http://localhost:3000.

### Start the Back-End

Navigate to the server folder and run:

```bash
npm install
npm run dev
```

This starts the Node.js server on http://localhost:5000.

---

# Usage

Open your browser and go to http://localhost:3000 for the front-end.
The front-end will interact with the back-end APIs running on http://localhost:5000.

---

# Features

### Front-End:

- Responsive UI built with React and Tailwind CSS.
- User authentication and secure routes.
- Product catalog with filtering and searching.
- Shopping cart and order management.

### Back-End:

- RESTful API with Node.js and Express.
- MongoDB database for data persistence.
- JWT-based authentication.
- API routes for products, orders, and users.

# TODO:
- Implement payment gateway integration.
- Integrate searching features
- Impliment category search
- Implement user profile management

