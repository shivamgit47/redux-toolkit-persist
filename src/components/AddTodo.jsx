import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
    const[input,setInput]=useState('');

    const dispatch = useDispatch();

    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input
            type='text'
            placeholder={input}
            onChange={(e)=>{
                setInput(e.target.value)
            }}
        />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo
