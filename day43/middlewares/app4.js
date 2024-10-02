//API token as query string
//creating a middleware that checks if a specific token was passed in the query string or not

const express = require('express')
const app = express()

//it will check if the access token "giveaccess" is passed in the query string or not for the req path that starts from "/api"

app.use("/api", (req , res, next)=>{
    let {token} = req.query;
    if(token === "giveaccess") next()
    else res.send("ACCESS DENIED!")
})

//all the req paths that starts from "/api" will be invoked only if query string has "giveaccess" i.e http://localhost:8080/api/home?token=giveaccess

 app.get("/api/home", (req, res)=>{
    res.send("I am the home root and you are now allowed to visit me")
 })

//passing multiple middleware


 app.listen(8080, ()=>{})