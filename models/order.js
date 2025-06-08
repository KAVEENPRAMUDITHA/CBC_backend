import mongoose from "mongoose";


const orderShema = new mongoose.Schema({

    orderId: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "pending"
    },
    phoneNumber: {
        type: String,
        required: true
    },
    billItems: {
        type: [{
            productId: String,
            productName: String,
            Image: String,
            quantity: Number,
            price: Number
        }
        ],
        required: true
    },
    total: {
        type: Number,
        required: true
    }
})
const Order = mongoose.model("order", orderShema);
export default Order;