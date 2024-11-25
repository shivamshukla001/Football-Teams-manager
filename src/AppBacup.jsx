import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import Navbar from "./components/Navbar"; // Adjust path if necessary
import PlayerList from "./components/PlayerList";
import TeamOverview from "./components/TeamOverview";

const App = () => {
  return (
    <div>
      <Navbar /> {/* Navbar should appear on all pages */}
      <Routes>
        <Route path="/" element={<PlayerList />} /> {/* Home page */}
        <Route path="/team-overview" element={<TeamOverview />} /> {/* Team Overview page */}
      </Routes>
    </div>
  );
};

export default App;
