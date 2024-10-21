import React, { useEffect, useState } from "react";


// React Router imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Intern imports
import Home from "./views/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
