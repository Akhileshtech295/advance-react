import React, { useState } from "react";

const MultipleUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    
    const newUser = {
      ...user,
      [e.target.name]: e.target.value,
    };

    setUser(newUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    
    // Clear input fields after submit
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-700 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4 text-black">Multiple Inputs</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
              value={user.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
              value={user.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-black  p-2 rounded-md hover:bg-blue-600 transition">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default MultipleUser;
