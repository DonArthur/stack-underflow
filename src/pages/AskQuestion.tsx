import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import { useQuestionStore } from "../store/questionStore";

export default function AskQuestion() {
  const navigate = useNavigate();
  const addQuestion = useQuestionStore((state) => state.addQuestion);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!title.trim() || !description.trim()) return;

    addQuestion({
      id: Date.now().toString(),
      title,
      description,
      status: "open",
      createdAt: new Date().toISOString().split("T")[0],
      author: "You",
    });

    navigate("/");
  };

  return (
    <MainLayout>
      <h1 className="text-xl font-bold mb-4">
        Ask a Question
      </h1>

      <div className="bg-white p-6 rounded shadow flex flex-col gap-3">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Question title"
          className="border p-2 rounded"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your problem..."
          className="border p-2 rounded h-32"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 rounded"
        >
          Submit Question
        </button>
      </div>
    </MainLayout>
  );
}