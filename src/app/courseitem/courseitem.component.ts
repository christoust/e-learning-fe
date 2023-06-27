import { Component, OnInit } from '@angular/core';

import { Coursetopic, Topic } from '../models/coursetopic';

import { ActivatedRoute } from '@angular/router';

import { UserDashboardService } from '../user-dashboard.service';

import { Course } from '../models/course';

@Component({
  selector: 'app-courseitem',

  templateUrl: './courseitem.component.html',

  styleUrls: ['./courseitem.component.css'],
})
export class CourseitemComponent implements OnInit {
  courseId: number | undefined;

  course: Course | undefined;

  topics: Topic[] | undefined;

  constructor(
    private route: ActivatedRoute,

    private userDashboardService: UserDashboardService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.route.params.subscribe((params) => {
        this.courseId = +params['id'];

        this.userDashboardService.getTopicsByCourse(this.courseId).subscribe(
          (coursetopic: Coursetopic) => {
            this.course = coursetopic.course;

            this.topics = coursetopic.topic;
          },

          (error) => {
            console.error('Error fetching course details:', error);
          }
        );
      });
    });
  }

  // ngOnInit() {

  //   this.route.params.subscribe(params => {

  //     this.courseId = params['id'];

  //     this.courseService.getCourseById(this.courseId).subscribe(

  //       (course: any) => {

  //         this.course = course;

  //       },

  //       (error) => {

  //         console.error('Error fetching course details:', error);

  //       }

  //     );

  //   });

  // }

  // getCourseDetails(): void {

  //   this.userDashboardService.getTopicsByCourse(this.courseId).subscribe(

  //     (course: Course) => {

  //       this.course = course;

  //     },

  //     (error) => {

  //       console.error('Error retrieving course details:', error);

  //     }

  //   );

  // }

  buttonText: string = 'Enroll';

  changeButtonText() {
    this.buttonText = 'Enrolled';
  }
}
