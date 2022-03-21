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
  course:Course = this.courses[0];


  startDate = new Date(2000,0,1);
  price = 45.98;
  rate = 0.15;



  onCourseSelected(course:Course){
    this.course = course;
  }
}
