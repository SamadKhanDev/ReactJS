import { useRef } from 'react'

function FocusButton() {

  const inputRef = useRef(null)

  return (
    <div>
      <h1>Focus Search Bar Using Hook UseRef</h1>
      <input ref={inputRef} placeholder="Click button to focus" />
      <button onClick={() => inputRef.current.focus()}>
        Focus Input
      </button>
    </div>
  )
}

export default FocusButton