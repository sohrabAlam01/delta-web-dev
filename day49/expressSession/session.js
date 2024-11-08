const express = require('express');
const app = express();
const session = require('express-session')

//set up for connect-flash middleware
const flash = require('connect-flash');
app.use(flash());

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(session({secret: "mysecretcode" , resave : false, saveUninitialized: true }))

//middleware to set errorMsg and successMsg

app.use((req, res, next) =>{
      
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("failure"); 
    next();
});

//to cout the number of req an user sent during a session

app.get("/reqCount", (req, res)=>{
   
    if(req.session.count) req.session.count++;   //tracks the number of requests sent during a single session
    else req.session.count = 1;
    res.send(`you sent requests ${req.session.count} times`);

})


//usig express session to store session information so that this info can be use for other routes as well within the single session

app.get("/register", (req, res)=>{
     
     let {name = "Anonymous"} = req.query;
     req.session.name = name;
     

    if(name === "Anonymous"){
           req.flash("failure", "User not registered!")
    }
    else{
          req.flash("success", "User registered successfully!");
    }



     //res.send(name);
     res.redirect("/hello");

})

//using the above name information inthe /hello route

app.get("/hello", (req, res)=>{

   //console.log(req.flash("success"));     // [ 'user registered successfully' ]
    
    // res.locals.successMsg = req.flash("success");
    // res.locals.errorMsg = req.flash("failure");   //instead i used these two in middleware
      //res.render("page.ejs", {name: req.session.name, msg: req.flash("success") });
    res.render("page.ejs", {name: req.session.name });   //no need to send flash message explicitely since res.locals.msg is accessible directly from ejs files
  
})
 
  
app.listen(3000, ()=>{
    console.log("server is listenig to 3000");
});