import React, { useState } from "react";


export default function Accordion() {

  const [value, setValue] = useState(""); //Create state
  
  const handleChange = e => setValue(e.target.value); //set State

  return (
        <div>
            <input type="text" value={value} onChange={handleChange} />
            <p>{value}</p>
        </div>
  );
}