const express = require("express")
const path = require("path")

const app = express()

const PORT = 8000

app.use(express.static(path.join(__dirname, "./client/views")))
app.use(express.static(path.join(__dirname, "./node_modules")))

const server = app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})

const io = require("socket.io").listen(server)

let click = 0

io.sockets.on("connection", socket => {
    console.log("New connection", socket.id)
    console.log(socket.id)

io.emit("click_count", click)
 
socket.on("clickers", () => {
click++ 
io.emit("click_count", click)

})

socket.on("refresh", () => {
click = 0
io.emit("click_count", click)

})

})
