//Create State value
// -user - default null
//Create two functions
// - login:set user equal to an object with name property
// - logout:set user equal to null again
// in jsx use?:to display two different setups
//h4 with "hello there,user name" and logout button
//h4  with "please login" and login button

import React, { useState } from 'react'

const UseChallenge = () => {
const [amdin, setAdmin]=useState(null)

const login =() =>{
  setAdmin({name:"Akhelesh Sagar"})
}
const logout=() => {
  setAdmin(null)
}
  return (
    <div>
      {amdin ? (
         <div>
          <h1> Helloo bhai kaise ho {amdin.name} </h1>
          <button onClick= {logout}className='btn'>log out</button>
         </div>
      ) : (
        <div>
          <h1> plx login </h1>
          <button onClick={login} className='btn'>login</button>
         </div>
      ) }
    </div>
  );
};

export default UseChallenge
