const express =  require("express");
const app = express();
const mysql = require("mysql2");
const path = require("path");


//creating connection with the database
 
const connection = mysql.createConnection({
   host : "localhost",    //we can use "127.0.0.1" instead of "localhost" because the ip 127.0.0.1 refers to the localhost as loop back ip address
   user : "root",
   database : "delta_App",
   password: "12345678"
});











app.listen("8080", ()=>{
    console.log("i am listening on port 8080");
})



