# Crystal Beauty Clear Backend

This is the backend for the Crystal Beauty Clear application.

## Technologies Used

*   Express.js
*   Mongoose
*   bcrypt
*   jsonwebtoken
*   body-parser
*   nodemon

## Overview

The backend provides API endpoints for managing users, products, and orders. It uses Mongoose for interacting with a MongoDB database. Authentication is implemented using JWT tokens and bcrypt for password hashing.

## Key Files

*   `index.js`: Entry point of the application.
*   `package.json`: Lists project dependencies and scripts.
*   `middleware/auth.js`: Middleware for verifying JWT tokens.
*   `controllers/`: Contains controllers for handling user, product, and order related requests.
*   `models/`: Defines the data models for users, products, and orders.
*   `routes/`: Defines the API routes for users, products, and orders.
