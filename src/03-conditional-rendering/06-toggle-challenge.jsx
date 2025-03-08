//create state value (boolean)
//return a button and a component
//when user click the button
//-toogle state value
//-conditionaly render component

import React, { useState } from 'react'

const ToggleChallenge = () => {
  const [toggle,setToggle]=useState(false)
    function handleToggle(){
      setToggle(!toggle)
    }

  return (
    <div>
      <h1 className='bg-blue-600'>Heading Bhai Toggle wale</h1>
      <button className='btn'onClick={handleToggle}>Click me</button>
      {toggle && <SomeComponent/>}
    </div>
  )
  function SomeComponent(){
      return(
        <div>
          <h1>Somom Comopment</h1>
        </div>
      )
    
  }
}

export default ToggleChallenge

