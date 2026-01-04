
import React, { useMemo, useState } from "react";

function App() {

  const [counter,setCounter]= useState(0);
  const[value,setValue]=useState(1);

  let count=useMemo(()=>{ 
    console.log("memo called ")
    let count=0;
  for(let i=0;i<=value;i++){
  count=count+i;;
  }
return count;
},[value])

return  <div>
            <input onChange={function(e){
              setValue(e.target.value);
            }} placeholder={"find sum from 1 to n"}/>
            <br />
            sum from 1 to {value} is {count}
            <br />
            <button onClick={()=>{
              setCounter(counter+1)
            }}>Counter({counter}) </button>
    </div>
}

  //////////////////////////////////
// }
// function TextComponent(){
//   return <div>
//     hii yash
//   </div>
// }
// function CardWrappper({innerComponent}){
//   return <div style={{border:"2px solid black ",padding:20}}>
//     {innerComponent}
//   </div>
// }
// function Todo({title,desc}){
//   return <div>
//     <h1>{title}</h1>
//     <h5>{desc}</h5>
//   </div>

//////////////////////////////////////////////////


// function HeaderWithButton(){
// const[title,setTitle]=useState("my name is yash1");

// function updateTitle(){
//     setTitle("my name is "+ Math.random());
//   }

// return <div>

//   <button onClick={updateTitle}>Update title</button>
//   <Header title={title}></Header>

// </div>
// }
// //////////////////// another way to handle re renders wrap in memo 
// const Header=React.memo(function Header({title}){
// return <div>
//   {title}
// </div>

// })


export default App
