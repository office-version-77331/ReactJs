import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => { 
   
  return (
    <div>
      <nav className='bg-green-500 text-white flex flex-auto px-5 py-3'>
        <div className='px-5 '>
          <Link to='/'>Home</Link>
        </div>
        <div className='px-5 '>
          <Link to='/dashboard'>Dashboard</Link>
        </div>
      
      </nav>
    </div>
  )
}

export default Navbar
