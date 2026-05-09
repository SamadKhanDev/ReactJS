import React, { useState } from "react";

//Example-2: Whatever you type gets saved and displayed live using useState.

function InputField() {
  const [name, setName] = useState("");
  return (
    <>

      <input
        type="text"
        placeholder="Enter name"
        onChange={(event) => setName(event.target.value)}
      />
      <h1>Hellow</h1>
      <h1>{name}</h1>
    </>
  );
}

export default InputField;
