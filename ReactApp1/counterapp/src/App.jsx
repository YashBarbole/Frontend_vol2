import React from "react"
import { useState } from "react";

function App() {

const[count,setCount]= useState(0);
  
  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
    //now we can reuse the component
  )
}

//first component
function CustomButton(props){

function Onclick(){
props.setCount(props.count+1);
}

  return (
    <>
      <button onClick={Onclick}>Counter {props.count} </button>
    </>
  )
}
export default App
