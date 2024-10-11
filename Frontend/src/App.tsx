import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Footer from './components/Footer';
import CheckOut from './components/CheckOut';
import Navbar from './components/Navbar';
import OrderPlaced from './components/OrderPlaced';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

  return (
    <Router>
      <div className='Container'>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart  />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/orderPlaced" element={<OrderPlaced />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
