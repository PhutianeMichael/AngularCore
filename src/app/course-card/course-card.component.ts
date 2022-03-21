import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() {}

  ngOnInit() {}

  onCourseSelected() {
    this.courseEmitter.emit(this.course);
  }

  cardDescriptionStyles(){
    return {'text-decoration' : 'underline','font-weight':'bold'};
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    return this.course.category === 'BEGINNER' ? 'beginner' : '';
  }
}
