import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Phone'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  log(value) {
    console.log(value);
  }

  submit(form: NgForm) {
    console.log(form);
  }
}
