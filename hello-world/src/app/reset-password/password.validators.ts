import {AbstractControl, ValidationErrors} from '@angular/forms';

export class PasswordValidators {

  static oldPasswordValid(control: AbstractControl): Promise<ValidationErrors | null> {
    console.log('value = ', control.value);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value !== '123') {
          resolve({invalidOldPassword: true});
        } else {
          resolve(null);
        }
      }, 500);
    });
  }

  static passwordsShouldMatch(control: AbstractControl): ValidationErrors | null {
    const newPassword = control.get('newPassword');
    const confirmPassword = control.get('confirmPassword');

    if (newPassword.value !== confirmPassword.value) {
      return {passwordsShouldMatch: true};
    } else {
      return null;
    }
  }

}
