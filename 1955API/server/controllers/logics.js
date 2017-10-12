const mongoose = require("mongoose")
const Person = mongoose.model("Person")

module.exports = {

	index: function(request, response){
		Person.find({}, function(err, persons){
			if(err){
				console.log("Name not found")
			}else{
				console.log("Name successfully found!")
				response.json(persons)
			}	
		})
	},

	new: function(request, response){
		var newPerson = new Person({name: request.params.name})
		newPerson.save(function(err){
			if(err){
				console.log("something went wrong");
			}else{
				console.log("sucessfully added a name");
				response.redirect("/")
			}
		})
	},

	remove: function(request, response){
		Person.remove({name : request.params.name}, function(err, person){
			if(err){
				console.log("Error")
			}else{
				console.log("Sucessful!")
			response.redirect("/")
			}
		})
	},
	
	show: function(request, response){
		console.log(request.params.name)
		Person.findOne({name : request.params.name}, function(err, person){
			if(err){
				console.log("Error")
			}else{
				console.log("successful")
				response.json(person)
			}
		})
	}

}