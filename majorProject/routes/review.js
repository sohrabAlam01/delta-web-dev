const express = require('express')
const router = express.Router({mergeParams : true});
const Review = require("../models/review.js");
const wrapAsync = require('../utils/wrapAsync.js');
const Listing = require("../models/listing.js");
const {validateReviewSchema, isLoggedIn, isReviewAuthor, isOwner} = require("../middleware.js");
  






//Review post route
router.post("/", isLoggedIn, validateReviewSchema, wrapAsync( async(req, res) => {
    
    const listing = await Listing.findById(req.params.id);
    const newReview = new Review(req.body.review);
    newReview.author = req.user._id;
  
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    
    req.flash("success", "New review added") 
    res.redirect(`/listings/${listing._id}`)
 
}))


//Review delete route

router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(async(req, res)=>{
               
            let {id, reviewId} = req.params;
            await Listing.findByIdAndUpdate(id, {$pull : {reviews: reviewId}});
            await Review.findByIdAndDelete(reviewId);
            req.flash("success", "Review deleted successfully")
            res.redirect(`/listings/${id}`);

}));

module.exports = router;