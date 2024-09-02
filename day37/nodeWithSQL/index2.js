const express = require("express");
const app = express();
const uuid = require("uuid");
const path = require("path");
const mysql = require("mysql2");


//establishing connection with the database

const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        database: "delta_app",
        password: "12345678"
    }
);

//setting up ejs

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//route to render total number of users in the DB

app.get("/", (req, res) => {
    let q = `SELECT COUNT(*) FROM USER`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            //result returns the array of objects after the query is executed :   [ { 'COUNT(*)': 104 } ]
            console.log(result);
            console.log(result[0]["COUNT(*)"]);
        
             let count = result[0]["COUNT(*)"];
             res.render("home.ejs", { count });
        });
    } catch (err) {
        console.log("ERROR in DB");
        res.send("Some errot occured in DB");
    }
});


//route to show all the user information

app.get("/users", (req, res)=>{

    let q = `SELECT * FROM USER`;
    connection.query(q, (err, users)=>{
        try{
          // res.send(users);
          res.render("showusers.ejs", { users });  //usess is an array of object that stores the data row wise

        }catch(err){
            console.log(err);
            res.send("ERROR OCCURED IN DATABASE");
        }
    })
})







app.listen("8080", (req, res) => {
    console.log("server is listening to port 8080");
})