import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutMe from "./components/AboutMe";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<NavBar />} path="/"></Route>
          <Route element={<AboutMe />} path="/aboutme"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
