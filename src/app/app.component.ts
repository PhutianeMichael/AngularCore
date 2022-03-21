import { CourseCardComponent } from './course-card/course-card.component';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { COURSES } from './db-data';
import { HighlightedDirective } from './directives/highlighted.directive';
import { Course } from './models/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  courses: Course[] = COURSES;
  title: string = 'Angular Core';
  course: Course;

  @ViewChild(CourseCardComponent, {read: HighlightedDirective})
  highlightedDirective: HighlightedDirective;

  constructor() {}

  ngAfterViewInit(): void {
    console.log(this.highlightedDirective);
  }

  onCourseSelected(course: Course) {
    this.course = course;
  }

  onToggle(event: any) {
    console.log(event);
  }
}
