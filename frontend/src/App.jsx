import { useEffect, useState } from 'react';
import { Header } from './Componets/Header.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from './Componets/login.jsx';
import { Sigin } from './Componets/sigin.jsx';
import { Todoapp } from './Componets/todoapp.jsx';
function App() {
  const [todos, setTodos] = useState([]);
  const [logedin, setLogedin] = useState(false); 

  useEffect(() => {
    const id = localStorage.getItem("id");
    console.log(id);
    if (id != null) {
      setLogedin(true);
    }
  }, []);

  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3000/todos");
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       setTodos(data);
  //     } catch (error) {
  //       console.error('Error fetching todos:', error);
  //     }
  //   };

  //   fetchTodos();
  // }, []);


  return (
    <div>
      <Router>
      <Header></Header>
        <Routes>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/sigin' element = {<Sigin/>}></Route>
          <Route path='/' element= {<Todoapp todos={todos} setTodos={setTodos} logedin= {logedin}/>} ></Route>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
