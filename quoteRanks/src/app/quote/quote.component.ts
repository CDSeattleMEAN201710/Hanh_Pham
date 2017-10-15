import { Component, OnInit } from '@angular/core';

import { Quote } from "./quote"



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
	quotes : Array<Quote>

  constructor() { }

  ngOnInit() {
  	this.quotes=[
    {
      quote: "Never Stop Exploring",
      author: "Hanh"
    },
    {
      quote: "Always be curious",
      author: "Ha"
    },
    {
      quote: "I love to eat",
      author: "Kathy"
    }
    ]
  }
  createQuote(newQuote : Quote){
  	console.log("Some event happened")
  	this.quotes.push(newQuote)
  }

}
