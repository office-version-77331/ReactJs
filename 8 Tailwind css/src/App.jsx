import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import AppLayout from './components/layouts/AppLayout';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/signup',
          element: <SignUp />
        },
      ]
    }

  ])
    
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
