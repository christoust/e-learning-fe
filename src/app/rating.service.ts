import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private apiUrl = 'http://localhost:9005/ratingservice'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getAverageRatingByCourseId(courseId: number): Observable<number> {
    const url = `${this.apiUrl}/course/${courseId}/average-rating`;
    return this.http.get<number>(url);
  }
}
