import React, { useState } from "react";

const PlayerList = () => {
  const [players, setPlayers] = useState([]);

  const addPlayer = () => {
    const name = prompt("Enter player name:");
    if (name) setPlayers([...players, { id: Date.now(), name }]);
  };

  const deletePlayer = (id) => {
    setPlayers(players.filter(player => player.id !== id));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Player Management</h1>
      <button onClick={addPlayer}>Add Player</button>
      <ul>
        {players.map(player => (
          <li key={player.id}>
            {player.name}
            <button onClick={() => deletePlayer(player.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
