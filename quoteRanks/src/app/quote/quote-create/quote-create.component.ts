import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Quote } from "./../quote"

@Component({
  selector: 'app-quote-create',
  templateUrl: './quote-create.component.html',
  styleUrls: ['./quote-create.component.css']
})
export class QuoteCreateComponent implements OnInit {
	newQuote : Quote
	@Output() addQuote = new EventEmitter()

  constructor() { }

  ngOnInit() {
  	this.newQuote = new Quote
  }

  createQuote(){
  	console.log("This is working")
  	this.addQuote.emit(this.newQuote)
  	this.newQuote = new Quote 

  }

}
