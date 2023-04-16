import React from 'react';
import "./InputFeild.css";

interface Props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>
}

const InputFeild: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <form className='input'>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder='Enter a Task'
        className='input__box'
      />
      <button type='submit' className='input__submit'>Submit</button>
    </form>
  )
}

export default InputFeild