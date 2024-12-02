import React, { useState } from 'react'

const StudentState = () => {
   const [count,setCount]=useState(0)

  return (
    <div>
      <p>{count}</p>
    </div>
  )
}

export default StudentState