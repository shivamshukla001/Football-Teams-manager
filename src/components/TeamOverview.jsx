import React, { useState, useEffect } from 'react';
import '../styles.css';

const TeamOverviewPage = () => {
  const [players, setPlayers] = useState([]);
  
  useEffect(() => {
    // Fetch player data from an API or database
    setPlayers([
      {
        id: 1,
        name: 'John Doe',
        position: 'Forward',
        age: 25,
        pastTeam: 'Old FC',
        currentTeam: 'Current FC',
        stats: { goals: 10, assists: 5 }
      },
      {
        id: 2,
        name: 'Jane Smith',
        position: 'Midfielder',
        age: 27,
        pastTeam: 'Soccer Club',
        currentTeam: 'Current FC',
        stats: { goals: 6, assists: 10 }
      },
    ]);
  }, []);

  const handleDelete = (id) => {
    setPlayers(players.filter(player => player.id !== id));
  };

  const handleEdit = (id) => {
    // You can implement the logic to edit player details here
    console.log('Edit player with ID:', id);
  };

  return (
    <div className="team-overview-container">
      <h2 className="page-title">Team Overview</h2>
      <div className="team-overview-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Age</th>
              <th>Past Team</th>
              <th>Current Team</th>
              <th>Stats</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {players.map(player => (
              <tr key={player.id}>
                <td>{player.name}</td>
                <td>{player.position}</td>
                <td>{player.age}</td>
                <td>{player.pastTeam}</td>
                <td>{player.currentTeam}</td>
                <td>Goals: {player.stats.goals} | Assists: {player.stats.assists}</td>
                <td className="actions">
                  <button className="edit-btn" onClick={() => handleEdit(player.id)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(player.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamOverviewPage;
