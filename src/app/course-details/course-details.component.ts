import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: any; // Replace 'any' with the actual type for your course

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const courseId = this.route.snapshot.params['id'];
    // Implement code to fetch the course details from the backend using the courseId
    // Assign the fetched course to this.course
  }

  enroll(course: any): void {
    // Implement code to enroll the user in the selected course
  }
}
