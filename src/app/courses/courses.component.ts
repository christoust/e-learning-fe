import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDashboardService } from '../user-dashboard.service';
import { Course } from '../models/course';
import {RatingService} from '../rating.service'

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

  constructor(private router: Router, private courseService: UserDashboardService, private ratingService:RatingService) {}

  ngOnInit(): void {
    this.isLoggedIn = false; // Assuming the user is not logged in initially

    // Fetch courses from the service
    this.courseService.getAllCourses().subscribe(
      (data) => {
        this.courses = data;
        console.log(this.courses);
        this.calculateAverageRatings();
      },
      (error) => {
        console.log('Error fetching courses:', error);
      }
    );
  }
  getStarsArray(averageRating: number | undefined | null): number[] {
    if (averageRating === undefined || averageRating === null) {
      return [];
    }
    console.log( Array(Math.floor(averageRating)).fill(1))
    return Array(Math.floor(averageRating)).fill(1);
  }
  

  navigateTo(course: Course) {
   
      // If user is logged in, navigate to the course details page
      this.router.navigate(['/courses', course.courseId]);    } 

    
  
  

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
  calculateAverageRatings() {
    for (const course of this.courses) {

      if (course.courseId !== undefined) {
        console.log(course.courseId);
        this.ratingService.getAverageRatingByCourseId(course.courseId).subscribe(
          (averageRating) => {
            course.averageRating = averageRating;
            console.log(course.averageRating);

          },
          (error) => {
            console.log('Error fetching average rating:', error);
            course.averageRating = 0; // Set average rating to 0 if there's an error
          }
        );
      }
    }
  }
  getFilledStarsArray(rating: number): number[] {
    return Array(Math.floor(rating)).fill(1);
  }
  
  
  getEmptyStarsArray(count: number): number[] {
    return Array.from({ length: count } as number[], () => 0);
  }
  
}
