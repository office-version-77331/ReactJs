import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import TodoContext from '../store/TodoContext';

const TodoItems = () => {
  const {todoItems} = useContext(TodoContext);
  console.log('TodoItems ' , todoItems)

  return (
    <div>
      {todoItems.map(itme => (
        <TodoItem key={itme.id} id={itme.id} todoText={itme.todoText} todoDate={itme.todoDate}  />  
      ))}
    </div>
  )
}

export default TodoItems
