import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteCreateComponent } from './quote/quote-create/quote-create.component';
import { QuoteDetailsComponent } from './quote/quote-details/quote-details.component';
import { FilterPipe } from './quote/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteCreateComponent,
    QuoteDetailsComponent,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
