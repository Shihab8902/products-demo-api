require("dotenv").config();
const cors = require('cors')
const express = require("express");
const app = express();

const productsRoutes = require("./app");
const {connectDB} = require("./model/productsModel");

const PORT = process.env.PORT || 3000;
//Listen server
app.listen(PORT, async ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
    await connectDB();
});


//Used modules
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(productsRoutes);


//Default routes
app.get("/", (req, res)=>{
    res.status(200).sendFile(__dirname + "/views/home.html");
});

app.get("*",(req, res)=>{
    res.status(404).sendFile(__dirname + "/views/error.html");
});