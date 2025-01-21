import { useState } from 'react'
import initialTodoItems from './data/initialTodoItems'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'

function App() {
  const [todoItems, setTodoItems] = useState(initialTodoItems)

 const addTodoItems = (todoText, todoDate) => {
      setTodoItems(currVal => {
        [...currVal, {id: todoText, todoText, todoDate }]
      });
  }

  const deteleTodoItem = (todoId) => {
    setTodoItems(currVal => {
      return currVal.filter(item => item.id !== todoId);
    });
  }
  return (
    <>
     <AddTodo addTodoItems={addTodoItems} todoItems={todoItems}/>
     <TodoItems todoItems={todoItems} deteleTodoItem={deteleTodoItem} /> 
    </>
  )
}

export default App
