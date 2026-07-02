export type QuestionStatus = "open" | "answered" | "closed";

export interface Question {
  id: string;
  title: string;
  description: string;
  status: QuestionStatus;
  createdAt: string;
  author: string;
}