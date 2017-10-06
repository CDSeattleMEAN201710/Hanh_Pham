const express = require("express")
const path = require("path")

const app = express()

const PORT = 8000

app.use(express.static(path.join(__dirname, "./client")))
app.use(express.static(path.join(__dirname, "./node_modules")))

const server = app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})

const io = require("socket.io").listen(server)

let rand = 0

io.sockets.on("connection", socket => {
	console.log("New connection", socket.id)

player1 = io.emit("counter", rand)//what we will see when we load the page. 
player2 = io.emit("counter", rand)

	socket.on("some sort of click counter", () => {

        var rand = Math.floor(Math.random()*3) + 1

        if(rand == 1){
           rand = "rock"
        }
        else if(rand == 2){
            rand = "paper"
        }
        else if(rand == 3){
           rand ="scissors"
        }

        console.log("changing")
		io.emit("counter", rand)
	})

})
