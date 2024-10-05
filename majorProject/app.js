const express = require('express');
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const wrapAsync = require('./utils/wrapAsync.js')
const methodOverride = require('method-override');
//setting up ejs-mate. ejs-mate is basically used as the include 
const ejsMate = require('ejs-mate');
app.engine("ejs", ejsMate);
//setting up folder's path in which static files like css and js are written
app.use(express.static(__dirname + "/public"));  //we can also use: app.use(express.static)
//setting up ejs
app.set("view engine", "ejs");

app.set("views", __dirname + "/views");          //app.set("views", path.join(__dirname, "views")); since __dirname is a node.js variable that returns the address of the current directory in which the app.js is present
//to parse(encode) the url
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//creating and connecting database happyHaven 

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/happyhaven');
}

main().then(() => { })
    .catch((err) => {
        console.log(err);
    })


app.get("/", (req, res) => {
    res.send("hello guys how are you");
});

//index route to show all the data
app.get("/listings", async (req, res) => {
    let allListings = await Listing.find({});
    res.render("listings/allListings.ejs", { allListings });
})


//note: put new route above the show route bcs "/listings/:id" is confusing with "/listings/new"
//new route: rout to render a form to create a new listing
app.get("/listings/new", (req, res) => {
    res.render("listings/newListing.ejs");
})
//show route: to show an individual listing

app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
})


//create route: routr to save the entered listing info



app.post("/listings",wrapAsync (async (req, res, next) => {
   
        //let {title, description, price, location, country} =  req.body; //this is also a way to get the information from post request
        // console.log(req.body.listing)
        let listing = new Listing(req.body.listing);
        //console.log(listing);
        await listing.save();
        res.redirect("/listings");

})); 




//route to render the edit form
app.get("/listings/:id/edit", async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    //console.log(listing); 
    res.render("listings/edit.ejs", { listing });
});

//update route

app.put("/listings/:id", wrapAsync( async (req, res) => {
    let { id } = req.params;
    // console.log(req.body.listing);
    //  console.log(await Listing.findById(id));
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
}));


//delete route

app.delete("/listings/:id", async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
})




//middleware to handle error for any route
app.use((err, req, res, next) => {
    res.send("Something went wrong")  //it will take care of error at server side before saving the documents in the database like validation error, constraints etc
})

app.listen(8080, (req, res) => {
    console.log("i am listening");
})