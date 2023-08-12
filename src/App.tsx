import { Routes, Route } from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
