
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navBar/Navbar'
import Home from './components/Home'
import Dashboard from './components/Dashboard'


function App() {



  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
     
    </BrowserRouter>


  )
}

export default App
