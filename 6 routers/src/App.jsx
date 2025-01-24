import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Other from './pages/Other';
import AppLayout from './components/layouts/AppLayout';

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
          path: '/other',
          element: <Other />
        },
      ]
    }

  ])
    const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={}>
        <RouterProvider router={router} />
      </QueryClientProvider>


    </>
  )
}

export default App
