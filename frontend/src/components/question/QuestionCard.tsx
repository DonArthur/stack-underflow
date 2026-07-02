import type { Question } from "../../types/question";
import { useNavigate } from "react-router-dom";

interface Props {
  question: Question;
}

export default function QuestionCard({ question }: Props) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/questions/${question.id}`)}
      className="border p-4 bg-white rounded cursor-pointer hover:bg-gray-50"
    >
      <h2 className="text-blue-600 font-semibold">
        {question.title}
      </h2>

      <p className="text-gray-600 text-sm mt-1">
        {question.description}
      </p>

      <div className="flex justify-between text-xs text-gray-500 mt-3">
        <span>
            Status: 
            <span className={`px-2 py-1 ml-2 rounded text-white text-xs ${
              question.status === 'open' ? 'bg-green-500' : question.status === 'answered'
              ? 'bg-blue-500' : 'bg-gray-500'
            }`}>
              {question.status}
            </span>
        </span>
        <span>{question.createdAt}</span>
      </div>
    </div>
  );
}