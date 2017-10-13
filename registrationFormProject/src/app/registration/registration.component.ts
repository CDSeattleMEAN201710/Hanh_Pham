import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
	user = new User();
	users = []
	message :string

  constructor() { }

  ngOnInit() {  	
  }

  onSubmit(){
  	console.log("This is working")
  	this.message = `Thank you for registering with us, ${this.user.firstName}. We just sent you a confirmation email at ${this.user.email}, and we will send all mail to ${this.user.address}. Have a wonderful day!`
  	console.log(this.message)
  	this.users.push(this.user)
  	this.user = new User();
  	return false
  }

}
