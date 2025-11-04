import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Login } from './pages/Login/Login'
import { Registro } from './pages/Registro/Registro'
import { Home } from './pages/Home/Home'
import { Dashboard } from './pages/Dashboard/Dashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App

