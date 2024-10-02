//creating an utility middleware (logger info)


const express = require('express')
const app = express()

//this is lighter version of the npm library morgan which is a middleware

app.use((req, res, next)=>{
   // console.log(req); 
   req.time = new Date(Date.now()).toString();   //Date.Now() : it returns the current date and time in a different formate and object new Date() will convert into the date and time format and toString() convert it into a string foramte 
   console.log(req.ip, req.path, req.method, req.time, req.hostname);
    next();
})

//executing middleware for a specific req path
//this middleware will be called for all the req path that starts from "/" path since all the path starts from "/" hence it will be called for all the requested path
//so it is the equivalent to the middleware which does not have any specific path i.e app.use((req, res, next)=>{...})
app.use("/", (req, res, next)=>{
    console.log("i am middleware for the '/' path")
    next();
})

//it will be invoked for all the request path that starts from "/random" does not matter if it is a valid path or not i.e for /random/anything/someting...

app.use("/random", (req, res, next)=>{
    console.log("I am the random middleware")
    next()
})


app.get("/home", (req, res)=>{
    res.send("I am the home route");
})




//if none of any request route is matched written above then it will send the request at last 
//for 404

app.use((req, res, next)=>{
    res.status(404).send("Page not found");
})


app.listen(8080, ()=>{

})