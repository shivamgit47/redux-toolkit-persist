import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todos = () => {
    const todos = useSelector(state =>state.todos)
    const dispatch = useDispatch()
  return (
    <>
    <div>todos</div>
    <ul>
    {todos.map((todo)=>(
        <li key={todo.id}>
        <div>{todo.text}</div>
        <button onClick={()=>dispatch(removeTodo(todo.id))}>Remove Todo</button>
        </li>
    ))}
    </ul>
    </>
  )
}

export default Todos
