import { Component, OnInit } from '@angular/core';

import { Emails } from "./emails"

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
	emails: Array<Emails>

	title = 'Dojo Mail';

  	constructor() { }

  	ngOnInit() {
  		this.emails = [
  		{
        email : 'bill@gates.com', 
        importance : true, 
        subject : 'New Windows', 
        content : 'Windows XI will launch in year 2010'
      },
  		{
        email : 'ada@lovelace.com', 
        importance : true, 
        subject : 'Programming', 
        content : 'Enchantress of Numbers'
      },
  		{
        email : 'john@carmac.com', 
        importance : false, 
        subject : 'Updated Algo', 
        content : 'New algorithm for shadow volumes.'
      },
  		{
        email : 'gabe@newel.com', 
        importance : false, 
        subject : 'HL3', 
        content : 'Just kidding...'
      }
  		]
  		
  	}

}

