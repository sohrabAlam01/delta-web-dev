const express = require('express')
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js')
const Listing = require("../models/listing.js");
const { listingSchema, reviewSchema } = require("../joiSchemaValidator.js")
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js")





//function to validate listing schema using joi

//index route to show all the data
router.get("/", wrapAsync( async (req, res, next) => {
    let allListings = await Listing.find({});
    res.render("listings/allListings.ejs", { allListings });
}))


//note: put new route above the show route bcs "/listings/:id" is confusing with "/listings/new"
//new route: rout to render a form to create a new listing
router.get("/new",  isLoggedIn, (req, res) => {

    res.render("listings/newListing.ejs");

})

//show route: to show an individual listing

router.get("/:id", wrapAsync(async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id).populate({path: "reviews", populate: {path: "author"}}).populate("owner");
    console.log(listing);
    if(!listing){
        req.flash("error", "Listing does not exist");
        res.redirect("/listings"); 
    }else
    res.render("listings/show.ejs", { listing });
}))


//create route: routr to save the entered listing info

router.post("/", isLoggedIn, validateListing , wrapAsync(async (req, res, next) => {
   
        //let {title, description, price, location, country} =  req.body; //this is also a way to get the information from post request
       //manual way:  if(!req.body.listing) throw new expressError(400, "Bad request! Please enter a valid listing"); //if somebody sends an empty listing through direct hoppscotch
        
        let newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;
        /*
        lengthy method to check validation of the intered fields before saving it
         if(!newListing.title) throw new expressError(400, "title is missing");
         if(!newListing.description) throw new expressError(400, "Listing is missing");
        */ 
       
        await newListing.save();
        req.flash("success", "New listing created")
        res.redirect("/listings");

})); 



//edit route: route to render the edit form
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync( async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing does not exist");
        res.redirect("/listings"); 
    }else
    res.render("listings/edit.ejs", { listing });
}));


//update route
router.put("/:id", isLoggedIn, isOwner, validateListing, wrapAsync( async (req, res, next) => {
    let { id } = req.params;

    let listing = await Listing.findById(id);
    if(!listing.owner.equals(res.locals.userInfo._id)){
        req.flash("error", "You do not have authorities to make changes")
        return res.redirect(`/listings/${id}`);
    }
    // console.log(req.body.listing);
    //  console.log(await Listing.findById(id));
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", "Listing updated successfully")
    res.redirect(`/listings/${id}`);
}));


//delete route
router.delete("/:id", isLoggedIn, isOwner, wrapAsync( async (req, res, next) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted successfully")
    res.redirect("/listings");
}));






module.exports = router;