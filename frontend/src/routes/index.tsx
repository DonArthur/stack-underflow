import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login.tsx";
import Home from "../pages/Home.tsx";
import QuestionDetail from "../pages/QuestionDetail.tsx";
import type { JSX } from "react";
import { useAuthStore } from "../store/authStore.ts";
import AskQuestion from "../pages/AskQuestion.tsx";

function ProtectedRoute({children}: { children: JSX.Element }) {
  const user = useAuthStore((state) => state.user)

  if (!user) {
    return <Navigate to={'/login'} replace />
  }

  return children
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/questions/:id" element={
          <ProtectedRoute>
            <QuestionDetail />
          </ProtectedRoute>
        } />
        <Route path="/ask" element={
          <ProtectedRoute>
            <AskQuestion />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}