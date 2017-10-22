import { Component, OnInit, Input} from '@angular/core';
import { Note } from "./../note"
import { DbService } from './../../db.service';
import { Router } from "@angular/router"
import { Http } from '@angular/http';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() mynotes : Array<Note>
	

  constructor(private dbservice: DbService, private http: Http, private router : Router ) { }

  ngOnInit() {
    // console.log("display page")
    // this.dbservice.getAll()
    // .then(notes => this.mynotes = notes )
    // .catch(err => console.log("Get all notes errors", err))
  }

  // destroy(id){
  //   console.log("Delete button")
  //   this.dbservice.destroy(id)
  //     .then(()=> this.ngOnInit())
  //     .catch(err => console.log("error", err))
  // }
  

}
