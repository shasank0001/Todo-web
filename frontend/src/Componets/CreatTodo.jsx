import { useState } from "react"
import { json } from "react-router-dom";

export function CreatTodo({todos , setTodos}){
    const [title,settitle] = useState("");
    const [description,setdescription] = useState("")
    return(
        <div className="flex justify-center ">
           <div className="border-1 drop-shadow-md">
            <div className="p-5">
                <input type="text" placeholder="title" onChange={function(e){
                 settitle(e.target.value)}} className="p-3" value={title}/>
            </div>

            <div className="p-5">
                <input type="text"  placeholder="discription" onChange={function(e){
                setdescription(e.target.value)}} className="p-3" value={description}/>
            </div>

            <div className="flex justify-center">
                <button onClick={()=>{
                    const id = localStorage.getItem("id");
                 fetch("http://localhost:3000/todos",{
                    method : "POST",
                    body: JSON.stringify({
                        id : id,
                        title:title,
                        description:description
                    }),
                    headers:{
                        "content-type":"application/json"
                    }
                }).then(async function(res){
                    const data = await res.json();
                    console.log(data)
                    settitle("");
                    setdescription("");
                    setTodos(data)
                })
                }} className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 m-5">
                    add button</button>
            </div>
            </div> 
        </div>
    )
}