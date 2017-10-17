import { Pipe, PipeTransform } from '@angular/core';

import { Car } from "./car"

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cars: Array<Car>, search_text: string): Array<Car> {
  	
  	if(!search_text){ return cars } //if not search text then return cars 

  	search_text = search_text.toLowerCase() //set search string to lower case all the words to filter 

    return cars.filter(car => car.make.toLowerCase().includes(search_text) || car.model.toLowerCase().includes(search_text))
  }

}


















//////////////THIS BELOW IS ANOTHER WAY TO DO IT. BUT THE ABOVE EXAMPLE IS A BUILT IN FILTER ////////////
// import { Pipe, PipeTransform } from '@angular/core';

// import { Car } from "./car"

// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {

//   transform(cars: Array<Car>, search_text: string): Array<Car> {

//   	if(!search_text){ return cars } //if not search text then return cars 

//   	let output = []

//   	search_text = search_text.toLowerCase() //set search string to lower case all the words to filter 

//     for(let car of cars){
//     	if(car.make.toLowerCase().includes(search_text) || car.model.toLowerCase().includes(search_text)){
//     		output.push(car)
//     	}
//     }
//     return output
//   }

// }
