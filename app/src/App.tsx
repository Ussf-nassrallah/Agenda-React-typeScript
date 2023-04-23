import React, { useState } from 'react';
import { Todo } from './Models/model';
import './App.css';

// COMPONENTS
import InputFeild from './Components/InputFeild';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  }

  console.log(todos);

  return (
    <div className="App">
      <div className="App-container">
        <header className='App-header'>Todo App</header>
        <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      </div>
    </div>
  );
}

export default App;