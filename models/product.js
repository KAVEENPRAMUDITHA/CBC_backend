import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    altnames: {
        type: [String],
        default: []
    },
    price: {
        type: Number,
        required: true
    },
    labeledPrice: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true,
        default: ["https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fbeauty-products.html&psig=AOvVaw1XpFRcVgBDjhrMOUldxlNX&ust=1748629720568000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDyr76nyY0DFQAAAAAdAAAAABAL"]
    },
    stock: {
        type: Number,
        required: true
    }

})

const product = mongoose.model("product", productSchema);

export default product;