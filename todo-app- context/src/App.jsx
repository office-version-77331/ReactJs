
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import {TodoProvider} from './store/TodoContext'

function App() {


 
  return (
    <TodoProvider>
     <AddTodo />
     <TodoItems />
    </TodoProvider>
  )
}

export default App
