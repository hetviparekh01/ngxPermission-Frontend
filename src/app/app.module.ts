import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  FormsModule, NG_VALIDATORS, ReactiveFormsModule } from '@angular/forms';
import { EmailDirective } from './core/directives/email.directive';
import { HighlightDirective } from './core/directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmailDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
