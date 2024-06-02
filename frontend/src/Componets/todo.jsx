import React from 'react';

export function Todo({ todos, setTodos }) {
  const completeTodo = async (todoid) => {
    try {
      const response = await fetch(`http://localhost:3000/completed`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ todoid : todoid,
                                id : localStorage.getItem("id")
         }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const updatedTodo = await response.json();
      
      setTodos(updatedTodo);
    } catch (error) {
      console.error('Error completing todo:', error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {todos.map((todo) => (
        <div key={todo.todoid} className="border-2 drop-shadow-md p-5 m-5 bg-white rounded">
          <h2 className="font-bold">Title: {todo.title}</h2>
          <h3>Description: {todo.description}</h3>
          <button
            className={`bg-purple-600 text-white font-semibold py-2 px-4 rounded-full mt-4 ${todo.completed ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50'}`}
            onClick={() => completeTodo(todo.todoid)}
            disabled={todo.completed}
          >
            {todo.compleated == true ? "completed" : "mark as completed"}
          </button>
        </div>
      ))}
    </div>
  );
}
