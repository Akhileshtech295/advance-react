import React, { useState } from 'react'

const ControllsInput = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    function handleNameChange(e){
        // console.log(e.target.value)
        setName(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log(name,email);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3 className='h3 mb-4'>Controll input</h3>
        <div className='flex flex-col gap-2 mb-3'>
            <label>Name</label>
            <input
                type='text'
                name='name'
                id='name'
                className='input'
                value={name}
                onChange={handleNameChange}
            />
        </div>
        <div className='flex flex-col gap-2 mb-3'>
            <label>Email</label>
            <input
                type='text'
                name='email'
                id='email'
                className='input'
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
            />
        </div>
        <div>
            <button className='btn'>Sumbit</button>
        </div>
      </form>
    </div>
  )
}

export default ControllsInput
