import { useRef } from "react";



function ClearInputField() {

    const inputRef = useRef()
    function clear(){
        inputRef.current.value = " "
    }
  return (
    <div>
        <h1>Clear Input Using Hook UseRef</h1>
      <input
      ref = {inputRef}
      type = "text"
      placeholder='Enter text'
      />
<button onClick={clear}>Clear Input</button>

    </div>
  )
}

export default ClearInputField;