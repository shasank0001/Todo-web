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
