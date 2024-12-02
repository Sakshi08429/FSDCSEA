import React, { useState } from 'react'
import cat from './cat.jpg'
function ImageManipulation() {
const[height,setHeight]=useState(150);
const[width,setWidth]=useState(150);
const[red,setRed]=useState();
const[green,setGreen]=useState();
const[blue,setBlue]=useState();
const[imgrotate,setimgrotate]=useState(0);

function increaseHeight(){

setHeight(height+30);
}
function increaseWidth(){

    setWidth(width+30);
    }

function colorChange(){
setRed(Math.random()*255);
setGreen(Math.random()*255);
setBlue(Math.random()*255);

}   

function dorotate(){
    setimgrotate(imgrotate+30);
}
  return (
    <div style={{height:'400px', width:'400px',border:'2px solid red',marginLeft:'200px'}}>
      <div style={{paddingLeft:'60px',width:'350px',backgroundColor:`RGB(${red},${green},${blue})`}}>
      <img src={cat} height={height} width={width} />
      </div>
      <div style={{marginTop:'150px'}}>
    <button onClick={increaseHeight}>enhanceHeight</button>&nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={increaseWidth}>enhanceWidth</button>&nbsp;&nbsp;&nbsp;&nbsp;
    
    <button onClick={dorotate}>rotate</button>&nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={colorChange}>backgroundColor change</button>
      </div>


    </div>
  )
}

export default ImageManipulation
