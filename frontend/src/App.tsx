import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/FormPages/LoginPage'
import RegisterPage from './pages/FormPages/RegisterPage'
import Dashboard from './pages/HomePages/Dashboard'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
