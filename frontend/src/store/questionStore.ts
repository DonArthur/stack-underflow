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
    try {
      const questionDetail = await getQuestionById(id)
      if (questionDetail) set({ questionDetail })      
    } catch (error) {
      console.error('API call failed, return to mock data: ', error)
    }
    const filteredMock = mockQuestions.filter(q => q.id === id)

    if (filteredMock.length > 0) set({ questionDetail:  filteredMock[0]})
  },
  addQuestion: (q) => 
    set((state) => ({
      questions: [q, ...state.questions]
    })),
  comments: [],
}));