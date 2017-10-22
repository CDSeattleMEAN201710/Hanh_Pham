const path= require("path")
const notes = require('./../controllers/logic.js')

module.exports = app => {

	app.post("/create", notes.create)
	app.get("/allnotes", notes.allnotes)
	app.post("/destroy", notes.destroy)



	app.get("*", (req, res) => res.sendFile(path.resolve("./client/dist/index.html")))

}