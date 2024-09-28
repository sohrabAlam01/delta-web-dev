const express = require('express');
const app =  express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride =  require('method-override');
//setting up ejs
app.set("view engine", "ejs");

app.set("views", __dirname + "/views");          //app.set("views", path.join(__dirname, "views")); since __dirname is a node.js variable that returns the address of the current directory in which the app.js is present
//to parse(encode) the url
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

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


//note: put new route above the show route bcs "/listings/:id" is confusing with "/listings/new"
//new route: rout to render a form to create a new listing
app.get("/listings/new", (req, res)=>{
    res.render("listings/newListing.ejs");
})
//show route: to show an individual listing

app.get("/listings/:id", async (req, res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
})


//routr to save the entered listing info

  app.post("/listings", async (req, res)=>{
    //let {title, description, price, location, country} =  req.body; //this is also a way to get the information from post request
    // console.log(req.body.listing)
    let listing = new Listing(req.body.listing);
    //console.log(listing);
   await listing.save();
   res.redirect("/listings");
  })

//route to render the edit form
app.get("/listings/:id/edit",async (req, res)=>{
    let {_id} = req.params;
    let listing = await Listing.findById("66f7e4153be96a5563b30525");
    //console.log(listing); 
    res.render("listings/edit.ejs", {listing});
});

//update route

app.put("/listings/:id", async (req, res)=>{
    let {id} = req.params;
   // console.log(req.body.listing);
  //  console.log(await Listing.findById(id));
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
})


//delete route

app.delete("/listings/:id", async (req, res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings"); 
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