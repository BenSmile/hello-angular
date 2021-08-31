import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  courses;
  @Input('likesCount')
  public likesCount: number;

  @Input('isActive')
  public isActive: boolean;


  public trackCourses(index, course): any {
    return course ? course.id : undefined;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  public onClick(): void {
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
  }

  onAddCourse() {
    this.courses.push({id: this.courses.length + 1, name: 'React'});
  }

  onLoadCourse() {
    this.courses = [
      {id: 1, name: 'Java'},
      {id: 2, name: 'Angular'},
      {id: 3, name: 'Spring boot in depth'}
    ];
  }

  onRemove(course: { id: number, name: string }) {
    console.log(course);
    const i = this.courses.indexOf(course);
    this.courses.splice(i, 1);
  }
}
