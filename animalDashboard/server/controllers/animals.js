const mongoose = require("mongoose")
const Animal = mongoose.model("Animal")

module.exports = {
    index: function(request, response){
        Animal.find({}, function(err, animals){
            if(err){
                console.log("Animal not found")
            }else{
                console.log("Animal successfully found!")
            response.render("index", {animals : animals})
            }
        }).sort('--date_added')  
    },
    
    newForm: function(request, response){
        response.render("newForm")
    },
    
    add_animal: function(request, response){
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
    },
    
    show_animal: function(request, response){
        var animal_id = request.params.id
        Animal.findOne({_id: animal_id}, function(err, animal){
            if(err){
                console.log("Error")
            }else{
                console.log("Successsful!")
            response.render('show', {animal : animal})
            }
        })
    },
    
    edit_animal: function(request, response){
        var animal_id = request.params.id
        Animal.findOne({_id: animal_id}, function(err, animal){
            if(err){
                console.log("Error")
            }else{
                console.log("Successsful!")
            response.render('edit', {animal : animal})
            }
        })
    },
    
    update_animal: function(request, response){
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
    },
    
    destroy_animal: function(request, response){
        var animal_id = request.params.id
        Animal.remove({_id: animal_id}, function(err, animal){
            if(err){
                console.log("Error")
            }else{
                console.log("Successsful!")
            response.redirect("/")
            }
        })
    }	
}





