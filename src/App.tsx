import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeBlog from "./components/EmployeeBlog";
import BlogListPage from "./components/BlogListPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogListPage />} />
        <Route path="/blog/:id" element={<EmployeeBlog />} />
      </Routes>
    </Router>
  );
}
