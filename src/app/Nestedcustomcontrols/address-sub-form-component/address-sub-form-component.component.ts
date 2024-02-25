import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-sub-form-component',
  templateUrl: './address-sub-form-component.component.html',
  styleUrls: ['./address-sub-form-component.component.css'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressSubFormComponentComponent),
      multi: true
    }
  ]
})
export class AddressSubFormComponentComponent implements OnInit ,
 ControlValueAccessor{

  @Input()
  legend:string ='test';
  
  constructor(private fb: FormBuilder) {

}

onTouched = () => {};

form = this.fb.group(
  {
    addressLine1: [null, [Validators.required]],
    addressLine2: [null, [Validators.required]],
    zipCode: [null, [Validators.required]],
    city: [null, [Validators.required]],

  }
);

  writeValue(obj: any): void {
  if ( obj != null)
   this.form.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
   this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    
  }

 ngOnInit(): void {
  }




  
}
