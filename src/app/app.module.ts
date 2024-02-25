import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AddressSubFormComponentComponent } from './Nestedcustomcontrols/address-sub-form-component/address-sub-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressSubFormComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
