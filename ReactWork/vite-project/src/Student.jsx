// import React from 'react'
// import './Student.css'
// function Student(props) {
//   return (
//     <div className='icard'>
//         <table>
//             <tbody>
//                 <tr style={{backgroundColor:'cyan',color:'black'}}><td colSpan={2}>{props.college}</td></tr>
//                 {/* <tr><td>140</td><td>Sakshi</td><td>CSE</td></tr> */}
//                 <tr><td>Name:</td><td>{props.name}</td></tr>
//                 <tr><td>Roll.no:</td><td>{props.roll}</td></tr>
//                 <tr><td>Branch:</td><td>{props.branch}</td></tr>
//                 <tr><td>Sec:</td><td>{props.sec}</td></tr>
//             </tbody>
//         </table>

//     </div>
//   )
// }

// export default Student

import React from 'react'
import './Student.css'

const Student = ({ data }) => {
  return (
    <div className='icard'>
      {/* {
        JSON.stringify(data)
      } */}
      {/* <p>{data.college}</p> */}
        <table>
            <tbody>
                  <tr style={{ backgroundColor: 'cyan', color:'brown'}}>
                      <td colspan={2}>{ data.college}</td>
                  </tr>
                  <tr>
                      <td colSpan={2}><img src={ data.pic} height='100px'/></td>
                 </tr>
                 <tr>
                    <td>Name</td>
                      <td>{ data.name}</td>
                  </tr>
                  <tr>
                    <td>Roll_Number</td>
                      <td>{ data.roll}</td>
                  </tr>
                  <tr>
                    <td>Branch</td>
                      <td>{data.branch }</td>
                  </tr>
                  <tr>
                    <td>Section</td>
                      <td>{ data.section}</td>
                  </tr>
            </tbody>
        </table>
    </div>
  )
}

Student.defaultdata = {
  college:'AKG Engineering College'
}

export default Student
