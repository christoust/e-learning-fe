import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl = 'http://localhost:9090';

  constructor(private http: HttpClient) { }
 

  signup(userName: string, userFirstName: string, userLastName: string, userPassword: string) {
    const body = {
      userName: userName,
      userFirstName: userFirstName,
      userLastName: userLastName,
      userPassword: userPassword
    };
    return this.http.post<any>(`${this.apiUrl}/registerNewUser`, body);
  }
}
