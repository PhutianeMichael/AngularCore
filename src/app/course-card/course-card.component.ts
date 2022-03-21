import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course:Course;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

  onCourseViewed(){
    this.courseEmitter.emit(this.course);
  }

  isImageVisible(){
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    return this.course.category === "BEGINNER" ? "beginner" : "";
  }

}
