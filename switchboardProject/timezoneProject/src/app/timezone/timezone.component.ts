import { Component, OnInit } from '@angular/core';

import {DatePipe } from '@angular/common';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit {
	title:string
	date: any 

  constructor() { }

  ngOnInit() {
  	this.title = "US Timezone Display";
 
  	}

  	pacificTime(){
  		this.date = new Date()
  		console.log("DATE: ",  this.date)
  }

 	mountainTime(){
  	this.date = new Date().toLocaleString('en-US', {timeZone: "America/New_York"})
  	console.log("DATE: ", this.date)
  }

  centralTime(){
 this.date = new Date().toLocaleString('en-US', {timeZone: "America/New_York"})
  	console.log("DATE: ", this.date)
  }

  	easternTime(){
  	this.date = new Date().toLocaleString('en-US', {timeZone: "America/New_York"})
  	console.log("DATE: ", this.date)
  }

  	clearTime(){
  		this.date = new Date()

  		console.log("This is to clear")
  	}
  }


