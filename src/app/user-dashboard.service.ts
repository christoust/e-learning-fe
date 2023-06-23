import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './models/course';

@Injectable({
  providedIn: 'root'
})
export class UserDashboardService {

  private apiUrl = 'http://localhost:8085/course'; // Update with your backend API URL

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/getAllCourses`);
  }

  addCourse(course: Course): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('courseName', course.courseName);
    formData.append('courseDescription', course.courseDescription);
    if (course.courseImage) {
    formData.append('imageFile', course.courseImage, course.courseImage.name);}

    return this.http.post<any>(`${this.apiUrl}/addcourse`, formData);
  }
}
