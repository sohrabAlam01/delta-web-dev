const express = require("express");
const app = express();
//const uuid = require("uuid");
const { v4: uuidv4 } = require('uuid');
const path = require("path");
const mysql = require("mysql2");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));  //to overrride the request to patch or put or delete
app.use(express.urlencoded({ extended: true })); //to parse the forms data

//establishing connection with the database 

const connection = mysql.createConnection(
    {
        host: "localhost",   //we can use "127.0.0.1" instead of "localhost" because the ip 127.0.0.1 refers to the localhost as loop back ip address
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

app.get("/users", (req, res) => {

    let q = `SELECT * FROM USER`;
    connection.query(q, (err, users) => {
        try {
            // res.send(users);
            res.render("showusers.ejs", { users });  //users is an array of object that stores the data row wise

        } catch (err) {
            console.log(err);
            res.send("ERROR OCCURED IN DATABASE");
        }
    })
})


//edit route
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `select * from user where id ='${id}'`;

    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            // console.log(result);
            let user = result[0];
            res.render("edit.ejs", { user });
        })
    } catch (err) {
        console.log(err);
        res.send("some error in the database");
    }
});

//update route
app.patch("/user/:id", (req, res) => {
    let { password: newPassword, username: newUsername } = req.body;
    let { id } = req.params;
    let q = `select * from user where id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            if (newPassword != result[0].password) {
                res.send("Incorrest password!");
            }
            else {
                let q2 = `UPDATE user set username='${newUsername}' where id='${id}'`;
                connection.query(q2, (err, result) => {
                    if (err) throw err;
                    res.redirect("/users");
                })
            }
        })
    } catch (err) {
        res.send("some error in DB");
    }
});

//adding user route 

app.get("/user", (req, res)=>{
       res.render("adduser.ejs");
})

app.post("/user", (req, res)=>{
    let {username, password, email} = req.body;
    let id = uuidv4();
    let q3 = `INSERT into user(id, username, email, password) values( '${id}', '${username}', '${email})', '${password}')`;
    try{
       connection.query(q3, (err, result)=>{
        if(err) throw err;
        res.redirect("/users");
       })
    }catch(err){
        res.send(err);
    }
})

//delete route

app.get("/user/:id", (req, res)=>{
    let {id} = req.params;
    let q4 =`select * from user where id ='${id}'`;
    try{
        connection.query(q4, (err, result)=>{
            if(err) throw err;
            let user = result[0];
            //console.log(user);
            res.render("delete.ejs", {user});         
        })
    }catch(err){
      res.send("ERROR in DB");
    }
})


app.delete("/user/:id", (req, res)=>{
    let {id} = req.params;
    let q6 = `select * from user where id = '${id}'`;
    let {password:pass, username:userr} = req.body;
    try{
         connection.query(q6, (err, result)=>{
            let user = result[0];
            if(user.password != pass || user.username != userr){
                res.send("Incorrect username or password");
            }else{
                let q7 = `delete from user where id = '${id}'`;
                connection.query(q7, (err, result)=>{
                    if(err) throw err;
                    res.redirect("/users");
                })
            }
         })
    }catch(err){
        res.send("ERROR");
    }
   
})

app.listen("8080", (req, res) => {
    console.log("server is listening to port 8080");
});