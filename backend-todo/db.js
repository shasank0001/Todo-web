
import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://shasank12344:qTEswWb79DsmzIRp@cluster0.c01wbch.mongodb.net/todo")

const todoschmea = new mongoose.Schema({
    title : String,
    description : String,
    compleated : Boolean
})
const todo = mongoose.model("todo",todoschmea)

export{todo}