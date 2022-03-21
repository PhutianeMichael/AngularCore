import { CourseImageComponent } from './../course-image/course-image.component';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild, AfterViewInit, ContentChild, ElementRef } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit, AfterViewInit {
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent, {read:ElementRef})
  image:CourseImageComponent;

  constructor() {}

  ngAfterViewInit(): void {
    console.log(this.image);
  }

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
