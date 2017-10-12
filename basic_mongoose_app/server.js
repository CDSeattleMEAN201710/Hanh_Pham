const express = require("express");
const path = require ("path")
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8000

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
   })
   mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
   var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'
 
mongoose.Promise = global.Promise;

app.set('views', path.join(__dirname, "./client/views"));
app.set('view engine', 'ejs');

app.use(session({secret: "shhhhhhhh", resave : true, saveUninitialized: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response){
    User.find({}, function(err, users){
        if(err){
            console.log("User not found")
        }else{
            console.log("User successfully found!")
        response.render("index", {users : users})
        }
    })    
  })

app.post('/users', function(request, response){
  
    console.log("POST DATA",request.body)
    var user = new User({name: request.body.name, age : request.body.age});
    user.save(function(err) {
        if(err){
            console.log("something went wrong");
        }else{
            console.log("successfully added a user!");
            response.redirect("/")
        }
    })

})

app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
  })
  