import React from "react";

const UnControlInput = () => {
  const handleSubmit = (e) => { // Accept event parameter
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData.get('name'));
    console.log(Object.fromEntries([...formData.entries()]));
  };
  return (
    <div>
      <h2 className="h2">Multi Inputs</h2>
      <form className="mb-6" onSubmit={handleSubmit}>
        <div className="my-3 grid gap-1">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" className="input" />
        </div>
        <div className="my-3 grid gap-1">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" className="input" />
        </div>
        <div className="my-3 grid gap-1">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" className="input" />
        </div>
        <button
          type="submit"className="w-full bg-blue-500 text-black p-2 rounded-md hover:bg-blue-600 transition">Submit
        </button>
      </form>
    </div>
  );
};

export default UnControlInput;
