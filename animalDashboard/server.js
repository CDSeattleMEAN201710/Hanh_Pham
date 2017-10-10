const express = require("express");
const path = require ("path")
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8000

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/animalDashboard');

var AnimalSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    color: {type: String, required: true, minlength: 2},
    types: {type: String, required: true, minlength: 2},
    description: {type: String, required: true, minlength: 2},  
    date_added: { "type": Date, "default": Date.now }
   })
   mongoose.model('Animal', AnimalSchema); 
   var Animal = mongoose.model('Animal') 
 
mongoose.Promise = global.Promise;

app.set('views', path.join(__dirname, "./client/views"));
app.set('view engine', 'ejs');

app.use(session({secret: "shhhhhhhh", resave : true, saveUninitialized: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response){
    Animal.find({}, function(err, animals){
        if(err){
            console.log("Animal not found")
        }else{
            console.log("Animal successfully found!")
        response.render("index", {animals : animals})
        }
    }).sort('--date_added')  
}) 

app.get('/mongooses/new', function(request, response){
    response.render("newForm")
})

app.post('/mongooses/add', function(request, response){
    console.log("POST DATA",request.body)
    var animal = new Animal({name: request.body.name, color: request.body.color , types: request.body.types, description: request.body.description});
    animal.save(function(err) {
        if(err){
            console.log("something went wrong");
        }else{
            console.log("successfully added an amimal!");
            response.redirect("/")
        }
    })
})

app.get('/mongooses/show/:id', function(request, response){
    var animal_id = request.params.id
    Animal.findOne({_id: animal_id}, function(err, animal){
        if(err){
            console.log("Error")
        }else{
            console.log("Successsful!")
        response.render('show', {animal : animal})
        }
    })
})

app.get('/mongooses/edit/:id', function(request, response){
    var animal_id = request.params.id
    Animal.findOne({_id: animal_id}, function(err, animal){
        if(err){
            console.log("Error")
        }else{
            console.log("Successsful!")
        response.render('edit', {animal : animal})
        }
    })
})

app.post('/mongooses/update', function(request, response){
    console.log("POST DATA",request.body)
    var animal = new Animal({name: request.body.name, color: request.body.color , types: request.body.types, description: request.body.description});
    animal.save(function(err) {
        if(err){
            console.log("something went wrong");
        }else{
            console.log("successfully added an amimal!");
            response.redirect("/")
        }
    })
})

app.get('/mongooses/destroy/:id', function(request, response){
    var animal_id = request.params.id
    Animal.remove({_id: animal_id}, function(err, animal){
        if(err){
            console.log("Error")
        }else{
            console.log("Successsful!")
        response.redirect("/")
        }
    })
})

app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
  })
  