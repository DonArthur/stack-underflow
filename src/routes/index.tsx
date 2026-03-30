import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login.tsx";
import Home from "../pages/Home.tsx";
import QuestionDetail from "../pages/QuestionDetail.tsx";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/questions/:id" element={<QuestionDetail />} />
      </Routes>
    </BrowserRouter>
  );
}