
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/login'
import Home from './pages/Home'
import Navbar from './pages/Navbar';



const CartPage = () => (
  <div style={{ padding: '40px', color: '#fff', backgroundColor: '#0b0f17', minHeight: 'calc(100vh - 70px)' }}>
    <h2>Your Shopping Cart</h2>
    <p>Selected items display here.</p>
  </div>
);
function App() {
  

  return (
    <BrowserRouter>
    
      <div className="app-container">
        {/* Persistent Global Component */}
        <Navbar />

        {/* Dynamic Route View Switching */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    
    </BrowserRouter>
  )
}

export default App
