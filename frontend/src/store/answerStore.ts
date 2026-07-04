import { create } from "zustand";
import type { Answer } from "../types/answer";

interface AnswerState {
  answers: Answer[];

  addAnswer: (answer: Answer) => void;
}

export const useAnswerStore = create<AnswerState>((set) => ({
  answers: [],

  addAnswer: (answer) =>
    set((state) => ({
      answers: [answer, ...state.answers],
    })),
}));