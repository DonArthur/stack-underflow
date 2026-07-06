import type { Question } from "../types/question";

export const mockQuestions: Question[] = [
  {
    id: 1,
    title: "How to use useEffect properly?",
    description: "I am confused about dependency array...",
    status: "open",
    createdAt: "2026-03-30",
    author: "Geraldy",
    updatedAt: "2026-03-30",
    authorId: 0
  },
  {
    id: 2,
    title: "What is closure in JavaScript?",
    description: "Can someone explain closures simply?",
    status: "answered",
    createdAt: "2026-03-29",
    author: "Alice",
    updatedAt: "2026-03-30",
    authorId: 0
  },
];