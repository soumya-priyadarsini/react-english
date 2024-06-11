import React, { useState } from 'react'

export default function Count() {
    const [count,setCount] = useState(0)
    const incrementFun = () =>{
        setCount(count+1)
    }
    const decrementFun = () =>{
        console.log("==================",count)
        if(count > 0){
            setCount(count-1)
        }
        
    }
  return (
    <>
   <p>React Project Count:-{count}</p>
   <button onClick={incrementFun}>Increment</button>{" "}
   <button onClick={decrementFun}>Decremrnt</button>
   </>
  )
}
