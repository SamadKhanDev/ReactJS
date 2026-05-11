import { useRef } from 'react'

function CopyText() {

  const inputRef = useRef(null)

  const copyText = () => {
    inputRef.current.select()
    navigator.clipboard.writeText(inputRef.current.value)
  }

  return (
    <div>
        <h1>Copy Input Using Hook UseRef</h1>
      <input ref={inputRef}/>

      <button onClick={copyText}>
        Copy
      </button>
    </div>
  )
}

export default CopyText