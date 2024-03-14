import { useState } from 'react'
import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AuthContextProvider>

    <Navbar />
    <Routes>
    <Route path='/' element={<Home />} />
    </Routes>
    </AuthContextProvider>
    </>
  )
}

export default App
