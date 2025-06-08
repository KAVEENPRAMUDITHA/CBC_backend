import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
import verifyJwt from './middleware/auth.js';
import orderRouter from './routes/orderRouter.js';

//database connection
const app = express();

mongoose.connect("mongodb+srv://admin:1234@ccb.lmnja.mongodb.net/?retryWrites=true&w=majority&appName=CCB").then(
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
