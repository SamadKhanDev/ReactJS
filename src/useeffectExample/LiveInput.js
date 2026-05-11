import React, {useEffect, useState } from 'react'





 function LiveInput() {
    const [text, setText] = useState("")

 useEffect(()=>{
           console.log("Typing: "+{text})
    }, [text])
    
  return (
    <div>
        <input
        type="text"
        onChange={(event)=>setText(event.target.value)}
        placeholder='Enter Text'
        />
    </div>
  )
}
export default LiveInput;