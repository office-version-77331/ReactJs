import React from 'react'
import AddTodo from './AddTodo'
import TodoItems from './TodoItems'
import { TodoProvider } from '../store/TodoContext'

const Dashboard = () => {
  return (
    <div className=' mb-6 px-6'>
      <TodoProvider>
        <AddTodo />
        <TodoItems />
      </TodoProvider>

    </div>
  )
}

export default Dashboard
