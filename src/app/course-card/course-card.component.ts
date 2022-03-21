import { CourseImageComponent } from './../course-image/course-image.component';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild, AfterViewInit, ContentChild, ElementRef, ContentChildren, AfterContentInit, QueryList } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  @ContentChildren(CourseImageComponent, {read:ElementRef})
  images:QueryList<ElementRef>;

  constructor() {}

  ngAfterViewInit(): void {
  }

  ngAfterContentInit(): void {
      console.log(this.images)
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
