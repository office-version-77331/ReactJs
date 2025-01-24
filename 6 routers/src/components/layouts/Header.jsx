import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex  px-5 py-3 bg-green-500 text-white '>
      <div className='px-5'>
        <NavLink to='/' > Home </NavLink>
      </div>
      <div className='px-5'>
        <NavLink to='/about' > About </NavLink>
      </div>
      <div className='px-5'>
        <NavLink to='/other' > Other </NavLink>
      </div>
    </div>
  )
}

export default Header
