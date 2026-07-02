import type { Answer } from "../../types/answer";

interface Props {
  answer: Answer;
}

export default function AnswerCard({ answer }: Props) {
  return (
    <div className="bg-gray-50 p-4 rounded border">
      <p className="text-gray-800">{answer.content}</p>

      <div className="text-xs text-gray-500 mt-2">
        {answer.author} • {answer.createdAt}
      </div>
    </div>
  );
}