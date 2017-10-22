import { Pipe, PipeTransform } from '@angular/core';
import { Note } from "./notes/note"

@Pipe({
  name: 'orderByPipe'
})
export class FilterPipe implements PipeTransform {

  transform(array: Array<Note>, args: string): Array<Note> {
    if(!array || array === undefined || array.length === 0) return null;

    array.sort((a:any, b: any) => {
    	if (a.date < b.date){
    		return -1;
    	}else if (a.date > b.date){
    		return 1
    	}else{
    		return 0;
    	}	
    })
    return array
  }

}
