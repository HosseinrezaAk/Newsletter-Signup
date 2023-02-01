const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
/**
 * When you imported local file to the html, express won't figure it out .
 * so you have to make a directory like and use it like below
 */
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function( req , res){
    res.sendFile(__dirname + "/html/signUp.html");
});

app.post("/", function( req , res ){
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
    console.log( firstName + lastName + email);
});



app.listen(3000, function(){
    console.log("Server started on http://localhost:3000");
});