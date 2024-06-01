
import {User } from "./db.js"
// import { creattodo , sigin, updataTodo} from "./types.js"
import {sigin , creattodo} from "./types.js"

import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
const port = 3000
const app = express()

app.use(bodyParser.json())
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
}})
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
})
// app.get("/todos",async function(req,res){
//     const Todo = await todo.find({});
//     res.json(Todo)
// });

app.post("/todos",async function(req,res){
    const paylode = req.body
    const parspalylod = creattodo.safeParse(paylode)
    if(!parspalylod.success){
        res.status(403).json({
            msg : "you send the wrong inputs"
        })
    }else{
        const user = await User.findById(paylode.id)
        const  todos = user.todos
        const respons = await User.findOneAndUpdate({_id : paylode.id},{todos : [...todos,{
            title : paylode.title,
            description :paylode.description
        }]},{new : true})

       res.send(respons)
    }

});

// app.put("/completed",async (req,res)=>{
//     const paylode = req.body
//     const parspalylod = updataTodo.safeParse(paylode)

//     if(!parspalylod.success){
//         res.status(403).json({
//             msg : "you send the wrong inputs"
//         })
//     }else{

//         await todo.updateOne({_id : req.body.id},{compleated:true})
        
//         const Todo = await todo.find({});
//         res.json(Todo)
//     }
// });

app.listen(port,(err) => console.log(`the server is runing on port ${port}`))