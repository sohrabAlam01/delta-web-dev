
//connecting database college with javascript using mongoose
const mongoose = require('mongoose');
async function main(){
await mongoose.connect('mongodb://127.0.0.1:27017/college');     //it awaits for a promise to return from database when executes i.e it is async function
}

//we will execute main() by calling it to connect with mongodb 

main().then((res)=>{
  //console.log(res);
  console.log("connection seccessful");
})
.catch((err)=> console.log("connection seccessfull"));

const studentSchema = new mongoose.Schema({
             name : String,
             age : Number,
             email : String
});

//creating a collection students in the database college

const Student = mongoose.model("Student", studentSchema);

//inserting document in the database

const s1 = new Student ({
    name : "Sohrab",
    age : 22,
    email: "sohrab@gmail.com"
});
//saving in the student collection , it returs a promise
s1.save()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err)
});

//creating and inserting doc s2
const s2 = new Student({
   name: "Batman",
   age: 55,
   email: "batman@yahoo.com"
});

s2.save()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});

//inserting and saving many docs in the collection

Student.insertMany([
    {name: "Muskan", age: 20, email: "muskan@gmail.com"},
    {name: "Geet", age: 21, email: "geet@gmail.com"},
]).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});

//find operations

//finding all the docs without imposing any filter

Student.find({}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});

//finding docs imposing some filters

Student.find({age: {$gt: 20}}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
}); 

//extracting info from found array of docs

Student.find({age:{$gte: 20}})
.then((data)=>{
    console.log(data[0].name);
});

//finding one doc 

Student.findOne({age:{$gt: 20}})
.then((data)=>{
    console.log(data);
});


//finding by using id findById

Student.findById('66f11d01a77b726ed2ca6011').then((res)=>{
    console.log(res);
});


//updating documents

//updating a single document

Student.updateOne({name: "Muskan"},{age: 12}).then((res)=>{
    console.log(res);
});

//updating many at once

Student.updateMany({age:{$gt: 20}}, {age:55}).then((res)=>{
    console.log(res);
});


//findOneAndUpdate  Student.findOneAndUpdate({filters},{updation},{options})

Student.findOneAndUpdate({name: "Batman"},{name: "Bruce"})     //it will return the older (post update)document because by default option is set to false {new : false}
.then((data)=>{
    console.log(data);
});

//now printing new updated document

Student.findOneAndUpdate({name : "Bruce"}, {name: "Bruce Bayne"}, {new : true})
.then((res)=>{
    console.log(res);
});

//findByIdAndUpdate

Student.findByIdAndUpdate({_id: '66f11d01a77b726ed2ca6011'},{age : 20},{new: true})
.then((res)=>{
    console.log(res);
});

/////////////////////////////////delete in mongoose////////////////////////////////////////////

//deleteOne({condition},{options}) : it returns only acknowledgement not the deleted documents

Student.deleteOne({name: "Bruce Bayne"}).then((res)=>{
    console.log(res);
});

//deleteMany({filter}, {options}) : it returns only acknowledgement not the deleted documents

Student.deleteMany({age:{$lte : 20}})
.then((res)=>{
console.log(res);
});

//findByIdAndDelete("id") : it returns the deleted document

Student.findByIdAndDelete('66f08813028dcfd71a6f4dc0')
.then((res)=>{
    console.log(res);
});

//findOneAndDelete({condition}, {option})

Student.findOneAndDelete({name: "Geet"})
.then((res)=>{
    console.log(res)
});


