
import { todo } from "./db.js"
import { creattodo , updataTodo} from "./types.js"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
const port = 3000
const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get("/todos",async function(req,res){
    const Todo = await todo.find({});
    res.json(Todo)
});

app.post("/todos",async function(req,res){
    const paylode = req.body
    const parspalylod = creattodo.safeParse(paylode)
    if(!parspalylod.success){
        res.status(403).json({
            msg : "you send the wrong inputs"
        })
    }else{
        console.log(paylode)
       await todo.create({
        title : paylode.title,
        description :paylode.description,
        compleated : false
       })

       res.send({
        msg : "todo is added"
       })
    }

});

app.put("/completed",async (req,res)=>{
    const paylode = req.body
    const parspalylod = updataTodo.safeParse(paylode)

    if(!parspalylod.success){
        res.status(403).json({
            msg : "you send the wrong inputs"
        })
    }else{

        await todo.updateOne({_id : req.body.id},{compleated:true})
        
        const Todo = await todo.find({});
        res.json(Todo)
    }
});

app.listen(port,(err) => console.log(`the server is runing on port ${port}`))