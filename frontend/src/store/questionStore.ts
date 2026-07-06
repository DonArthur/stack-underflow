import { create } from "zustand";
import type { Question } from "../types/question";
import type { Comment } from "../types/comment";
import { getQuestionById, getQuestions } from "../services/questionService";
import { mockQuestions } from "../data/mockData";

interface QuestionState {
  questions: Question[];
  questionDetail: Question | null;
  loadQuestions: () => void;
  getQuestionById: (id: number) => void;
  addQuestion: (q: Question) => void;
  comments: Comment[];
}

export const useQuestionStore = create<QuestionState>((set) => ({
  // questions: [],
  questions: mockQuestions,
  questionDetail: null,
  loadQuestions: async () => {
    const questions = await getQuestions()

    if (questions.length > 0) {
      set({
        questions
      })
    }
  },
  getQuestionById: async (id) => {
    const questionDetail = await getQuestionById(id)

    set({ questionDetail })
  },
  addQuestion: (q) => 
    set((state) => ({
      questions: [q, ...state.questions]
    })),
  comments: [],
}));