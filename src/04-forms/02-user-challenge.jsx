//Setup controlled input (name input)
//Setup onSubmit
//import people array from data.js
//import people array from data.js
//create another state value (people[] as default)
//iterate over and display right after form
//when user submit the form add new person to the list
//Extra
//- add button and set functionality to remove user

import React, { useState } from "react";
import { people as data } from "./data";

const UserChallenge = () => {

  const [name,setName]=useState("");
  const [people, setPeople] = useState(data);

  const handleChange = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  };
  const handleSubmit=(e)=>{
    e.preventDefault();

    const newPerson={
        id:new Date().getTime(),
        name,
    };
    // console.log(newPerson)
    setPeople([...people,newPerson])
    setName("");
  }
  function handleRemove(id){
    const newPeople=people.filter((person)=>person.id!==id);
    setPeople(newPeople==0);
    if(name.length)return;
  }

  return (
    <section>
      {/* <h2 className='h2 mb-8'>Form User Challenge</h2> */}
      <form onSubmit={handleSubmit}>
        <div className="my-3 grid gap-3">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            className="input"
            onChange={handleChange}
          />
          <button className="btn">Submit</button>
        </div>
      </form>

    {people.length < 1 ?(

      <div>
          <h3 className="h3">No person added in the list</h3>
        </div>
        ):(/////solve error

          <div className="space-y-2">
          {people.map(({ id, name }) => (
            <article key={id}>
              <div className="p-4 bg-gray-700 rounded flex justify-between items-center">
                <p className="font-medium">{name}</p>
                <button className="btn" onClick={()=>handleRemove(id)}>remove</button>
              </div>
            </article>
          ))}
        </div>
        )}
    </section>
  );
};

export default UserChallenge;
