import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
// import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})

export class UserAuthService {


    constructor(private jwtHelper: JwtHelperService) {}

  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): string[] {
    const rolesString = localStorage.getItem('roles');
    if (rolesString) {
      return JSON.parse(rolesString);
    }
    return [];
  }
  

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
    const decodedToken: any = this.jwtHelper.decodeToken(jwtToken);
    const username = decodedToken.sub;
    // Store the username in the local storage
    localStorage.setItem('username', username);


    // Store the username in the local storage
    // localStorage.setItem('username', username);
  }

  public getToken():string|null {
    return localStorage.getItem('jwtToken');
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }
}
