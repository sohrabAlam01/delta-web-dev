const express = require('express');
const app = express();
const users = require("./routes/users.js")
const posts = require("./routes/posts.js")

//routes for users
app.use("/users", users);             //it means jis bhi req ki route /users se shuru hoti hai uski mapping users file me ki jayegi after appendiing initial route that is /users to tearget route in users.js file


//routes for posts
app.use("/posts", posts);      //req route which starts with "/posts" will be matched in the 'posts' file after appending '/posts' to each route in posts file



app.listen(3000, ()=>{
    console.log("server is listenig to 3000");
})