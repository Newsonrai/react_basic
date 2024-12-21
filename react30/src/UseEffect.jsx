import React, { useEffect } from 'react'
import { use } from 'react';
import { useState } from 'react'
const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    // //First type of useEffect
    // useEffect(() => {
    //   console.log("First type of useEffect"); 
    // },[])

    // //Second type of useEffect
//    useEffect(() => {
//     console.log("Second type of useEffect")
//    },[count,count1])

    //Third type of useEffect
    useEffect(() => {
        console.log("Third type of useEffect")
    })

  return (
    <div>
        <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count1}</h1>
        <button onClick={() => setCount1(count1 - 1)}>-</button>
    </div>
  )
}

export default UseEffect
