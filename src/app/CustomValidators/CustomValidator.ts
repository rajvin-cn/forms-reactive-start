import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidator {

  static forbiddenNames(control: AbstractControl<any, any>): ValidationErrors | null {
    return validUsername(control);
  }

  static forbiddenNamesbyList(names: string[]): ValidatorFn {
    return validUsernameByList(names);
  }


}

// Validator without input value/Constraint
export function validUsername(control: AbstractControl<any, any>): ValidationErrors | null {

  const superUsers = ['admin', 'test'];
  if (superUsers.includes(control.value)) {
    return {
      'validUsername': true
    }
  }


  return null;
};

// Validator with input value/Constraint

export function validUsernameByList(names): ValidatorFn {

  return (control: AbstractControl<any>): ValidationErrors | null => {

    if (names.includes(control.value)) {
      return {
        'validUsername': true
      }
    }


    return null;
  };
}


