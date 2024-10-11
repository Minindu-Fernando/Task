import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import HomePage from './pages/HomePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HomePage/>
    </>
  )
}

export default App
