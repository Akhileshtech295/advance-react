import React, { useState } from 'react'

const User_chalanges = () => {

    const [User, setUser] = useState(null)


    function Login() {
        setUser({ name: "Aman" })
    }
    function Logout() {
        setUser(null)
    }

    return (
        <div>
            <div>User_chalanges</div>
            {User ? (
                <div>
                    <p className='h4'>Hello There, {User.name}!</p>
                    <button className='btn w-40 mt-3' onClick={Logout}>Logout</button>
                </div>
            ) : (
                <div>
                    <p >Please log in.</p>
                    <button className='btn w-40 mt-3' onClick={Login}>Login</button>
                </div>
            )}
        </div>

    )
}

export default User_chalanges