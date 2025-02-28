//Setup controlled input (name input)
//Setup onSubmit
//import people array from data
//Create another state value (people[] as defaule)
//iterate over and display right after form
//When user submit the form add new person to the list
//Extra
//-add button and setup functionality to remove user
import React, { useState } from "react";

const UserChallenge = () => {
  const [name, setName] = useState(""); 
  const [people, setPeople] = useState(["Akhilesh", "Sager","Rohit"]); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setPeople([...people, name]);
      setName("")
    }
  };
  const removePerson = (index) => {
    setPeople(people.filter((_, i) => i !== index)); 
  };
  return (
    <div>
      <h2>User Challenge</h2>
      {/* Input Form */}
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name"/>
        <button type="submit">Add Person</button>
      </form>
      {/* Display People List */}
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            {person}
            <button onClick={() => removePerson(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserChallenge;
