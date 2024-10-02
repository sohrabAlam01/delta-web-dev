const express = require('express')
const app = express()

//next() : it will call the next middleware if exists and then it will call the request route 
//note:  if middleware is written after the requested route then it will not execute so we mainly write middleware before the requested route
app.use((req, res, next)=>{
    console.log("i am the first middleware");
    next()
})

app.use((req, res, next)=>{
    console.log("I am the second middleware");
    next()
})

app.get("/", (req, res)=>{
    res.send("I am the home route")
})

app.get("/random", (req, res)=>{
    res.send("I am the random route")
})








app.listen(8080, ()=>{
    console.log("i am listening");
})