import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CustomValidator } from './CustomValidators/CustomValidator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
// 
  genders = ['male', 'female'];

  superUsers = ['admin', 'test','John'];

  signupForm:FormGroup;
  ngOnInit(): void {
    this.signupForm = new FormGroup({
     'username' : new FormControl(null, [Validators.required,CustomValidator.forbiddenNamesbyList(this.superUsers)]),
     'email' : new FormControl(null,[Validators.required,Validators.email]),
     'gender': new FormControl('male'),
     'hobbies': new FormArray([])

    });
  }
 
  //this.validUsername.bind(this)
  onSubmit(): void {{
    console.log(this.signupForm);
  }}

  onAddHobby(): void {

    console.log("adding Hobbies ");
    const control = new FormControl(null, Validators.required);
    
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

validUsername (control: AbstractControl<any,any>):ValidationErrors | null {

  if ( this.superUsers.includes(control.value))
  {
    return {
      'validUsername': true
    }
  }
  
  
  return null;

}
}