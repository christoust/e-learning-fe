import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getMarkdownFile(url: string): Observable<string> {
    return this.http.get(url, { responseType: 'text' });
  }
}

  

