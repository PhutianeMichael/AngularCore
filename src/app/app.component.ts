import { Component } from '@angular/core';
import { COURSES } from './db-data';
import { Course } from './models/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses:Course[] = COURSES;
  title:string = "Angular Core"
  course:Course;

  constructor() {

  }




  onCourseSelected(course:Course){
    this.course = course;
  }

}
