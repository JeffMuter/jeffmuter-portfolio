import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />      </Routes>
    </Router>
  );
}

export default App;
