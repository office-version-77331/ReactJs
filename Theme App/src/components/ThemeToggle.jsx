import React, { useContext } from 'react'
import ThemeContext from '../store/ThemeContext';



const ThemeToggle = () => {
  const {theme, toggleHandler} = useContext(ThemeContext);
  return (
    <button className={`${theme === 'light' ? 'bg-black text-white' :'bg-white text-black' } px-3 py-2 rounded-md`}
      onClick={toggleHandler}>
    
            change 
    </button>
  )
}

export default ThemeToggle
