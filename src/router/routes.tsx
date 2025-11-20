import { Routes, Route } from "react-router-dom";
import Home from "../pages/homepage";
import NewsView from "../pages/newsview";
import Staticpage from "../pages/staticpage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<NewsView />} />
      <Route path="/about" element={<Staticpage />} />
    </Routes>
  );
}
