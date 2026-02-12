const mongoose = require('mongoose');


const connectDB = async() =>{
    try{
        mongoose.connect('mongodb://localhost:27017/bookStore')
        .then(()=>console.log("DB connected"))
        .catch((err)=>{
            console.log("DB failed");
        })
    }catch(err){
        console(err)
    }
}
module.exports = connectDB;