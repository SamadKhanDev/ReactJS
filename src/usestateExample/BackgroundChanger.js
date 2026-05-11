import React, { useState } from "react";

//Example 3: In this example I am making a bacground Generator

function BackgroundChanger(){
    const [color, setColor] = useState("white");

return(
    <>
    <h1>Color Change Using Hook UseState</h1>
    <div style={{background: color}}>
    <button onClick={()=>{setColor("white")}}>Deafult</button>
    <button onClick={()=>{setColor("red")}}>red</button>
    <button onClick={()=>{setColor("green")}}>green</button>
    <button onClick={()=>{setColor("yellow")}}>Yellow</button>

    <h2>Current Color: {color}</h2>
    </div>
</>
);
}

export default BackgroundChanger;