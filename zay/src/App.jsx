import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage';
import { Login } from './pages/Auth/Login';
import './App.css'

function App() {
  return(
    <>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  )
}

export default App
