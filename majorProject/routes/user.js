const express = require('express');
const app = express()
const wrapAsync = require('../utils/wrapAsync');
const router = express.Router();
const User = require("../models/user.js")
const flash = require("connect-flash")
app.use(flash())
const passport = require('passport');
const { saveRedirectUrl } = require('../middleware.js');

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
        req.login(registeredUser, (err)=>{

            if(err) return next(err);
            req.flash("success", "Welcome to happyHaven");
            res.redirect("/listings");
        });

     }catch(e){
        req.flash("error", e.message)
        res.redirect("/signup");
    }
}));



//login routes
router.get("/login", (req, res)=>{
    res.render("users/login.ejs");
});


router.post("/login", saveRedirectUrl, passport.authenticate(
    'local', {failureRedirect: "/login", failureFlash: true}
), wrapAsync(async(req, res)=>{

      req.flash("success", "Welcome back to happyHaven")
      let redirectUrl = res.locals.redirectUrl || "/listings";  //when isLoggedIn middleware is not triggered then res.locals.redirectUrl will be empty
      res.redirect(redirectUrl);

}));

//logout route

router.get("/logout", (req, res, next)=>{
    
     req.logout( (err)=>{
        if(err) return next(err);
        req.flash("success", "Logged out! Thanks for visiting");
        res.redirect("/listings")
     });

});

module.exports = router;