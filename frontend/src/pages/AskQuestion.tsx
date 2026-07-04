import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import { useQuestionStore } from "../store/questionStore";

export default function AskQuestion() {
  const navigate = useNavigate();
  const addQuestion = useQuestionStore((state) => state.addQuestion);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([])
  const [tagInput, setTagInput] = useState('')
  const [tags1, setTags1] = useState<string[]>([])
  const [tagInput1, setTagInput1] = useState('')

  // Cartesian Product
  const tagPairs = tags.flatMap((tag) =>
    tags1.map((tag1) => ({
      tag,
      tag1,
    })))

  const addTag = () => {
    const trimmed = tagInput.trim()

    if (!trimmed || tags.includes(trimmed)) return

    setTags([...tags, trimmed])
    setTagInput('')
  }

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag))
  }

  const addTag1 = () => {
    const trimmed = tagInput1.trim()

    if (!trimmed || tags1.includes(trimmed)) return

    setTags1([...tags1, trimmed])
    setTagInput1('')
  }

  const removeTag1 = (tag: string) => {
    setTags1(tags1.filter((t) => t !== tag))
  }

  const handleSubmit = () => {
    if (!title.trim() || !description.trim()) return;

    addQuestion({
      id: 0,
      title,
      description,
      status: "open",
      createdAt: new Date().toISOString().split("T")[0],
      updatedAt: new Date().toISOString().split("T")[0],
      authorId: 0,
      author: ""
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

        <div className="flex flex-col gap-2">
          <label className="font-medium">Tags</label>

          <div className="flex gap-2">
            <input
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addTag();
                }
              }}
              placeholder="Enter a tag"
              className="border p-2 rounded flex-1"
            />

            <button
              type="button"
              onClick={addTag}
              className="bg-gray-200 px-3 rounded"
            >
              Add
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
              >
                <span>{tag}</span>

                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="font-bold"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium">Another Tags</label>

          <div className="flex gap-2">
            <input
              value={tagInput1}
              onChange={(e) => setTagInput1(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addTag1();
                }
              }}
              placeholder="Enter another tag"
              className="border p-2 rounded flex-1"
            />

            <button
              type="button"
              onClick={addTag1}
              className="bg-gray-200 px-3 rounded"
            >
              Add
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags1.map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
              >
                <span>{tag}</span>

                <button
                  type="button"
                  onClick={() => removeTag1(tag)}
                  className="font-bold"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {tagPairs.map(({ tag, tag1 }) => (
            <div
              key={`${tag}-${tag1}`}
              className="bg-green-100 text-green-800 px-3 py-1 rounded-full"
            >
              {tag}, {tag1}
            </div>
          ))}
        </div>

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