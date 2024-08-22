const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true})); //it is to parse the url post data received by post request(req.body())
app.use(express.json());  //it is to parse the json data sent with post request
//handeling get request :

app.get("/register", (req, res)=>{
  let {username, password} = req.query;
  res.send(`your username is: ${username} and password is: ${password}`);
})

//handeling post request

app.post("/register", (req, res)=>{
   // console.log(req.body);  //it is an object type 
    let {username, password} = req.body;
    res.send(`your username is ${username} and password is ${password}`);
})

app.get("/", (req, res)=>{
       res.send(`Welcome to the home page`);
})

app.listen(port, ()=>{
    console.log(`i am listening to port ${port}`);
})