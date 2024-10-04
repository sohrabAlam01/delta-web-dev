const express = require('express');
const app = express()
const myCustomErrorClass = require('./myErrorClass.js');

app.get("/err", (req, res)=>{
    abcd = abcd;  //it will generate an error when /err request is done
   
    
})

//error handeling in the async function 
app.get("/user", async (req, res, next)=>{
    next(new myCustomErrorClass(501, "User not found"));  //since async function does not invoke next() unlike a normal function that's why we have to call next manually
})


//custom error handeler 

app.use((err, req, res, next)=>{
    
    res.send(err.message)
    throw new myCustomErrorClass(err);

  // next(err) //it will invoke the next error handling middleware after error occures, if next() is not written then page will generate an error and stops
    // next() //it will invoke the next non error handling middleware after error occures
})

//throwing a custom error for /admin route
app.get("/admin", (req, res)=>{
    throw new myCustomErrorClass(401, "non admin user is denied for this access");
})

//default route: it will invoked as the non error handling middleware i.e when next() is written without err argument in the previous error handling middleware
app.use((req, res)=>{
    res.status(504).send("Page not found i am the non error handling middleware");
})


//error handeling middleware 

app.use((err, req, res, next)=>{
   // res.status(404).send("i am the 2nd error handling middleware")
   //throw new Error("ERROR OCCURED"); //this is the built in error class in js
console.log(err.status, err.message)

 // res.send(err);    // err: {"status":401,"message":"this is the custom error occured"}
  let {status = 500, message = "Unknown error occured"} = err;  //in case if valid error status (in range of 4xx and 5xx )is not sent then it will set the status to 500
  res.status(status).send(message) //if status is valid status then it will send this error message
})




app.listen(8080, ()=>{})