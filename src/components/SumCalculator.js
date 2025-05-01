import React, { useState } from 'react'

export default function SumCalculator() {
    const [sum,setSum]=useState(0)
  return (
    <div>SumCalculator
         <input type="Number" onChange={(e)=>setSum(Number(e.target.value) +sum)} ></input>
         <p>Sum :{sum} </p>
    </div>
  )
}
