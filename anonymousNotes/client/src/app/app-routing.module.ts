import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddnotesComponent } from './notes/addnotes/addnotes.component';
import { DisplayComponent } from './notes/display/display.component';
import { NotesComponent } from './notes/notes.component';
import { AppComponent } from './app.component';


const routes: Routes = [

{path: ' ', component: AddnotesComponent},

// {path: 'new_note', component: AddnotesComponent},

// {path: '/display', component: DisplayComponent} ,

// {path: '**', redirectTo: "/" },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
