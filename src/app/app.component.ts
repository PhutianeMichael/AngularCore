import { CourseCardComponent } from './course-card/course-card.component';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from './db-data';
import { Course } from './models/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  courses:Course[] = COURSES;
  title:string = "Angular Core"
  course:Course;

  constructor() {
    // console.log(this.containerDiv1);

  }
  ngAfterViewInit() {
    console.log(this.cards)
    this.cards.changes.subscribe(
      cards => console.log(cards)
      );
  }

  // // query templete for element and its childer references
  @ViewChildren(CourseCardComponent, {read:ElementRef})
  cards:QueryList<CourseCardComponent>;

  // query templete for component references
  @ViewChild('container', {read:ElementRef})
  containerDiv: ElementRef

  @ViewChild('courseImage')
  courseImage: ElementRef

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
    console.log(this.card);
    console.log(this.card1);
    console.log(this.card2);
    console.log(this.containerDiv);
    console.log(this.containerDiv1);

  }

  onCourseEdited(){
    this.courses.push({
      id: 11,
    description: "Angular Core Deep Dive",
    iconUrl:
      "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png",
    longDescription:
      "A detailed walk-through of the most important part of Angular - the Core and Common modules",
    category: "INTERMEDIATE",
    lessonsCount: 10
    })
  }
}
