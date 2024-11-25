import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import PlayerList from "./components/PlayerList";
import BlogList from "./components/BlogSection"; // Adjust path if necessary
import BlogPostDetails from "./components/BlogPostDetail";
import MatchHighlights from "./components/MatchHighlights";

import StatsComparisonPage from "./components/StatsComparisonPage";

import PlayerProfile from "./components/PlayerProfile"; // Import PlayerProfile component
import PlayerAnalytics from "./components/PlayerAnalytics";

// Example player data
const playerData = {
  name: "Cristiano Ronaldo",
  image: "https://example.com/cristiano.jpg", // Replace with the actual image URL
  position: "Forward",
  team: "Al Nassr",
  stats: {
    goals: 700,
    assists: 200,
    matches: 800,
  },
  matchHistory: [
    { opponent: "Barcelona", date: "2023-10-15", result: "Win 2-1" },
    { opponent: "Real Madrid", date: "2023-10-20", result: "Loss 0-1" },
  ],
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* HomePage route */}
        <Route path="/players" element={<PlayerList />} />
        <Route path="/highlights" element={<MatchHighlights />} />
        <Route path="/analytics" element={<PlayerAnalytics />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogPostDetails />} />
        <Route path="/stats-comparison" element={<StatsComparisonPage />} />

        <Route
          path="/player-profile"
          element={<PlayerProfile player={playerData} />}
        />
      </Routes>
    </div>
  );
};

export default App;
