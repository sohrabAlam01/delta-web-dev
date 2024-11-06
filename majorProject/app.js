const express = require('express');
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const path = require("path");
const listing = require('./routes/listing.js');
const review = require("./routes/review.js");
const { listingSchema, reviewSchema } = require("./joiSchemaValidator.js")
const wrapAsync = require('./utils/wrapAsync.js')
const expressError = require('./utils/expressError.js')
const methodOverride = require('method-override');
//setting up ejs-mate. ejs-mate is basically used as the include 
const ejsMate = require('ejs-mate');
const { findById } = require('./models/review.js');
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




//listings route file
app.use('/listings', listing);

//reviews routes file
app.use('/listings/:id/reviews', review);

app.get("/", (req, res) => {
    res.send("hello guys how are you");
});




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