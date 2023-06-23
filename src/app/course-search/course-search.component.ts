import { Component } from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.css']
})
export class CourseSearchComponent {
  searchTerm: string = '';
  searchResults: any[] | undefined; // Replace 'any' with the actual type for your search results

  search(): void {
    // Implement code to search for courses based on this.searchTerm
    // Assign the search results to this.searchResults
  }
}
