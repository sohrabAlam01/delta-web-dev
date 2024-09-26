const express = require('express');
const app =  express();
const mongoose = require("mongoose");


//creating and connecting database happyHaven

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/happyhaven');
}



app.get("/", (req, res)=>{
    res.send("hello guys how are you");
})


app.listen(8080, (req, res)=>{
    console.log("i am listening");
})