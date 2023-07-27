require("dotenv").config();
const mongoose = require('mongoose');


//Connect to the database
const database_URL = "mongodb+srv://shihab8902:shihab@cluster0.46sshii.mongodb.net/products";
const connectDB = async()=>{
    try {
        await mongoose.connect(database_URL);
        console.log("Connected to the database successfully!!");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}


//Products schema
const productsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    
    price:{
        type: Number,
        required: true
    },

    rating:{
        type: Number,
        required: true
    },

    description: {
        type: String
    },

    createdAt:{
        type: Date,
        default: Date.now()
    }
    
})


//Products model
const products = mongoose.model("products", productsSchema);









module.exports = {connectDB, products};