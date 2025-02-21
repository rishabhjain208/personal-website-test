import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import HobbiesInterests from "./components/HobbiesInterests";
import Passions from "./components/Passions";
import AcademicBackground from "./components/AcademicBackground";

function App() {
  return (
    <BrowserRouter>
      {/* Navigation Bar (Always Visible) */}
      <NavBar />

      {/* Page Content */}
      <div className="p-6">
        <Routes>
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/hobbies" element={<HobbiesInterests />} />
          <Route path="/passions" element={<Passions />} />
          <Route path="/academic" element={<AcademicBackground />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
