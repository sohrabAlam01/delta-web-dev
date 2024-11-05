const { string } = require('joi');
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Review = require("./review.js")
const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
       type: String,
       //in case when no image link is uploaded
       default: "https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=600",
       //in case when image link is uploaded but it is empty
       //set: (v)=>{v===""?"https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=600":v}
    },
    price: Number,
    location: String,
    country: String,

    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: Review
        }
    ]
   
});

//middleware to delete all the associated reviews with a listing when the listing gets deleted
listingSchema.post('findOneAndDelete', async(listing)=>{
    
   if(listing){
       await Review.deleteMany({_id: { $in: listing.reviews }});        
   }

});

const Listing = mongoose.model("Listing", listingSchema);  

module.exports = Listing;