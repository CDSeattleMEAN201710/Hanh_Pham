import { Component, OnInit, Output, EventEmitter } from '@angular/core'; //child to parent - to add an output, we need to include an eventemitter

import { Car } from "./../car" 

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {
  new_car : Car 
  @Output() add_a_car = new EventEmitter() //class has add_a_car with an event listen to the parent. then the parent will listen to the event and run a function.

  constructor() { }

  ngOnInit() {
  	this.new_car = new Car
  }

   create_car() {
  	//this.cars.push(this.new_car)
  	console.log(this.new_car) 
  	this.add_a_car.emit(this.new_car) //pass any parameter and it will send the data back to the parent when the event trigger. 
  	this.new_car = new Car
  }

}
