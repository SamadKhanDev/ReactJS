import React, {useEffect, useRef, useState } from 'react'

function HistoryTrack() {

    const [inputVal, setInputVal] = useState("");
    const prevInputVal= useRef("");

    useEffect(()=>{
        prevInputVal.current = inputVal
    }, [inputVal])

    return (
        <div>
            <h1>HistoryTrack Using Hook UseRef</h1>
            <input
                type="text"
                value={inputVal}
                onChange={(event) => setInputVal(event.target.value)}
                placeholder="Type something..."
            />
            <h2>{inputVal}</h2>
            <h2>Prev value: {prevInputVal.current}</h2>
        </div>
    )
}

export default HistoryTrack