

const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://yashbarbole7110_db_user:uMfzYcpWF4bisl6i@todofullstack.bb9x71k.mongodb.net/Todos");

const todoSchema=mongoose.Schema({
    title:String,
    desc:String,
    completed:Boolean
})

const todo=mongoose.model('Todos',todoSchema);

module.exports={
    todo
}
