import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/authservice/user-auth.service';
import { UserService } from 'src/app/authservice/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName: string | undefined;
  userPassword: string = '';

  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  // login(loginForm: NgForm) {
  //   this.userService.login(loginForm.value).subscribe(
  //     (response: any) => {
  //       this.userAuthService.setRoles(response.user.role);
  //       this.userAuthService.setToken(response.jwtToken);

  //       const role = response.user.role[0].roleName;
  //       if (role === 'Admin') {
  //         this.router.navigate(['/admin']);
  //       } else {
  //         this.router.navigate(['/courses']);
  //       }
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  login(loginForm: NgForm) {
  this.userService.login(loginForm.value).subscribe(
    (response: any) => {
      // Handle successful login response
      this.userAuthService.setRoles(response.user.role);
      this.userAuthService.setToken(response.jwtToken);

      const role = response.user.role[0].roleName;
      if (role === 'Admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/courses']);
      }
    },
    (error: any) => {
      // Handle login error
      if (error.status === 400 && error.error && error.error.errors) {
        // Validation errors occurred
        const validationErrors = error.error.errors;
        console.log(validationErrors); // You can handle the validation errors as needed
      } else {
        // Other error occurred
        console.log(error);
      }
    }
  );
}


}

