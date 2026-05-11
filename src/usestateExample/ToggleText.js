import React, { useState } from "react";

function ToggleText() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>Toggle Using Hook UseState</h1>
      <button onClick={() => setShow(!show)}>Toggle</button>
      <h1>{show && `Hellow React`}</h1>
    </div>
  );
}
export default ToggleText;
