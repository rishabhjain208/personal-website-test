import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";

function App() {
  return (
    <BrowserRouter>
      <NavBar /> {/* Ensure the NavBar is always visible */}
      <div className="p-4">
        <Routes>
          <Route path="/aboutme" element={<AboutMe />} />
          {/* Placeholder Routes for future pages */}
          <Route path="/skills" element={<Skills />} />
          <Route
            path="/hobbies"
            element={<div>Hobbies & Interests Page</div>}
          />
          <Route path="/passions" element={<div>Passions Page</div>} />
          <Route
            path="/academic"
            element={<div>Academic Background Page</div>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
