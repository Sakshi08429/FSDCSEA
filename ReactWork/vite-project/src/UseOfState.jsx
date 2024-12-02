import React, { useState } from 'react'

function UseOfState() {

    const[count,setCount]=useState(100)
    function increment(){
        setCount(count+4)
    }
    function decrement(){
        setCount(count-10)
    }
  return (
    <div>
        <div>
     <h2>{count}</h2>
     </div>
     <div>
        <button onClick={increment}>Do Increment</button>
     </div>
     <div><button onClick={decrement}>Do Decrement</button>

     </div>
    </div>
  )
}

export default UseOfState

