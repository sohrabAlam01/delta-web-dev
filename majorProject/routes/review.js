const express = require('express')
const router = express.Router({mergeParams : true});
const Review = require("../models/review.js");
const { listingSchema, reviewSchema } = require("../joiSchemaValidator.js")
const expressError = require('../utils/expressError.js')
const wrapAsync = require('../utils/wrapAsync.js');
const { merge, param } = require('./listing.js');
const Listing = require("../models/listing.js");

  



//function to validate review schema using joi
let validateReviewSchema = (req, res, next)=>{
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=> el.message).join(",")
        throw new expressError(404, errMsg)
    }
    else{
        next()
    }
};



//Review post route
router.post("/", validateReviewSchema, wrapAsync( async(req, res) => {

    const newReview = new Review(req.body.review);
    const listing = await Listing.findById(req.params.id);
  
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();

    res.redirect(`/listings/${listing._id}`)
   
}))


//Review delete route

router.delete("/:reviewId", wrapAsync(async(req, res)=>{
               
            let {id, reviewId} = req.params;
            await Listing.findByIdAndUpdate(id, {$pull : {reviews: reviewId}});
            await Review.findByIdAndDelete(reviewId);
            res.redirect(`/listings/${id}`);

}));

module.exports = router;