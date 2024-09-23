
 ////////////////////////schema validation//////////////////////////

const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

main().then((res)=>{
    console.log("connection successfull");
})

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required : true,   //title field is required , it can not be null
        maxLength: 20      //length of title can not be more than 20
    },
    author:{
        type: String
    },
    price: {
        type: Number,
        min : [1, "price must be set to 1 or greater than 1 for amazon listing"]
    },
    discount: {
        type: Number,
        default: 10    
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"]  //category field must contain only those value which is in enum array
    },
    genre: {
        type: [String]  //this field can contain array of strings only
    }
});

//creating a model i.e creating a collection books

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "Mathematics",
    author: "RD Sharma",
    price: 300
});

let book2 = new Book({
    title: "Computer network",
    author: "Ibrahim",
    price: "666"
});

let book3 = new Book({
    title: "Computer science",
    author: "seest",
    price: 343
});

book3.save().then((res)=>{
    console.log(res)
});

book1.save().then((res)=>{
    console.log(res)
})
.catch((res)=>{
    console.log(err)
});

book2.save().then((res)=>{
    console.log(res)
})
.catch((res)=>{
    console.log(err)
});

let book4 = new Book({
    title: "Space science",
    author: "gorge",
    price: 600,
    category : "fiction",
    genre: ["sci-fi", "horror", "thriller", "romance"]
});

book4.save().then((res)=>{
    console.log(res)
});

let book6 = new Book({
    title: "Space science",
    author: "gorge",
    price: -1,
    category : "fiction",
    genre: ["sci-fi", "horror", "thriller", "romance"]
});

book6.save().then((res)=>{
    console.log(res)
}).catch((err)=>{
          console.log(err.errors.price.properties.message);
});

//////////////////update operations/////////////////////

Book.findByIdAndUpdate('66f1b9fa99d10c3dfcac81eb', { price: -34})   //this updation will not follow the schema validation unless se set an option {runValidators: true}
.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err)
});

//to follow the schema validation set {runValidators: true}

Book.findByIdAndUpdate("66f1b65b823cb58e090b215a",  {category: "fiction"}, {runValidation : true})
.then((res)=>{
    console.log(res);
})