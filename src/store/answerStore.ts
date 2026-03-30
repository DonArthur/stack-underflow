import { create } from "zustand";
import type { Answer } from "../types/answer";
import { mockAnswers } from "../data/mockAnswers";

interface AnswerState {
  answers: Answer[];

  addAnswer: (answer: Answer) => void;
}

export const useAnswerStore = create<AnswerState>((set) => ({
  answers: mockAnswers,

  addAnswer: (answer) =>
    set((state) => ({
      answers: [answer, ...state.answers],
    })),
}));