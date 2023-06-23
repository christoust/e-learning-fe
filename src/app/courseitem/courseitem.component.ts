import { Component } from '@angular/core';

@Component({
  selector: 'app-courseitem',
  templateUrl: './courseitem.component.html',
  styleUrls: ['./courseitem.component.css']
})
export class CourseitemComponent {
  buttonText: string = 'Enroll';

  changeButtonText() {
    this.buttonText = 'Enrolled';
  }

}
