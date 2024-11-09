const express = require('express');
const app = express()
const wrapAsync = require('../utils/wrapAsync');
const router = express.Router();
const User = require("../models/user.js")
const flash = require("connect-flash")
app.use(flash())
const passport = require('passport')

router.get("/signup", (req, res)=>{

     res.render("users/signup.ejs");

});

router.post("/signup", wrapAsync(async(req, res)=>{

    try{
      
        let{username, email, password} = req.body;
        const newUser = new User({
            username,
             email
        });

        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.flash("success", "Welcome to happyHaven");
        res.redirect("/listings");

     }catch(e){
        req.flash("error", e.message)
        res.redirect("/signup");
    }
}));



//login routes
router.get("/login", (req, res)=>{
    res.render("users/login.ejs");
});

router.post("/login", passport.authenticate(
    'local', {failureRedirect: "/login", failureFlash: true}
), wrapAsync(async(req, res)=>{

      req.flash("success", "Welcome back to happyHaven")
      res.redirect("/listings");
 
}))

module.exports = router;