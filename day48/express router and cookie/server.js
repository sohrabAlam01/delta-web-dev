const express = require('express');
const app = express();
const users = require("./routes/users.js")
const posts = require("./routes/posts.js")
//cookie parsing
const cookieParser = require('cookie-parser');
app.use(cookieParser("secretcode"));  //it is for signed cookie
app.use(cookieParser());  //it is to send normal cookie


//routes for users
app.use("/users", users);             //it means jis bhi req ki route /users se shuru hoti hai uski mapping users file me ki jayegi after appendiing initial route that is /users to tearget route in users.js file


//routes for posts
app.use("/posts", posts);      //req route which starts with "/posts" will be matched in the 'posts' file after appending '/posts' to each route in posts file







///////////cookies////////

app.get("/getcookies", (req, res)=>{
    res.cookie("Greet", "Good Evening")
    res.cookie("user_name", "Sohrab Alam")  //note: first argument of res.cookie must be without space

    res.send("sent you some cookies");
})

//accessing cookies
app.get("/greet", (req, res)=>{
  
    console.dir(req.cookies);
    let{user_name, Greet = "Good day"} = req.cookies;
    res.send(`hi ${user_name}, ${Greet}`);

})

//getting signedCookie : to make sure cookie sent by the server is not tempred when it is accessed

//

app.get("/getsignedcookie", (req, res)=>{

    res.cookie("crush", "Muskan", {signed : true});
    res.cookie("religion", "Islam", {signed : true});
    res.send("sent you some signed cookies");

});

//accessing signed cookie

app.get("/verify", (req, res)=>{

    console.log(req.cookies);  //only gets without signed cookies
    console.log(req.signedCookies) //only gets signed cookies
    let {crush, religion} = req.signedCookies;
    res.send(`my crush is ${crush}, religion: ${religion}`);

})






app.listen(3000, ()=>{
    console.log("server is listenig to 3000");
});