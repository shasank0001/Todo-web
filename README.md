## Todo app

this is simple topo appliction 
it has the following features -

-A user can login
-A user can add there todos
-A user can mark there todo done
-A user can see all there todos

export function Todo({todos ,setTodos}){

    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {todos.map((todo)=>{
            return <div className="border-2 drop-shadow-md p-5 m-5" key={todo._id}>
                <h2> title : {todo.title}</h2>
                <h3> description : { todo.description}</h3>
                <button  className={`bg-purple-600 text-white font-semibold py-2 px-4 rounded-full mt-4 ${todo.completed ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50'}`}onClick={()=>{
                    console.log("hi there")
                    fetch("https://localhost:3000/completed",{
                        method : "put",
                        body: JSON.stringify({
                           id : todo._id
                        }),
                        headers:{
                            "content-type":"application/json"
                        }
                    }).then(async (data)=> {
                        const update = await data.json()
                            setTodos(update)
                    })
                }}>{todo.compleated == true ? "completed" : "mark as completed"} </button>
            </div>
        })}
    </div>
}