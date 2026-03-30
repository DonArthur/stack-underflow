import MainLayout from "../components/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1 className="text-xl font-bold mb-4">Questions</h1>

      <div className="border p-4 bg-white rounded">
        Question list will be here
      </div>
    </MainLayout>
  );
}