import React, { useState } from "react";

function ToggleText() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      <h1>{show &&`Hellow React`}</h1>
    </div>
  );
}
export default ToggleText;
