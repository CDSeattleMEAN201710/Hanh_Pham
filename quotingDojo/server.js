const express = require("express");
const path = require ("path")
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8000

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotingDojo');

var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    quote: {type: String, required: true, minlength: 10},
    date_added: { "type": Date, "default": Date.now }
   })
   mongoose.model('Quote', QuoteSchema); 
   var Quote = mongoose.model('Quote') 
 
mongoose.Promise = global.Promise;

app.set('views', path.join(__dirname, "./client/views"));
app.set('view engine', 'ejs');

app.use(session({secret: "shhhhhhhh", resave : true, saveUninitialized: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response){

    response.render("index")
    
  })

app.post('/add', function(request, response){
  
    console.log("POST DATA",request.body)
    var quote = new Quote({name: request.body.name, quote : request.body.quote});
    quote.save(function(err) {
        if(err){
            console.log("something went wrong");
        }else{
            console.log("successfully added a quote!");
            response.redirect("/quotes")
        }
    })

})

app.get("/quotes", function(request, response){
    Quote.find({}, function(err, quotes){
        if(err){
            console.log("Quote not found")
        }else{
            console.log("Quote successfully found!")
        response.render("quotes", {quotes : quotes})
        }
    }).sort('--date_added')  
}) 

app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
  })
  