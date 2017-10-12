const express = require("express")
const path = require("path")
const session = require('express-session');

const app = express()
const bodyParser = require("body-parser")

const PORT = 8000

app.use(session({secret: "shhhhhhhh", resave : true, saveUninitialized: true}));
app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static(path.join(__dirname, "./client")))
app.use(bodyParser.json()); 

app.set("views", path.join(__dirname, "./client/views"))
app.set("view engine", "ejs")

require("./server/config/mongoose")

require("./server/config/routes.js")(app)

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})