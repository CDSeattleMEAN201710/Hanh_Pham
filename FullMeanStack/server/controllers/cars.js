const mongoose = require("mongoose")
const Car = mongoose.model("Car")

module.exports = {
	index: (request, response) => {
		Car.find({})
			.then(cars => response.json(cars))
			.catch(err => {
				console.log("car find error", err)
				response.status(500).json(err)
			})
	},

	create: (request, response) => {
		let new_car = new Car(request.body)
		new_car.save()
			.then(() => response.json(true))
			.catch(err => {
				console.log("car create error", err)
				response.status(500).json(err)
			})


	}
}