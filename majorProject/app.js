const express = require('express');
const app =  express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

//setting up ejs
app.set("view engine", "ejs");

app.set("views", __dirname + "/views");          //app.set("views", path.join(__dirname, "views")); since __dirname is a node.js variable that returns the address of the current directory in which the app.js is present
//to parse(encode) the url
app.use(express.urlencoded({extended:true}));

//creating and connecting database happyHaven 

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/happyhaven');
}

main().then(()=>{})
.catch((err)=>{
    console.log(err);
})


app.get("/", (req, res)=>{
    res.send("hello guys how are you");
});

//index route to show all the data
app.get("/listings", async (req, res)=>{
    let allListings = await Listing.find({});
    res.render("listings/allListings.ejs", {allListings});  
})

//show route: to show an individual listing

app.get("/listings/:id", async (req, res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
})


  









/*
//database testing route
app.get("/testingdb", async (req, res)=>{
    let l1 = new Listing({
        title: "Calm haven for stay",
        description:"Stay with beautiful nature",
        price: 6000,
        location: "Hugai",
        country: "Singapur"
    });

    await l1.save()
    console.log("listing is saved");
    res.send("successfull testing");
});
*/


app.listen(8080, (req, res)=>{
    console.log("i am listening");
})