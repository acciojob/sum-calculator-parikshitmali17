
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [sum,setSum]=useState(0)
  
 
  return (
    <div>
      <h1>Sum Calculator</h1>
      <input type="Number" onChange={(e)=>setSum(Number(e.target.value) +sum)} ></input>
      <p>Sum :{sum} </p>
     
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
