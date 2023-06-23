export class Topic {
  topicName: string;
  courseId: number;
  topicContent: File | null;

  constructor(
    topicName: string,
    courseId: number,
    topicContent: File | null
  ) {
    this.topicName = topicName;
    this.courseId = courseId;
    this.topicContent = topicContent;
  }
}
