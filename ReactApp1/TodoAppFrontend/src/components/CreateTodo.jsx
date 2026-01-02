// import React from 'react'
// import { useState } from 'react'

// const CreateTodo = () => {

//     const [title,setTitle]=useState("");
//     const [desc,setDesc]=useState("");

//   return (
//     <div>
//       <input type="text" placeholder='title' onChange={function(e){
//             const value=e.target.value;
//             setTitle(value);
//       }}> </input><br></br>


//       <input type="text" placeholder='desc' onChange={function(e){
//         const value=e.target.value;
//         setDesc(value);
//       }}>  </input><br></br>

//       <button onClick={()=>{
//         fetch("http://localhost:3000/todo",{
//             method:"POST",
//             body:JSON.stringify({
//                 title:title,
//                 desc:desc
//             }),
//             headers:{
//                 "contentType":"application/json"
//             }
//         })
//             .then(async function (res) {
//                 const json=await res.json();
//                 console.log(json);
//                 alert("todo added")
//             })
//       }}> Add todo</button>
//     </div>
//   )
// }

// export default CreateTodo
import React, { useState } from 'react';

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />

      <input
        type="text"
        placeholder="desc"
        onChange={(e) => setDesc(e.target.value)}
      />
      <br />

      <button
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              desc: desc
            }),
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then(res => res.json())
            .then(json => {
              console.log(json);
              alert("Todo added");
            });
        }}
      >
        Add todo
      </button>
    </div>
  );
};

export default CreateTodo;
