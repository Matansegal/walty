import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Gallery from "./components/Gallery";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
