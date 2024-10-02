//////////passing multiple middlewares////////////

const express = require('express')
const app = express()


let tokenCheck = (req , res, next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
       console.log("i am the first middle ware")
       next()
    } 
    else res.send("ACCESS DENIED!")
}

let middleware2 = (req, res, next)=>{
       console.log("I am the second middle ware")
       next()
}

app.get("/api/home", tokenCheck, middleware2, (req, res)=>{                      //first tokenCheck then middleware2 will be called as it is the firsrt argument
    res.send("I am the home root and you are now allowed to visit me")
 })

 
 app.listen(8080, ()=>{})