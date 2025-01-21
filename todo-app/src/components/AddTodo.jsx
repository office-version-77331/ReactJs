import React, { useState } from 'react'

const AddTodo = ({addTodoItems}) => {
    const [textVal,  setTextVal] = useState(''); 
    const [dateVal,  setDateVal] = useState(''); 
    const addHandler = () => {
        addTodoItems(textVal, dateVal);
    }

  return (
    <div className='flex flex-auto px-3 gap-5 py-2 '>
        <input className='flex-1 px-3 py-2 '
        type='text'
        value={textVal}
        onChange={(e) => setTextVal(e.target.value)}
        placeholder='Add todo here....'
        required
        />
        <input className='flex-1 px-3 py-2 '
        type='date'
        value={dateVal}
        onChange={(e) => setDateVal(e.target.value)}
        placeholder='Add todo here....'
        required
        />
        <button
        onClick={addHandler}
        className='bg-green-500 text-white px-3 py-2 rounded-md'>Add</button>
    </div>
  )
}

export default AddTodo
