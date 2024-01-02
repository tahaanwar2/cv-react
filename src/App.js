import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Award from "./pages/Awards";
import Education from "./pages/Education";
// import Experience from "./pages/Experience";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/awards" element={<Award />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
