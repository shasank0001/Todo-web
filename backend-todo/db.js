
import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://shasank12344:qTEswWb79DsmzIRp@cluster0.c01wbch.mongodb.net/todo")

const Userschema = new mongoose.Schema({

    username : String,
    password : String,
    todos : [{}],
    todocount : Number
})

const User = mongoose.model("User",Userschema)
export{User}