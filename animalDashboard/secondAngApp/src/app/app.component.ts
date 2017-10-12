import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	num: number =1;

  title = 'Angular Lessons';

  constructor() {}

  ngOnInit(){

  }

  logNum(){
  	console.log('num is: ', this.num)
  }

  increamentNum(){
  	this.num = this.num + 1;
  	console.log('num is: ', this.num )
  }
}
