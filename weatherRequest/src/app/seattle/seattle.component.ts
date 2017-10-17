import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from './../weather-api.service';


@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
	weather
	humidity : number
	avgtemp: number
	hightemp: number
	lowtemp: number
	status: string 



  constructor(private weatherService : WeatherApiService) { }

  ngOnInit() {
  	this.weather= this.weatherService.getCity('seattle')
  	.then( weather =>{
  		this.humidity = weather.main.humidity;
  		this.avgtemp = Math.floor(weather.main.temp * (9/5) - 459.67);
  		this.hightemp = weather.main.temp_max;
      	this.hightemp = Math.floor(this.hightemp * (9/5) - 459.67);
      	this.lowtemp = weather.main.temp_min;
      	this.lowtemp = Math.floor(this.lowtemp * (9/5) - 459.67);
      	this.status = weather.weather[0].description;
		})
	.catch(err => console.log("Weather error", err))
	console.log(this.weather)

  }

}
