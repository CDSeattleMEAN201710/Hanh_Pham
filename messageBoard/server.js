const express = require("express");
const path = require ("path")
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8000

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/messageBoard');

var Schema = mongoose.Schema 

var MessageSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    message: {type: String, required: true, minlength: 4},  
    comments: [{type : Schema.Types.ObjectId, ref: 'Comment'}]
   }, { timestamps: true });

var CommentSchema = new mongoose.Schema({
    name : { type: String, required : true, minlength:1},
    comment : { type: String, required : true, minlength: 4},
    }, {timestamps: true});

mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema)

var Message = mongoose.model('Message') 
var Comment = mongoose.model('Comment')

mongoose.Promise = global.Promise;

app.set('views', path.join(__dirname, "./client/views"));
app.set('view engine', 'ejs');

app.use(session({secret: "shhhhhhhh", resave : true, saveUninitialized: true}));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(request, response){
    Message.find({}, function(err, messages){
        if(err){
            console.log("Message not found")
        }else{
            console.log("Message successfully found!")
        response.render("index", {messages : messages})
        }
    }).populate("comments")
}) 

app.post('/create', function(request, response){
    console.log("POST DATA",request.body)
    var message = new Message({name: request.body.name, message: request.body.message});
    message.save(function(err) {
        if(err){
            console.log("something went wrong", err)
            console.log(message.errors)
            response.render("index", {errors: message.errors, messages: []});
            
        }else{
            console.log("successfully added an message!");
            response.redirect("/")
        }
    })
})

app.post('/comment_post/:id', function (request, response){
        Message.findOne({_id: request.params.id}, function(err,message){
            var comment = new Comment(request.body)
            comment._message = message._id
            message.comments.push(comment);
            comment.save(function(err){
                message.save(function(err){
                    if(err){
                      console.log('Error');
                      response.render("index", {errors: message.errors});                   
                    }else { 
                      console.log("comment added");
                      response.redirect('/'); }
                })
            })
        })
})

app.get('/destroy/:id', function(request, response){
    var message_id = request.params.id
    Message.remove({_id: message_id}, function(err, message){
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
  