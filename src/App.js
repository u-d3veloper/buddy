import React, { useEffect, useState } from "react";


// React Router imports
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Intern imports
import Home from "./views/Home";
import Profile from "./views/Profile";
import Event from "./views/Event";
import EventInfo from "./views/EventInfo";
import Planning from "./views/Planning";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/event" element={<Event />} />
        <Route path="/eventInfo/:id" element={<EventInfo />} />
        <Route path="/planning/" element={<Planning soiree="Soiree Halloween" />} />
      </Routes>
    </Router>
  );
}

export default App;
