import React from 'react'
import TodoItem from './TodoItem'

const TodoItems = ({todoItems, deteleTodoItem}) => {

  return (
    <div>
      {todoItems.map(itme => (
        <TodoItem key={itme.id} id={itme.id} todoText={itme.todoText} todoDate={itme.todoDate}  deteleTodoItem={deteleTodoItem}/>  
      ))}
    </div>
  )
}

export default TodoItems
