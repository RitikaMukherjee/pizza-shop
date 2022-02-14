const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/config");
const app = express();
const port = process.env.PORT || 8080
dotenv.config();
connectDB();
//middleware
app.use(express.json());
// router
app.get("/",(req,res)=>{
    res.send("hello home");
})
app.listen(port,()=>{
    console.log(`server is running on localhost:8080`)
})