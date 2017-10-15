import { Pipe, PipeTransform } from '@angular/core';

import { Quote } from "./quote"

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(quotes: Array<Quote>, search_text: string): Array<Quote> {
    if(!search_text){return quotes}
    search_text = search_text.toLowerCase()
	return quotes.filter(quote => quote.quote.toLowerCase().includes(search_text) || quote.author.toLowerCase().includes(search_text))
  }

}
