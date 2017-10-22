import { Component, OnInit } from '@angular/core';
import { Note } from "./../note"
import { DbService } from './../../db.service';
import { Router } from "@angular/router"
import { Http } from '@angular/http';



@Component({
  selector: 'app-addnotes',
  templateUrl: './addnotes.component.html',
  styleUrls: ['./addnotes.component.css']
})
export class AddnotesComponent implements OnInit {
	new_note: Note 
   notes : Array<Note>
 

  constructor(private dbservice: DbService, private http: Http, private router : Router ) { }

  ngOnInit() {
  	this.new_note = new Note 

    console.log("display page")
    this.dbservice.getAll()
    .then(notes => this.notes = notes )
    .catch(err => console.log("Get all notes errors", err))

  }

  create(){
    console.log(this.new_note)
  	this.dbservice.create( this.new_note )
  	.then(() => {
      this.new_note = new Note
      this.ngOnInit()
      console.log(this.new_note)
      })
		.catch(err => console.log("user login error", err))
  }

  destroy(id){
    console.log("Delete button")
    this.dbservice.destroy(id)
      .then(()=> this.ngOnInit())
      .catch(err => console.log("error", err))
  }

}
