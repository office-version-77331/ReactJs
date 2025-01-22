import React, { useContext } from 'react'
import ThemeContext from '../store/ThemeContext';

const Content = () => {

  const {theme} = useContext(ThemeContext);
  return (
    <>
   <h1 className={`px-3 py-2 ${theme  === 'light'? 'bg-slate-200 text-gray-800' : 'bg-gray-800 text-slate-200' }`}>WelCome to theme changer </h1>
    </>
  )
}

export default Content 
