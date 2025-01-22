import { createContext, useState } from "react";
import initialTodoItems from "../data/initialTodoItems";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todoItems, setTodoItems] = useState(initialTodoItems);

    const addTodoItems = (todoText, todoDate) => {
        console.log('currVal : ', todoDate, todoText);
        setTodoItems(currVal => {
            return [...currVal, { id: todoText, todoText, todoDate }]
        });
    }

    const deteleTodoItem = (todoId) => {
        setTodoItems(currVal => {
            return currVal.filter(item => item.id !== todoId);
        });
    }
    return <TodoContext.Provider value={{ todoItems, addTodoItems, deteleTodoItem }}>
        {children}
    </TodoContext.Provider>

}


export default TodoContext; 