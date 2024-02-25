import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AddressComponentComponent } from './customcontrols/address-component/address-component.component';


@NgModule({
  declarations: [
    AppComponent,
    AddressComponentComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
