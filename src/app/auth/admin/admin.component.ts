import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {}
//   course = {
//     title: '',
//     description: '',
//     image: null,
//     topic: {
//       name: ''
//     }
//   };
//   selectedFile: File | null = null;

//   handleImageUpload(event: any) {
//     this.selectedFile = event.target.files[0];
//   }

//   handleTopicFileUpload(event: any) {
//     const file: File = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = (e: any) => {
//       const content = e.target.result;
//       this.course.topic.push(content);
//     };

//     reader.readAsText(file);
//   }

//   addCourse() {
  
//     if (this.selectedFile) {
//       this.course.image = this.selectedFile;
//     }

//     console.log('Course added successfully:', this.course);

//   }
// }
