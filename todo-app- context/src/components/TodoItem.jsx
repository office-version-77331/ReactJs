import React, {useContext} from 'react'
import TodoContext from '../store/TodoContext';

const TodoItem = ({todoDate,todoText}) => {
  const {deteleTodoItem} = useContext(TodoContext);

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
