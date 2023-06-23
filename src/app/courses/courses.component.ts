import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDashboardService } from '../user-dashboard.service';
import { Course } from '../models/course';

// import { Course } from '../models/course.model';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  isLoggedIn = false;
  showPopup = false;
  popupMessage = '';

  constructor(private router: Router, private courseService: UserDashboardService) {}

  ngOnInit(): void {
    this.isLoggedIn = false; // Assuming the user is not logged in initially

    // Fetch courses from the service
    this.courseService.getAllCourses().subscribe(
      (data) => {
        this.courses = data;
      },
      (error) => {
        console.log('Error fetching courses:', error);
      }
    );
  }

  navigateTo(course: Course) {
    if (this.isLoggedIn) {
      // If user is logged in, navigate to the course details page
      this.router.navigate(['/courses', course.courseName]);
    } else {
      // If user is not logged in, show a popup message and navigate to the login page
      this.popupMessage = 'Please log in to continue.';
      this.showPopup = true;
      this.router.navigate(['/login']);
    }
  }

  searchQuery: string = '';

  get filteredCourses() {
    if (this.searchQuery.trim() === '') {
      return this.courses;
    } else {
      return this.courses.filter((course) =>
        course.courseName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
}
