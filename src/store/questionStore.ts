import { create } from "zustand";
import type { Question } from "../types/question";
import type { Comment } from "../types/comment";

interface QuestionState {
  questions: Question[];
  comments: Comment[];
}

export const useQuestionStore = create<QuestionState>(() => ({
  questions: [],
  comments: [],
}));