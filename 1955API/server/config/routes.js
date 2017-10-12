const persons = require("./../controllers/logics")

function test(request,response){
   console.log(" ***************************")
}

module.exports = app => {
	app.get("/", persons.index)
	app.get("/new/:name", persons.new)
	app.get("/remove/:name", persons.remove)
	app.get("/:name", persons.show)


}