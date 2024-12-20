import React, { useState } from "react"


function About () {
    const state = useState(0)
    const firstvalue = state[0]
    const secondvalue = state[1]
        const increasecount=()=>{
        secondvalue (firstvalue + 1)
      
    }
    return (
        <div>
            <h1>{firstvalue}</h1>
     <button onClick={increasecount}>Increment</button>
     <button onClick={()=>secondvalue (firstvalue - 1)}>Decrement</button>
     <button onClick={()=>secondvalue (0)}>Reset</button>
        </div>
    )
}

export default About