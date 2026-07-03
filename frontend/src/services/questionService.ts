import { api } from "./api";
import type { Question } from "../types/question";

export const getQuestions = async (): Promise<Question[]> => {
    const response = await api.get("/questions");
    return response.data;
}

export const getQuestionById = async (id: number): Promise<Question> => {
    const response = await api.get(`/questions/${id}`)
    return response.data
}