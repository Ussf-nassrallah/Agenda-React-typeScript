import React, { useState } from 'react';
import './App.css';

// COMPONENTS
import InputFeild from './Components/InputFeild';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  console.log(todo);

  return (
    <div className="App">
      <div className="App-container">
        <header className='App-header'>Todo App</header>
        <InputFeild todo={todo} setTodo={setTodo} />
      </div>
    </div>
  );
}

export default App;