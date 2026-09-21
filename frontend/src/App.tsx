import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/FormPages/LoginPage'
import RegisterPage from './pages/FormPages/RegisterPage'
import Dashboard from './pages/HomePages/Dashboard'
import OrdemDeServico from './pages/OrdemDeServicoPages/OrdemDeServico'
import Tecnicos from './pages/Tecnicos/Tecnicos'
import Clientes from './pages/Clientes/Clientes'
import Parametros from './pages/Settings/Parametros'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/os" element={<OrdemDeServico />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/tecnicos" element={<Tecnicos />} />
        <Route path="/configuracoes" element={<Parametros />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
