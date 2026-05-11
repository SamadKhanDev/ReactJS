import React, { useState, useEffect } from 'react'

function CountChange() {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("Count Changed"+ {count})
    }, [count])
  return (
    <div>
      <h1>Simple Increment Using Hook UseEffect</h1>
      <h1>Count: {count}</h1>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>

    </div>
  )
}

export default CountChange;
