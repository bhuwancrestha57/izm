// App.js
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "./Homepage";
import AdminPanel from "./AdminPanel";

function AppRoutes() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/admin" element={<AdminPanel onLogout={() => navigate("/")} />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
