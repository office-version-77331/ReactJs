
import './App.css'
import ThemeToggle from './components/ThemeToggle';
import Content from './components/Content';
import  { ThemeProvider } from './store/ThemeContext';

function App() {
  

  return (
   
    <ThemeProvider >
      <ThemeToggle /> 
      <Content /> 
    </ThemeProvider>
  
  )
}

export default App
