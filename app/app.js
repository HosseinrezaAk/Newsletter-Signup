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
    
    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields:{
                    FNAME: firstName,
                    LNAME: lastName
                }
            }    
        ]
    };
    var jsonData = JSON.stringify(data);
    const url = "";
    const options = {
        method: "POST",
        auth:"",
    }

    const request = https.request(url, options, function(response){
        if(response.statusCode === 200){
            res.sendFile(__dirname + "/html/success.html")
        }else{
            
        }
        response.on("data", function(data){
        
        });
    });
    request.write(jsonData);
    request.end();
});

app.get("/failure", function(){
    res.redirect("/");
});
// to listen to the server port or 3000 on local machine
app.listen( process.env.PORT || 3000, function(){
    console.log("Server started on http://localhost:3000");
});