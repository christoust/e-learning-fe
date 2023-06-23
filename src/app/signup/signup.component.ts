import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

  export class SignupComponent implements OnInit {
    userName: string = '';
    userFirstName: string= '';
    userLastName: string='';
    userPassword: string='';
  // router: any;
  
    constructor(private signupService: SignupService,private router:Router) { }
  
    ngOnInit() {
    }
  
    signup() {
      this.signupService.signup(this.userName, this.userFirstName, this.userLastName, this.userPassword)
        .subscribe(
          response => {
            // Handle successful signup
            console.log('Signup successful:', response);
            // You can redirect to another page or show a success message
            this.router.navigate(['/login']);
          },
          error => {
            // Handle signup error
            console.error('Signup error:', error);
            // You can display an error message to the user
          }
        );
    }
  }