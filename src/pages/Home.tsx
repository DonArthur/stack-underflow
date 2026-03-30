import { useNavigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import QuestionCard from "../components/question/QuestionCard";
import { useQuestionStore } from "../store/questionStore";

export default function Home() {
  const questions = useQuestionStore((state) => state.questions)
  const navigate = useNavigate()

  return (
    <MainLayout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold mb-4">Questions</h1>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
          onClick={() => navigate('/ask')}
        >
          Ask Question
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {questions.map((q) => (
          <QuestionCard key={q.id} question={q} />
        ))}
      </div>
    </MainLayout>
  );
}