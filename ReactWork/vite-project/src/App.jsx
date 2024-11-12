import React from 'react'
import Student from './Student'

function App() {

const mystyle={
  backgroundColor:'black',
  color:'cyan'
}
  return (
    <div style={mystyle}>
       ABES ENGINEERING COLLEGE
       
       <Student college="ABES ENGINEERING COLLEGE" name="Sakshi" roll="140" branch="CSE" sec="A"/>
    </div>
  )
}

export default App
