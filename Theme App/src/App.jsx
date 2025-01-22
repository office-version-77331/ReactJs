import {  useState } from 'react'
import './App.css'
import ThemeToggle from './components/ThemeToggle';
import Content from './components/Content';
import ThemeContext from './store/ThemeContext';

function App() {
  const [theme, setTheme] = useState('light')

  const toggleHandler = () => {
    setTheme(currVal => {
      console.log('currVal : ', currVal);
       return currVal === 'light' ? 'dark' : 'light'
      });
  }
  return (
   
    <ThemeContext.Provider value={{theme, toggleHandler}}>
      <ThemeToggle /> 
      <Content /> 
    </ThemeContext.Provider>
  
  )
}

export default App
