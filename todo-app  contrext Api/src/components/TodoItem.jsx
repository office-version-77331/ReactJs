import React from 'react'

const TodoItem = ({id, todoText, todoDate, deteleTodoItem}) => {
  return (
    <div className='flex flex-auto gap-5 px-3 py-2'>
      <div className='flex-1 px-3 py-2 '>{todoText}</div>
      <div className='flex-1 px-3 py-2 '>{todoDate}</div>
      <button
        onClick={() => deteleTodoItem(id)}
        className='bg-red-500 text-white px-3 py-2 rounded-md'>Delete</button>
    </div>
  )
}

export default TodoItem
