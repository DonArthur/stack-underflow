export type QuestionStatus = "open" | "answered" | "closed";

export interface Question {
  id: number;
  title: string;
  description: string;
  status: QuestionStatus;
  createdAt: string;
  updatedAt: string;
  author: string;
  authorId: number;
}