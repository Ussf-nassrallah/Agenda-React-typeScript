import React from 'react';
import "./InputFeild.css";

const InputFeild: React.FC = () => {
  return (
    <form className='input'>
      <input type="text" placeholder='Enter a Task' className='input__box' />
      <button type='submit' className='input__submit'>Submit</button>
    </form>
  )
}

export default InputFeild