import { Course } from './models/course';

describe('Course', () => {
  it('should create an instance', () => {
    const course = new Course(1, 'Title', 'Description', 'image.jpg');
    expect(course).toBeTruthy();
  });
});