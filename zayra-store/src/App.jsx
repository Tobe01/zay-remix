import { useState } from 'react'
import { HomePage } from './pages/HomePage';
import { Login } from './pages/Auth/Login';
import './App.css'

function App() {
  return(
      <>
        <HomePage />
        <Login />
      </>
    )
}

export default App
