import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
	rand : number
	colors : Array<string>

  	title = 'Retro Barcode Generator';
  
  	constructor() { }

  	ngOnInit() {

	this.colors = ['blue', 'pink', 'red', 'green', 'purple', 'yellow', 'skyblue', 'aqua', 'gray', 'turquoise']
	for(let idx = 0; idx < 10 ; idx++){
	  let rand = Math.floor(Math.random()*10)
	  let temp = this.colors[idx]
	  this.colors[idx]= this.colors[rand]
	  this.colors[rand] = temp 
		}
	}
}