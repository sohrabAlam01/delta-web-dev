const express = require('express');
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const { listingSchema } = require("./joiSchemaValidator.js")
const wrapAsync = require('./utils/wrapAsync.js')
const expressError = require('./utils/expressError.js')
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


//function to validate schema using joi
let validateSchema = (req, res, next)=>{
        let {error} = listingSchema.validate(req.body);
        if(error){
            let errMsg = error.details.map((el)=> el.message).join(",")
            throw new expressError(404, errMsg)
        }
        else{
            next()
        }
};

//index route to show all the data
app.get("/listings",wrapAsync( async (req, res, next) => {
    let allListings = await Listing.find({});
    res.render("listings/allListings.ejs", { allListings });
}))


//note: put new route above the show route bcs "/listings/:id" is confusing with "/listings/new"
//new route: rout to render a form to create a new listing
app.get("/listings/new", (req, res) => {
    res.render("listings/newListing.ejs");
})

//show route: to show an individual listing

app.get("/listings/:id", wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
}))


//create route: routr to save the entered listing info

app.post("/listings", validateSchema, wrapAsync (async (req, res, next) => {
   
        //let {title, description, price, location, country} =  req.body; //this is also a way to get the information from post request
       //manual way:  if(!req.body.listing) throw new expressError(400, "Bad request! Please enter a valid listing"); //if somebody sends an empty listing through direct hoppscotch
        
        let newListing = new Listing(req.body.listing);

        /*
        lengthy method to check validation of the intered fields before saving it
         if(!newListing.title) throw new expressError(400, "title is missing");
         if(!newListing.description) throw new expressError(400, "Listing is missing");
        */ 
       

        await newListing.save();
        res.redirect("/listings");

})); 



//route to render the edit form
app.get("/listings/:id/edit", wrapAsync( async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
}));

//update route

app.put("/listings/:id", validateSchema, wrapAsync( async (req, res, next) => {
    let { id } = req.params;
    // console.log(req.body.listing);
    //  console.log(await Listing.findById(id));
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
}));


//delete route

app.delete("/listings/:id", wrapAsync( async (req, res, next) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
}))

//default route: when none of the above route matches with the request then this route will be called by default that means not a valid request

app.all("*", (req, res, next)=>{
    next(new expressError(404, "Page not found!"));
})

 
//middleware to handle error for any route
app.use((err, req, res, next) => {
   // res.send("Something went wrong")  //it will take care of error at server side before saving the documents in the database like validation error, constraints etc
   let {statusCode = 500, message = "Something went wrong"} = err;
   res.status(statusCode).render("./Errors/error.ejs", {statusCode, message});
//    res.status(statusCode).send(message);
})

app.listen(8080, (req, res) => {
    console.log("i am listening");
})