import { createContext } from "react";
import initialTodoItems from "../data/initialTodoItems";
import { useReducer } from "react";

const TodoContext = createContext();

const todoItemsReducer = (currVal, action) => {
    // Here currVal is the current value of the state and action is the object that is passed to the dispatch function. And currVal state is get it from the useReducer hook. It came from the initialtodoItem. State is automatically updated by the useReducer hook
 switch(action.type) {
    case 'ADD_ITEM' : {
        const todoText = action.payload.todoText; 
        const todoDate = action.payload.todoDate;
    
        return [...currVal, { id: todoText, todoText, todoDate }] 
    }
    case 'DELETE_ITEM' : {
    const todoId = action.payload.todoId;
    
    return currVal.filter(item => item.id !== todoId);
    }
    default : 
    return currVal;
 }
}

export const TodoProvider = ({ children }) => {
    const [todoItems, dispatch] = useReducer(todoItemsReducer,  initialTodoItems);

    const addTodoItems = (todoText, todoDate) => {
        console.log('currVal : ', todoDate, todoText);

        dispatch({
            type : 'ADD_ITEM',
            payload : {
                todoDate, todoText
            }
        })
    }

    const deteleTodoItem = (todoId) => {
       dispatch({
            type : 'DELETE_ITEM',
            payload : {
                todoId
            }
       })
    }
    return <TodoContext.Provider value={{ todoItems, addTodoItems, deteleTodoItem }}>
        {children}
    </TodoContext.Provider>

}


export default TodoContext; 