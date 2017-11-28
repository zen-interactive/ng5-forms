import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { Form01Component } from './form01/form01.component';
import { Form02Component } from './form02/form02.component';


@NgModule({
  declarations: [AppComponent, Form01Component, Form02Component],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
