const express = require('express');
const app = express()
const myCustomErrorClass = require('./myErrorClass.js');

//error handler besed on the name of the error

const referenceErrorHandler = (err)=>{
    if(err.name == "ReferenceError"){
       console.log("This was a ReferenceError please check the variables declaration");
       console.dir(err.message);
       return err;
    }
}


//using asyncWrap function to haldle all the async function: instead of writing try and catch block for each async function we can write a asyncWrap function onece and use with all the async function

function asyncWrap(fn){
    return function (req, res, next){
       fn(req, res, next).catch((err)=>next(err));
    }
}

//using asyncWrap

app.get("/err2", asyncWrap (async (req, res, next)=>{
    abcd = abcd; //it will generate an error
}))


app.use((err, req, res, next)=>{
    if(err.name === "ReferenceError") {
       err =  referenceErrorHandler(err);
       next(err);
    }
 })
app.get("/err", (req, res)=>{
    abcd = abcd;  //it will generate an error when /err request is done
})
//using try and catch block: always write async function in the try block to catch different kinds of unknown errors

//error handeling in the async function 
app.get("/user", async (req, res, next)=>{

   try{
    abcd = abcd;
   } catch(err){
 
       next(new myCustomErrorClass(501, "User not found"));  //since async function does not invoke next() unlike a normal function that's why we have to call next manually
   }
})
app.get("/users", async (req, res, next)=>{

   try{
    abcd = abcd;
   } catch(err){
    next(err);
   }
})

//custom error handeler 

app.use((err, req, res, next)=>{
    console.log(err.name)
    res.send(err.message)

   // throw new myCustomErrorClass(err);

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
//console.log(err.status, err.message)

 // res.send(err);    // err: {"status":401,"message":"this is the custom error occured"}
  let {status = 500, message = "Unknown error occured"} = err;  //in case if valid error status (in range of 4xx and 5xx )is not sent then it will set the status to 500
  res.status(status).send(message) //if status is valid status then it will send this error message
})




app.listen(8080, ()=>{})