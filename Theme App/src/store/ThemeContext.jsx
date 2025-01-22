import React, {createContext} from "react";
import {  useState } from 'react'
const ThemeContext = createContext();
export const  ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light')

    
  const toggleHandler = () => {
    setTheme(currVal => {
      console.log('currVal : ', currVal);
       return currVal === 'light' ? 'dark' : 'light'
      });
  }

  return <ThemeContext.Provider  value={{theme, toggleHandler}}> 
    {children}
  </ThemeContext.Provider>

  
}


export default ThemeContext;