import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TopicService } from '../topic.service';
import { Course } from '../models/course';
import { UserDashboardService } from '../user-dashboard.service';
import { Topic } from '../models/topic';
import { forkJoin } from 'rxjs';



@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent {

  course: Course = new Course('', '', null);
  topics: Topic[] = [];
  image: File | null = null;

  constructor(
    private userDashboardService: UserDashboardService,
    private topicService: TopicService
  ) {}

  addCourseAndTopic(): void {
    // const course = new Course(this.topic, this.description, this.image);
    const addCourseObservable = this.userDashboardService.addCourse(this.course);
    addCourseObservable.subscribe(
      (response: any) => {
        console.log('Course added successfully');
        const courseId = response.courseId;

    const topicObservables = this.topics.map((topic: Topic) => {
      topic.courseId = courseId;
      return this.topicService.addTopic(topic);
    });

    // addCourseObservable.subscribe(
    //   (response: any) => {
    //     console.log('Course added successfully');
    //     const courseId = response.course.courseId; // Get the auto-generated course ID from the response
    //   this.topics.forEach((topic: Topic) => {
    //     topic.courseId = courseId; // Set the course ID for each topic
    //   });
    // },
    //     // Process response if needed
      
    //   (error: any) => {
    //     console.error('Failed to add course', error);
    //     // Handle error if needed
    //   }
    // );

    forkJoin(topicObservables).subscribe(
      (responses: any[]) => {
        console.log('Topics added successfully');
      }
    );
        // Process responses if needed
      },
      (error: any) => {
        console.error('Failed to add topics', error);
        // Handle error if needed
      }
    );
  }

  addTopic(): void {
    this.topics.push(new Topic('', 0, null));
  }

  deleteTopic(index: number): void {
    this.topics.splice(index, 1);
  }
  onImageChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0]; // Add null check using optional chaining operator
    this.course.courseImage = file||null;
  }
  onTopicContentChange(event: Event, index: number): void {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];
    this.topics[index].topicContent = file || null;
  }
}