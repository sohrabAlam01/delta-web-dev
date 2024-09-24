const express = require('express');
const app = express();
const mongoose = require("mongoose");
const path = require('path');
const Chat = require('./models/chat.js');
const methodOverride = require('method-override');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

async function main(){
   await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

main().then((res)=>{
   console.log("connection successfull");
}).catch((err)=>{
    console.log(err)
})
  
//telling the ejs that the static files like javascript and css files are in the public folder
//app.use(express.static(__dirname, "public"));
app.use(express.static(__dirname + "/public"))  //__dirname is a special variable in Node.js that contains the absolute path to the directory in which the current JavaScript file is located.
                                                 //For example, if your JavaScript file is located at /home/user/project/app.js, then __dirname will be /home/user/project.
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"))
//index route to show all the chats
app.get("/chats", async (req, res)=>{
    let chats = await Chat.find();
    res.render("index.ejs", {chats});
})

//route to save the message in the database

app.post("/chats", (req, res)=>{
    let {from, msg, to} = req.body;
    let chat = new Chat({
        from : from,
        msg: msg,
        to: to,
        created_at: new Date()
    });

    chat.save().then((res)=>{
        console.log("chat is saved");
    }).catch((err)=>{
        console.log(err);
    });

    res.redirect("/chats");          
})

//edit route

app.get("/chats/:id/edit", async (req, res)=>{       //since finding in database in asynchronous i.e use async function
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
})

//update route

app.put("/chats/:id", async (req, res)=>{
    let {id} = req.params;
    let {msg:newMsg} = req.body;
   await Chat.findByIdAndUpdate(id, {msg: newMsg}, {runValidators: true})
    res.redirect("/chats");
});


//delete route
app.delete("/chats/:id",async (req, res)=>{
    let {id} = req.params;
   await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
})



//home route
app.get("/chats/new", (req, res)=>{
    res.render("newChat.ejs");
})





app.get("/", (req, res)=>{
    res.send("i am the root node");
})





app.listen(8080, ()=>{
    console.log("i am listening to port 8080");
});