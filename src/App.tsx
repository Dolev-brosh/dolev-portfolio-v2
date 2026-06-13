import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectOne from "./pages/ProjectOne";
import ProjectTwo from "./pages/ProjectTwo";
import ProjectThree from "./pages/ProjectThree";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/from-chaos-to-order"           element={<ProjectOne />} />
        <Route path="/projects/from-waiting-to-engagement"    element={<ProjectTwo />} />
        <Route path="/projects/from-editorx-to-wix-studio"   element={<ProjectThree />} />
      </Routes>
    </BrowserRouter>
  );
}
