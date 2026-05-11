import React, { useState } from "react";

// Example-1: We use useState to store a number, and then we increase/decrease that number using buttons.

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <>
    <h1>Counter Increase/Decrease using Hook useState</h1>
      <div style={{ color: "black" }}>

        <h1>{count}</h1>

        {/* Increase: */}
        <button
          onClick={() => {
            setCount(count + 1);
          }}>
        Increase
        </button>

        <br />

        {/*Decrease: */}
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrease
        </button>

      </div>
    </>
  );
}

export default Counter;
