import React, { useState } from "react";
import { Line, Radar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, RadialLinearScale } from "chart.js";
import "../analytics.css"
// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, RadialLinearScale);

const PlayerAnalytics = () => {
  const [playerData] = useState({
    name: "Cristiano Ronaldo",
    stats: {
      goals: 25,
      assists: 10,
      appearances: 30,
      wins: 20,
      losses: 5,
      shotsOnTarget: 35,
      passAccuracy: 85,
      distanceCovered: 500, // in kilometers
    },
    performance: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      data: [5, 6, 8, 4, 7, 6, 9],
    },
    radarStats: {
      labels: ["Shooting", "Passing", "Speed", "Dribbling", "Defense", "Endurance"],
      data: [80, 85, 90, 75, 70, 85],
    },
  });

  // Line Chart Data for Player Performance over Time
  const chartData = {
    labels: playerData.performance.labels,
    datasets: [
      {
        label: "Goals Scored",
        data: playerData.performance.data,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  // Radar Chart Data for Player Stats
  const radarData = {
    labels: playerData.radarStats.labels,
    datasets: [
      {
        label: "Player Stats",
        data: playerData.radarStats.data,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="analytics-container">
      <div className="player-summary">
        <h1>{playerData.name}</h1>
        <div className="player-stats">
          <div className="stat-card">
            <h3>Goals</h3>
            <p>{playerData.stats.goals}</p>
          </div>
          <div className="stat-card">
            <h3>Assists</h3>
            <p>{playerData.stats.assists}</p>
          </div>
          <div className="stat-card">
            <h3>Appearances</h3>
            <p>{playerData.stats.appearances}</p>
          </div>
          <div className="stat-card">
            <h3>Wins</h3>
            <p>{playerData.stats.wins}</p>
          </div>
          <div className="stat-card">
            <h3>Losses</h3>
            <p>{playerData.stats.losses}</p>
          </div>
          <div className="stat-card">
            <h3>Shots on Target</h3>
            <p>{playerData.stats.shotsOnTarget}</p>
          </div>
          <div className="stat-card">
            <h3>Pass Accuracy</h3>
            <p>{playerData.stats.passAccuracy}%</p>
          </div>
          <div className="stat-card">
            <h3>Distance Covered</h3>
            <p>{playerData.stats.distanceCovered} km</p>
          </div>
        </div>
      </div>

      <div className="performance-chart">
        <h2>Performance Over Time (Goals Scored)</h2>
        <Line data={chartData} />
      </div>

      <div className="radar-chart">
        <h2>Player Skills Overview</h2>
        <Radar data={radarData} />
      </div>
    </div>
  );
};

export default PlayerAnalytics;
