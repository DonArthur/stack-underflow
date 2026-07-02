import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b px-6 py-4 font-bold text-lg">
        StackUnderflow
      </header>

      <main className="max-w-4xl mx-auto p-4">{children}</main>
    </div>
  );
}