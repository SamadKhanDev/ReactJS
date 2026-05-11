import { useRef } from 'react'

function PasswordToggle() {

  const inputRef = useRef(null)

  const toggle = () => {
    if (inputRef.current.type === "password") {
      inputRef.current.type = "text"
    } else {
      inputRef.current.type = "password"
    }
  }

  return (
    <div>
      <h1>Password Toggle Using Hook UseRef</h1>
      <input ref={inputRef} type="password" placeholder="Password" />
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}

export default PasswordToggle;