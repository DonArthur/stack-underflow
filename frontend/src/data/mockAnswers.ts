import type { Answer } from "../types/answer";

export const mockAnswers: Answer[] = [
  {
    id: "a1",
    questionId: "1",
    content: "You should include dependencies in the array.",
    author: "Bob",
    createdAt: "2026-03-30",
  },
  {
    id: "a2",
    questionId: "1",
    content: "Try using empty array if you want it to run once.",
    author: "Charlie",
    createdAt: "2026-03-30",
  },
];