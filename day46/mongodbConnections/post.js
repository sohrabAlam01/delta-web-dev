//////one to squillions relationship///////////
//in this relationship child stores the information of parents

const mongoose = require('mongoose')
let {Schema} = mongoose
async function main()
{
   mongoose.connect('mongodb://127.0.0.1:27017/mongoRelatioshshipsDemo')
}

main().then(()=>{
    console.log('connection established')
}).catch((err)=>{
    console.log(err)
})

//defining userSchema

let userSchema = new Schema({
    username: String,
    email : String
})

//creating model for userSchema
let User = mongoose.model("User", userSchema);

//defining postSchema
let postSchema = new Schema({
    likes : Number,
    user: {
        type: Schema.Types.ObjectId,
        ref : "User"
    }
})

//creatin model for postSchema
let Post = mongoose.model("Post", postSchema);

let addData = async ()=>{

    let user1 = new User({
        username: "sohrab_alam",
        email: "salimtauheed2002@gmail.com"
    })

    let post1 = new Post({
        likes: 100
    })
    post1.user = user1;

   let userInfor =  await user1.save();
   let postInfo =  await post1.save();
   console.log(userInfor)
   console.log(postInfo)
}


//adding this after adding one user

const addPost = async ()=>{
     let theUser = await User.findById("670764ecc985f152484b59f9");

     let post2 = new Post({
        likes : 50,
     })
    post2.user = theUser;

    let thePost =  await post2.save();
    console.log(thePost);
}



const getPost = async ()=>{
  let myuser = await Post.findOne({}).populate("user")
  let postWithUsernameOnly = await Post.findOne({}).populate("user", "username")  //it will only populate the username in the result, do not populate the email
 console.log(myuser);
 console.log(postWithUsernameOnly);
}
//addData();
// addPost();
getPost();
