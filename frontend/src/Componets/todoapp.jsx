import { Todo } from "./todo.jsx";
import { CreatTodo } from './CreatTodo.jsx';
import { useEffect } from "react";
import axios from "axios";

export function Todoapp({ todos, setTodos, logedin,setLogedin }) {

  
  if (logedin === true) {
    useEffect(()=>{
      axios({
        method: "post",
        url: "http://localhost:3000/gettodos",
        data: {
          id : localStorage.getItem("id")
        },
      }).then((response)=>{
        console.log("hi there")
        console.log(response.data)
        setTodos(response.data)
      })
      
    },[])
    return (
      <div>
        <CreatTodo todos={todos} setTodos={setTodos} />
        <Todo todos={todos} setTodos={setTodos} />
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-3xl font-bold text-center text-red-500 mt-10">
          Try logging in or signing up
        </h1>
      </div>
    );
  }
}
