import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
import verifyJwt from './middleware/auth.js';
import orderRouter from './routes/orderRouter.js';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

//database connection
const app = express();
app.use(cors());

mongoose.connect(process.env.MONGODB_URL).then(
    () => {
        console.log("Connected to the database");
    }
).catch(
    () => {
        console.log("Connection failed");
    }
)



//middlewares
app.use(bodyParser.json());
app.use(verifyJwt);

//api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);

//server port
app.listen(5000,
    () => {
        console.log("Server is running on port 5000");
    }
)
