const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function( req , res){
    res.sendFile(__dirname + "/html/signUp.html");
});




app.listen(3000, function(){
    console.log("Server started on http://localhost:3000");
});