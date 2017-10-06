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

let rand1 = 0
let rand2 = 0
let round1 = 0
let round2 = 0
let results = 0



io.sockets.on("connection", socket => {
    console.log("New connection", socket.id)
    console.log(socket.id)

socket.on("join", function(socket){
    socket.join(room);
    console.log("User joined" + room)
})

player1 = io.emit("counter", rand1)//what we will see when we load the page. 
player2 = io.emit("counter2", rand2)

	socket.on("some sort of click counter", () => {

        rand1 = Math.floor(Math.random()*3) + 1

        if(rand1 == 1){
           rand1 = "rock"
        }
        else if(rand1 == 2){
            rand1 = "paper"
        }
        else if(rand1 == 3){
           rand1 ="scissors"
        }
        round1 ++
        console.log("This is round:" , round1)
        console.log("player1")
        io.emit("counter", rand1)
    
    })
    
    socket.on("some sort of click counter2", () => {
        
        rand2 = Math.floor(Math.random()*3) + 1

        if(rand2 == 1){
            rand2 = "rock"
        }
        else if(rand2 == 2){
            rand2 = "paper"
        }
        else if(rand2 == 3){
            rand2 ="scissors"
        }

        round2 ++
        console.log("This is round:" , round2)

        console.log("player2")
        io.emit("counter2", rand2)
    })

    socket.on("some sort of click counter3", () => {
       
        if (rand1 === rand2){
            results = "It's a tie, play again!!!"
        }
        else if(rand1 > rand2){
            results = "Player 1 Wins!"
        }
        else{
            results = "Player 1 LOSER!"
        }

       
        io.emit("counter3", results)
    })


})
