import ReactDOM,{createRoot} from "react-dom/client";
import React, { useState } from "react";

const UserChallenge = () => {
  const [name, setName] = useState(""); // Controlled input state
  const [people, setPeople] = useState([]); // List of people

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setPeople([...people, name]); // Add new name to list
      setName(""); // Clear input field
    }
  };

  // Remove a user from the list
  const removeUser = (index) => {
    setPeople(people.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "300px", margin: "auto" }}>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          required
          style={{ padding: "8px", width: "100%" }}
        />
        <button type="submit" style={{ marginTop: "10px", padding: "8px", width: "100%" }}>
          Add Person
        </button>
      </form>

      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
        {people.map((person, index) => (
          <li key={index} style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between" }}>
            {person}
            <button onClick={() => removeUser(index)} style={{ marginLeft: "10px" }}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserChallenge;
