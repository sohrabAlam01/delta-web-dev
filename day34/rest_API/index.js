const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
//requiring the uuid to generate universally unique ids
const { v4: uuidv4 } = require('uuid');
//method-override to override the post or get request of html form to patch, delete, and put request
const methodOverride = require('method-override');
// override with POST having ?_method=DELETE (it will search for ?_method is the query string if it finds it then it overrides that request)
app.use(methodOverride('_method'));


// let id = 4;  //to assing new id to new post since we already have 3 posts
//to parse urlencoded data we get through post request
app.use(express.urlencoded({ extended: true }));

//setting view engine to ejs

app.set("view engine", "ejs");
//for views folder path i.e for templete


app.set("views", path.join(__dirname, "views"));

//for the public folder

app.use(express.static(path.join(__dirname, "public")));


//this array is mimiking the database

let posts = [
    {
        username: "Sohrab",
        content: "Be a guy who embraces pain, suffering and discipline!",
       // id: "1a"
       id : uuidv4()
    },
    {
        username: "Muskan",
        content: "i am an architect student at jamia millia Islamia.",
       // id: "2b"
       id : uuidv4()
    },
    {
        username: "Umme Halima",
        content: "i am dating myself and i am happy too.",
        //id: "3c"
        id : uuidv4()
    }
];

//route to display all the posts ...

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
    //res.send("server working well");
})

//creating a new post in two steps
//1.route to get form for creating a new post

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
})

//2. creating the new post using the entered info at posts/new route

app.post("/posts", (req, res) => {
    // console.log(req.body);
    let { username, content } = req.body;
   // let newId = `${id++}d`;
   let newId =  uuidv4();
    posts.push({ username, content, id: newId });
    //redirecting to get("/posts") route
    res.redirect("/posts");
})

//showing the individual post on the basis of their id

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    //console.log(post);

    if (post) res.render("show.ejs", { post });
    else {
        res.status(404).send("post not found");
    }
})

//route to edit the post content via patch request

app.patch("/posts/:id", (req, res)=>{
    let { id } = req.params;
   // console.log(id);
    let newContent = req.body.content;
    let post = posts.find((p)=>id === p.id);
    post.content = newContent;
   // console.log(post); 
   res.redirect("/posts");
})

//edit route

app.get("/posts/:id/edit", (req, res)=>{
    let { id } = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("edit.ejs", {post});
})

//destroy route

app.delete("/posts/:id", (req, res)=>{
    let { id } = req.params;
    posts = posts.filter((p)=> id !== p.id);
    res.redirect("/posts");
})




/*
app.get("/", (req, res)=>{
    res.send("server is working");
})
*/
app.listen(port, () => {
    console.log(`App is listening to port ${port}.`);
})