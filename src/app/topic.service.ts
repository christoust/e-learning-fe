import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Topic } from './models/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private apiUrl = 'http://localhost:9003/topics'; // Update with your backend API URL

  constructor(private http: HttpClient) {}

  addTopic(topic:Topic): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('TopicName', topic.topicName);
    formData.append('courseDescription', topic.courseId.toString());
  
    if (topic.topicContent) {
      formData.append('contentFile', topic.topicContent, topic.topicContent.name);
    }
  
    return this.http.post<any>(`${this.apiUrl}/addtopic`, formData);
  }
  
}
