import React from 'react';
import './App.css';

// COMPONENTS
import InputFeild from './Components/InputFeild';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App-container">
        <header className='App-header'>Todo App</header>
        
        <InputFeild />
      </div>
    </div>
  );
}

export default App;