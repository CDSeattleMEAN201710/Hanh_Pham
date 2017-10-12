
const animals = require("./../controllers/animals")


function test(request,response){
   console.log(" ******************************************************* ")
}

module.exports = app => {
	app.get("/", animals.index)
	app.get("/mongooses/new", animals.newForm)
    app.post("/mongooses/add", animals.add_animal)
    app.get("/mongooses/show/:id", animals.show_animal)
    app.get("/mongooses/edit/:id", animals.edit_animal)
    app.post("/mongooses/update", animals.update_animal)
    app.get("/mongooses/destroy/:id", animals.destroy_animal) 
    
}