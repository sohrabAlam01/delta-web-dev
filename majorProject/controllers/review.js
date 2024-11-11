const Review = require('../models/review');
const Listing = require('../models/listing');

module.exports.postReview = async(req, res) => {
    
    const listing = await Listing.findById(req.params.id);
    const newReview = new Review(req.body.review);
    newReview.author = req.user._id;
  
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    
    req.flash("success", "New review added") 
    res.redirect(`/listings/${listing._id}`)
 
};

module.exports.deleteReview = async(req, res)=>{
               
    let {id, reviewId} = req.params;
    await Listing.findByIdAndUpdate(id, {$pull : {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review deleted successfully")
    res.redirect(`/listings/${id}`);

};

