export class Course {
  courseId: number | undefined;
  courseName: string;
  courseDescription: string;
  courseImage: File | null;

  constructor(
    courseName: string,
    courseDescription: string,
    courseImage: File | null
  ) {
    this.courseName = courseName;
    this.courseDescription = courseDescription;
    this.courseImage = courseImage;
  }
}
