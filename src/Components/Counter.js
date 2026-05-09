import React, { useState } from "react";

// Example-1: We use useState to store a number, and then we increase/decrease that number using buttons.

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <div style={{ color: "Red" }}>

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
