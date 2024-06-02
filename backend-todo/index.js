
import {User } from "./db.js"
import {sigin , creattodo , reatodo, updatatodo} from "./types.js"
import express from "express"
// import bodyParser from "body-parser"
import cors from "cors"
const port = 3000
const app = express()

app.use(express.json())
app.use(cors())

app.post("/sigin",async (req,res)=>{

    const paylode = req.body
    const parspalylod = sigin.safeParse(paylode)
    if(!parspalylod.success){
        res.status(403).json({
            msg : " wrong inputs "
        })
    }else{
        const respons = await User.findOne({username : paylode.username});
        if(respons != null){
            res.send({msg : "user alredy exist " , id : 1})
        }else{
        await User.create({
            username : paylode.username,
            password : paylode.password,
            todos : [],
            todocount : 0
        })
        const respons2 = await User.findOne({username : paylode.username,
                                       password : paylode.password
        })
        res.send({id : respons2._id , msg : "sigin successfully"})
    }
}});


app.get("/login",async (req,res)=>{

    const paylode = req.body
    const parspalylod = sigin.safeParse(paylode)
    if(!parspalylod.success){
        res.status(403).json({
            msg : " wrong inputs "
        })
    }else{
       const user = await User.findOne({username : paylode.username ,
                                        password : paylode.password
                                });
            res.send(user._id)
    }
});

app.get("/todos",async function(req,res){

    const palode = req.body
    const parspalylod = reatodo.safeParse(palode)    
    if(!parspalylod.success){
        res.status(403).json({
            msg : "user don't exist try sigin or login"
        })
    }else{
        try{
        const user = await User.findById(palode.id)
        res.send(user.todos)
        }catch{
            res.status(500).json({msg : "somthing went wrong in database call"})
        }
    }
});

app.post("/todos",async function(req,res){
    const paylode = req.body
    const parspalylod = creattodo.safeParse(paylode)
    if(!parspalylod.success){
        res.status(403).json({
            msg : "you send the wrong inputs"
        })
    }else{
        const user = await User.findById(paylode.id)
        const todoCount = user.todocount 
        const respons = await User.findOneAndUpdate(
            { _id: paylode.id },
            {
                $push: { todos: { todoid: todoCount, title: paylode.title, description: paylode.description , completed : false} },
                $inc: { todocount: 1 }
            },
            { new: true }
        );
       res.send(respons.todos)
    }

});

app.put("/completed",async (req,res)=>{
    const paylode = req.body
    const parspalylod = updatatodo.safeParse(paylode)

    if(!parspalylod.success){
        res.status(403).json({
            msg : "you send the wrong inputs"
        })
    }else{
        const user = await User.findById(paylode.id)
        const  newtodos = user.todos
        newtodos[paylode.todoid].completed = true
        await User.findByIdAndUpdate({_id : paylode.id },{todos : newtodos})
        res.send(newtodos)
    }
});

app.listen(port,(err) => console.log(`the server is runing on port ${port}`))