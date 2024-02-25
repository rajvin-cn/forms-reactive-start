import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-address-component',
  templateUrl: './address-component.component.html',
  styleUrls: ['./address-component.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressComponentComponent),
      multi: true,
    },
  ],
})
export class AddressComponentComponent implements OnInit, ControlValueAccessor {

  constructor() { }
  writeValue(obj: any): void {
    this.city = obj;
  }

  onChange: (value: any) => {};


  registerOnChange(fn: any): void {
    console.log('registerOnChange called');
   this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    console.log('registerOnTouched called');
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log('setDisabledState called');
  }
 city:string ='test';
  ngOnInit(): void {
  }

  onCityChange(name:string):void {
    console.log('city changes calleds with' + name);
   this.onChange(name);
  }
}
