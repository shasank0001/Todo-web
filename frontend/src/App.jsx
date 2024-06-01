import { useEffect, useState } from 'react';
import { Todo } from './Componets/todo';
import { CreatTodo } from './Componets/CreatTodo';
import { Header } from './Componets/Header';
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:3000/todos");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);


  return (
    <div>
      <Header></Header>
      <CreatTodo todos={todos} setTodos={setTodos} />
      <Todo todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
