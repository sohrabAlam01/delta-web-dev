const express = require('express')
const app = express()

//if path is not specified then this middlware will be called for each route and it will send the same responce to each route and no rounte will be called since it has send the responce before they do so that's why we use next() to execute the next route after middleware executes
app.use((req, res)=>{
    res.send("Hello guys i am middleware")
})


app.get("/", (req, res)=>{
    res.send("this is the home root")
})

app.get("/random", (req, res)=>{
    res.send("this is the random root")
})


app.listen(8080, ()=>{
    console.log("i am listening");
})

