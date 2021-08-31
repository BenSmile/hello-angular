import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-nouveau-cours-form',
  templateUrl: './nouveau-cours-form.component.html',
  styleUrls: ['./nouveau-cours-form.component.css']
})
export class NouveauCoursFormComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  // _topics = new FormArray([]);

  form;
  // form = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   contact: new FormGroup({
  //     email: new FormControl(''),
  //     phone: new FormControl('')
  //   }),
  //   topics: new FormArray([])
  // });

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [''],
        phone: ['']
      }),
      topics: fb.array([])
    });
  }

  // tslint:disable-next-line:typedef
  get topics() {
    return this.form.get('topics') as FormArray;
  }

  ngOnInit(): void {
  }

  public addTopic(topic: HTMLInputElement): void {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
    // (this.form.get('topics') as FormArray).controls.forEach(t => console.log(t.value));
  }

  public removeTopic(topic: FormControl): void {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}
