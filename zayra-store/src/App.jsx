import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/homepage';
import { Checkout } from './pages/checkout';
import { Shop } from './pages/shop';
import { Login } from './auth/login';
import { Signup } from './auth/signup';
import { WishList } from '../src/pages/wish-list';
import { Orders } from '../src/pages/orders';
import './App.css'

function App() {
  return (
    <Routes>

      {/* Home Page flow */}
      <Route index element={<HomePage/>} />

      {/* Pages flow */}
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/wish-list" element={<WishList/>} />
      <Route path="/orders" element={<Orders/>} />
      
      {/* Authentication flow */}
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
  )
}

export default App
