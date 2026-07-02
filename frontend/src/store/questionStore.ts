import { create } from "zustand";
import type { Question } from "../types/question";
import type { Comment } from "../types/comment";
import { mockQuestions } from "../data/mockData";

interface QuestionState {
  questions: Question[];
  addQuestion: (q: Question) => void;
  comments: Comment[];
}

export const useQuestionStore = create<QuestionState>((set) => ({
  questions: mockQuestions,
  addQuestion: (q) => 
    set((state) => ({
      questions: [q, ...state.questions]
    })),
  comments: [],
}));