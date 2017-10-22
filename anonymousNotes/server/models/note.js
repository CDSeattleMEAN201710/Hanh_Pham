const mongoose = require("mongoose")

const NoteSchema = mongoose.Schema({
	note: String, 
	createdAt: Date

}, {timestamps: true})


mongoose.model("Note", NoteSchema)