import React, { useState } from "react";

function PlayerForm({ addPlayer }) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && position) {
      addPlayer({ name, position });
      setName("");
      setPosition("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Add a Player</h2>
      <div style={styles.inputGroup}>
        <input
          type="text"
          placeholder="Player Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Add Player
        </button>
      </div>
    </form>
  );
}

const styles = {
  form: {
    backgroundColor: "white",
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  inputGroup: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
  },
  input: {
    flex: "1 1 200px",
    padding: "0.75rem",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "1rem",
  },
  button: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#28a745",
    color: "white",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: "1rem",
  },
};

export default PlayerForm;
