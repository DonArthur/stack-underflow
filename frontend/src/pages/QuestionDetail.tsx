import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import { useQuestionStore } from "../store/questionStore";
import { useAnswerStore } from "../store/answerStore";
import AnswerCard from "../components/answer/AnswerCard";
import { useEffect, useState } from "react";
import { useAuthStore } from "../store/authStore";

export default function QuestionDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [content, setContent] = useState('')

  const { questionDetail, getQuestionById } = useQuestionStore()
  const user = useAuthStore((state) => state.user)
  const allAnswers = useAnswerStore((state) => state.answers)
  const addAnswer = useAnswerStore((state) => state.addAnswer)

  const handleSubmit = () => {
    if (!content.trim() || !id) return;

    addAnswer({
      id: Date.now().toString(),
      questionId: id,
      content,
      author: user || 'Anonymous',
      createdAt: new Date().toISOString().split("T")[0],
    });

    setContent("");
  }
  const answers = allAnswers.filter((ans) => ans.questionId === id)

  useEffect(() => {
    if (id) {
      getQuestionById(Number(id))
    }
  }, [id, getQuestionById])

  if (!questionDetail) {
    return (
      <MainLayout>
        <p>Question not found</p>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <button onClick={() => navigate(-1)} className="mb-4 text-blue-500 cursor-pointer">
        Back
      </button>

      <div className="bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold text-blue-600">{questionDetail.title}</h1>

        <p className="text-gray-700 mt-4">
          {questionDetail.description}
        </p>

        <div className="flex justify-between text-sm text-gray-500 mt-6">
          <span>
            Status: 
            <span className={`px-2 py-1 ml-2 rounded text-white text-xs ${
              questionDetail.status === 'open' ? 'bg-green-500' : questionDetail.status === 'answered'
              ? 'bg-blue-500' : 'bg-gray-500'
            }`}>
              {questionDetail.status}
            </span>
          </span>
          <span>
            {questionDetail.author} &#183; {questionDetail.createdAt}
          </span>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-3">
            Answers ({answers.length})
          </h2>

          <div className="flex flex-col gap-3">
            {answers.map((ans) => (
              <AnswerCard key={ans.id} answer={ans} />
            ))}
          </div>
        </div>

        {
          questionDetail.status !== 'closed' && (
            <div className="mt-6">
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your answer..."
                className="w-full border p-2 rounded mb-2"
              />

              <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleSubmit}>
                Submit Answer
              </button>
            </div>
          )
        }
      </div>
    </MainLayout>
  );
}