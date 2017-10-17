import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class WeatherApiService {


  constructor(private http: Http) { }

getCity(city){
		return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=dc5138c9b7385b3a82365aa96d9afb83`)
		.map( data => data.json() ).toPromise();
	}

}
	
