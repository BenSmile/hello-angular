import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsernameValidators} from './username.validators';

@Component({
  selector: 'app-singup-form',
  templateUrl: './singup-form.component.html',
  styleUrls: ['./singup-form.component.css']
})
export class SingupFormComponent implements OnInit {

  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('', [Validators.required,
          Validators.minLength(4),
          UsernameValidators.cannotContainSpace],
        UsernameValidators.shouldBeUnique),
      password: new FormControl('', [Validators.required])
    })
  });

  get username() {
    return this.form.get('account.username');
  }

  get password() {
    return this.form.get('account.password');
  }

  constructor() {
  }

  ngOnInit(): void {

  }

  public login(): void {

    if (this.form.value.username !== 'admin') {
      this.form.setErrors({invalidLogin: true});
    } else {
      return null;
    }

    console.log(this.form.value);
  }
}
