import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormFieldComponent } from './form-field/form-field.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OutputComponentComponent } from './form-field/output/output-component.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FormFieldComponent,
    OutputComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
