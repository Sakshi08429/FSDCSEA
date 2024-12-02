// import React from 'react'
// import Student from './Student'

// function App() {

// const mystyle={
//   backgroundColor:'black',
//   color:'cyan'
// }
//   return (
//     <div style={mystyle}>
//        ABES ENGINEERING COLLEGE
       
//        <Student college="ABES ENGINEERING COLLEGE" name="Sakshi" roll="140" branch="CSE" sec="A"/>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Student from './Student';
import StudentState from './StudentState';
import logo from './images.png'
import UseOfState from './UseOfState';
import ImageManipulation from './ImageManipulation';

const App = () => {
  let a = 12;
  const mystyle = {
    backgroundColor: 'red',
    color:"cyan"
  }

  return (
 
    <div>
      <ImageManipulation/>

    </div>

    
  )
}

export default App
