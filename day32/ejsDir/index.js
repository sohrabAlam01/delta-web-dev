const express = require("express");
const app = express();
const port = 8080;
//since express always search for the directory views inside of the current wirking directory that is why if we run the server from 
//the other directoty that does not have the views dir as the direct child then first we set the path for the express to search for the
// views in a specific directory setting the path


const path = require("path");
app.set("views", path.join(__dirname, "/views")); //saying express to find for the template file always in the views folder

app.set("view enigne", "ejs");

app.get("/", (req, res) => {
    // res.send("i am home");
    res.render("home.ejs");   //expree by default search the home file in views directory so we do not need to specify the path and 
                            //we can ommit .ejs too. since ejs searche by using just name of the file
})


//creating router for the rooDice template
app.get("/rollDice", (req, res)=>{
    //let  assume the value we are getting is comming from database
    let diceVal = Math.floor(Math.random()*6 + 1);
    res.render("rollDice.ejs", {num: diceVal})
})

//creating router to render instagram page
app.get("/ig/:username", (req, res)=>{
    let {username} = req.params;
    let followers = ["Muskan", "abc", "xyz", "sohrab"];
    res.render("instaPage.ejs", {username, followers});
})

//for instagram pages templete
 
app.get("/insta/:username", (req, res)=>{
    let instaData = require("./data.json");
    //console.log(instaData);
    let {username} = req.params; //collecting data accoding to the specific username
    const data = instaData[username];
    console.log(data);
  if(data) res.render("instagram.ejs", {data});
  else{
    res.render("error.ejs");
  }

})


app.listen(port, () => {
    console.log(`app is listening at port ${port}`);
})