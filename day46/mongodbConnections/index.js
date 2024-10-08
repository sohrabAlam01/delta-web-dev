const mongoose = require('mongoose')

async function main() {
    mongoose.connect('mongodb://127.0.0.1:27017/mongoRelatioshshipsDemo')
}

main().then(() => { console.log("connection established") })
    .catch((err) => {
        console.log(err)
    })

 let userSchema = new mongoose.Schema({
    user: String,
    addresses: [
        {
            _id: false,  //then mongoose will not assing the _id to individual addresses
            location: String,
            city: String
        }
    ]
 });
 
 let User = mongoose.model("User", userSchema);

 //function to add users data

const addUsers = async ()=>{
    let user1 = new User({
        user: "Muskan",
        addresses: [
            {
                 location: "near Ashneer house",
                 city: "Delhi"
            },
            {
                 location: "p13 street 12",
                 city: "Mumbai"
            },
            
        ]
    })

    //we can also push the address from outside of schema
    user1.addresses.push({
        location: "T13 road 3",
        city: "Hyderabad"
    });

    let result = await user1.save();
    console.log(result)
}

addUsers();