import React from "react";
import { useState } from "react";

const MultipleUser = () => {
   const [user,setUser] = useState ({
    name:"",
    email:"",
    password:"",
   });

   const handleChange =(e) => {
    console.log(e.target.name);
    console.log(e.target.value);

    const newUser ={
      ...user,
      [e.target.name]: e.target.value,
    };
    setUser(newUser);
     };

   const handleSumbit =(e) => {
     e.preventDefault();
    console.log (user);
   };
   
  return (
    <div>
      <h2 className="h2">Multiple Inputs</h2>
      <form className="mb-6 " onSubmit={handleSumbit}>
        <div className="grid">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" className="input" value={user.name}  onChange={handleChange}/>
        </div>

        <div className="grid gap-2">
          <label htmlFor="name">Email</label>
          <input type="text" name="name" id="name" className="input" value={user.email} onChange={handleChange} />
        </div>

        {/* <div className="grid gap-2">
          <label htmlFor="name">Password</label>
          <input type="text" name="name" id="name" className="input"value={user.password} onChange={handleChange} />
        </div> */}
        <button className="btn">Sumbit</button>
      </form>
    </div>
  ); 
};

export default MultipleUser;
