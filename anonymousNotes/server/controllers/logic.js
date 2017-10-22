const mongoose = require("mongoose")
const Note = mongoose.model("Note")

module.exports = {

	create: (req, res) => {
		let note = new Note (req.body)
		note.save()
			.then(()=>{
				console.log("successfully added a note")
				res.json(true)
			})
			.catch(err => {
				console.log("Adding Note Error", err)
				res.status(500).json(err)
			})
	},

	allnotes: (req, res) => {
		Note.find({})
			.then(notes => res.json(notes))
			.catch(err => {
				console.log("note.find error", err)
				res.status(500).json(err)
			})
	},

	destroy: (req, res) => {
		var note_id = req.body.id 
		Note.remove({_id: note_id}, function(err, note) {
			if(err){
				console.log("error")
			}else{
				console.log("Note successfully deleted")
				res.json(true)
			}
		})
	}
}