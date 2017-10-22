import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import "rxjs/add/operator/map"
import "rxjs"

import { Note } from "./notes/note"

@Injectable()
export class DbService {

  constructor(private http: Http) { }

  create(note: Note ){
  	return this.http.post("/create", note).map(data => data.json()).toPromise()
  }

  getAll(){
  	return this.http.get("/allnotes").map(data => data.json()).toPromise()
  }

 	destroy(id){
 		console.log("service destroy")
		return this.http.post("/destroy", {id:id}).map(data => data.json()).toPromise()
	}
}
