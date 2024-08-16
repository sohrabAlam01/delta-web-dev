const express = require("express"); 
const app = express();
const port = 3000;  //8080

app.listen(port, ()=>{
 console.log(`server is listening at port ${port}`);
})
//note app.use() can only use to send responce to all the routes 
//sending string in the responce

app.use((req, res)=>{
    console.log("req is received");
    res.send("This is my first responce");;
})

//sending an object in the responce

app.use((req, res)=>{
    console.log("req is received");
    res.send({name:"sohrab", profession:"Programmer"});
})

//sending html code in responce

let code = "<h1>Welcome</h1> <ul><li>Good morning</li></ul>";
app.use((req, res)=>{
  res.send(code);
})


//app.get(): this can be used to send the different responces to the different routes

app.get("/", (req, res)=>{
    res.send("this is home page")
})
app.get("/mobile", (req, res)=>{
    res.send("mobile items")
})
app.get("/computer", (req, res)=>{
    res.send("this is computer page")
})
app.get("/help", (req, res)=>{
    res.send("How can i help you")
})

//deafult response

app.get("*", (req, res)=>{
    res.send("Hello sir this path does not exist go back ")
})

//same way we can send the responce to post request using app.post() method

app.post("/", (req, res)=>{
   res.send("this is a post request to the root");
})

//path parameters: sending path as variable

app.get("/:username",  (req, res)=>{
    console.log(req.params);
    let username = req.params.username;
    let code = `<h1>welcome to the page @${username}</h1>`
    res.send(code);
})

//getting multiple routes as variable

app.get("/:username/:id", (req, res)=>{
    let {username, id} = req.params;
    res.send(`welcome to the @${username} and ${id}`)
})

//handeling query strings

app.get("/:search", (req, res)=>{

    
    console.log(req.query);
    let {q} = req.query;
    if(!q) {
        res.send("nothing searched")
    }
    res.send(`search result for query: ${q}`);
})