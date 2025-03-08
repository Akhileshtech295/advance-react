import React, { useState } from "react";

const frameworks = ["react", "angular", "vue", "sveilte"];
const OthreInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState("react");

  function handleShipping(e){
    // console.log(e.target.checked);
    setShipping(e.target.checked);
  }
  function handleFramework(e) {
    // console.log(e.target.value);
    setFramework(e.target.value);
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault();
        console.log(framework,shipping);
      }}>
        <h2 className="h2">Other Inputs</h2>
        <div>
          <input
            type="checkbox"
            id="shipping"
            checked={shipping}
            name="shipping"
            onChange={handleShipping}
          />
          <label htmlFor="shipping">Free Shipping</label>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="framework">Framework</label>
          <select
            name="framework"
            id="framework"
            value={framework}
            onChange={handleFramework}
          >
            {frameworks.map((framework)=>{
                return(
                    <option key={framework} className="text-black">
                        {framework}
                    </option>
                )
            })}
          </select>
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default OthreInputs;
