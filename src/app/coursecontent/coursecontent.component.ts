import { Component, OnInit } from '@angular/core';
import{GithubService} from 'src/app/github.service';

@Component({
  selector: 'app-coursecontent',
  templateUrl: './coursecontent.component.html',
  styleUrls: ['./coursecontent.component.css']
})
export class CoursecontentComponent implements OnInit {
  markdownHTML: string='';

 constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.loadMarkdownContent();
  }

  loadMarkdownContent(): void {
    const url = 'https://github.com/turingcs2005/angular_tips/blob/master/client/src/assets/markdown/tooltip1.md';
    this.githubService.getMarkdownFile(url).subscribe(
      (html: string) => {
        this.markdownHTML = html;
      },
      (error: any) => {
        console.error('Failed to load Markdown content', error);
      }
    );
  }

}
