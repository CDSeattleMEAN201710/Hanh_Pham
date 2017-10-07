const express = require("express");
const path = require ("path")
const session = require('express-session');
const app = express();
const bodyParser = require('body-parser');

const PORT = 8000

app.set('views', path.join(__dirname, "./client/views"));
app.set('view engine', 'ejs');

app.use(session({secret: "Shhhhhh", resave : true, saveUninitialized: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response){
    if (!request.session.results){
        request.session.results = 0; 
    }
    if(!request.session.number){
        request.session.number = Math.floor(Math.random() * 100 + 1)   
    }
    response.render("index", request.session)
})

app.post("/process", function(request, response){
    let guess = request.body.guess;
    if(guess == request.session.number){
        request.session.results = "Woohoo! Winner! Great guess!!!"
    }
    else if(guess < request.session.number){
        request.session.results = "Too LOW!"
    }
    else if(guess> request.session.number){
        request.session.results = "Too HIGH!"
    }
    response.redirect("/")
})

app.get("/reset", function(request, response) {
    request.session.destroy();
    response.redirect("/")
})

app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
  })
  

