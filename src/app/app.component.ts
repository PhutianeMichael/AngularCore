import { CourseCardComponent } from './course-card/course-card.component';
import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
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

  // query templete for element and its childer references
  @ViewChildren('container', {read:ElementRef})
  containerDiv: ElementRef

  // query templete for component references
  @ViewChild('container')
  containerDiv1: ElementRef

  // query templete for a component reference
  @ViewChild(CourseCardComponent)
  card:CourseCardComponent;

  // query templete for a component reference using a templateReference
  @ViewChild('cardRef1')
  card1: CourseCardComponent

  @ViewChild('cardRef2')
  card2: CourseCardComponent

  onCourseSelected(course:Course){
    this.course = course;
    // console.log(this.card);
    // console.log(this.card1);
    // console.log(this.card2);
    // console.log(this.containerDiv);
    console.log(this.containerDiv1);

  }
}
