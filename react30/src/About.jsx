import React, { useState } from "react"


function About () {
    const [Num,setNum] = useState(0)
    return (
        <div>
        <h1>{Num}</h1>
     <button onClick={()=>setNum (Num + 1)}>Increment</button>
     <button onClick={()=>setNum (Num - 1)}>Decrement</button>
     <button onClick={()=>setNum (0)}>Reset</button>
        </div>
    )
}

export default About