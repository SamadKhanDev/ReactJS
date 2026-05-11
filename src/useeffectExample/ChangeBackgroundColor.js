import React, {useEffect, useState } from 'react'

function ChangeBackgroundColor() {

    const [color, setColor] =useState("");
    useEffect(()=>{
        document.body.style.background = color;
    }, [color])
    
  return (
    <div>
        <h1>Change Background Using Hook UseEffect</h1>
      <button onClick={()=>setColor("yellow")}>Change Color</button>
    </div>
  )
}

export default ChangeBackgroundColor;