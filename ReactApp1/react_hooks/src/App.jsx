
import React from "react";

function App() {

//   const [todos,setTodos]=useState([
//   {id:1,
//     title:"go gymm",
//     desc:"gymmm jaaa"
//   },
// {id:2,
//     title:"go000 gymm",
//     desc:"gymmm jaaa"

// },
// {id:3,
//     title:"go gymmmmmm",
//     desc:"gymmm jaaa"
// }])

// function addTodo(){
//   setTodos([...todos,{
//     id:Math.random(),
//     title:Math.random(),
//     desc:Math.random()
//   }])
// }
  return  <>
    <CardWrappper innerComponent={<TextComponent/>}></CardWrappper>

     <CardWrappper innerComponent={<TextComponent/>}></CardWrappper>

      <CardWrappper innerComponent={<TextComponent/>}></CardWrappper>
    {/* <HeaderWithButton></HeaderWithButton>
    <Header title="yash2"></Header> */}
    {/* <button onClick={addTodo}>Add todo</button>
    {todos.map(todo=> <Todo  key={todo.id} title={todo.title} desc={todo.desc}></Todo>)}
    </> */}
    </>
  
}
function TextComponent(){
  return <div>
    hii yash
  </div>
}
function CardWrappper({innerComponent}){
  return <div style={{border:"2px solid black ",padding:20}}>
    {innerComponent}
  </div>
}
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
