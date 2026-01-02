const express=require ("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app=express();
const cors=require("cors");
app.use(express.json());
app.use(cors());



app.post("/todo",async(req,res)=>{

    const createPayLoad= req.body;
    const parsedPayload=createTodo.safeParse(createPayLoad);

    if(!parsedPayload.success){
        res.status(400).json({
            msg:"wrong input bro"
        })
        return ;
    }
    // else put in mongodb 
    await todo.create({
        title:createPayLoad.title,
        desc:createPayLoad.desc,
        completed:false
    })
    res.json({
        msg:"todo created"
    })
})




app.get("/todos",async(req,res)=>{

    const todos= await todo.find({});
    //give promise if not use async await

    res.json({
        todos
    })
})




app.put("/completed",async(req,res)=>{

const updatePayLoad=req.body;
const parsedPayload=updateTodo.safeParse(updatePayLoad);

if(!parsedPayload.success){
    res.status(411).json({
        msg:"wrong input my nigga"
    })
    return;
}

await todo.update({
    _id:req.body.id
},
{
    completed:true
                })
    res.json({
    msg:"todo marked as completed"
})

})


app.listen(3000, () => {
  console.log("Server running on port 3000");
});