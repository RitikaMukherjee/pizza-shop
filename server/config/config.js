const mongoose = require("mongoose");
const connectDB = async ()=>{
    try{
        const url = process.env.MONGO_URL;
        const conn = await mongoose.connect(url,{
            
        })
        console.log("connection successfull")
    }catch(err){
        console.log(err);
    }
}
module.exports= connectDB;