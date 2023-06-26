import { Component } from '@angular/core';
import { Coursetopic } from '../models/coursetopic';
import { ActivatedRoute } from '@angular/router';
import { UserDashboardService } from '../user-dashboard.service';





@Component({

  selector: 'app-courseitem',

  templateUrl: './courseitem.component.html',

  styleUrls: ['./courseitem.component.css']

})

export class CourseitemComponent {

  courseTopic: Coursetopic= {} as Coursetopic;;
  buttonText: string = 'Button Text';

  constructor(
    private route: ActivatedRoute,
    private userDashboardService: UserDashboardService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const courseId = +params['id']; // Assuming the route parameter is named 'id'
      this.fetchCourseTopic(courseId);
    });
  }

  fetchCourseTopic(courseId: number): void {
    this.userDashboardService.getTopicsByCourse(courseId).subscribe(
      (response: Coursetopic) => {
        this.courseTopic=response;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     // Handle error if needed
      }
    );
  }

  changeButtonText(): void {
    // Implement the button functionality here
  }
}