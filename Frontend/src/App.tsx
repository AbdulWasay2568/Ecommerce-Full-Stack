import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartItems from './components/CartItem';
import { useState } from 'react';


import Footer from './components/Footer';
import CheckOut from './components/CheckOut';
import Navbar from './components/Navbar';
import OrderPlaced from './components/OrderPlaced';
import Home from './components/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prevItems => [...prevItems, { ...item, quantity: 1 }]);
  };

  return (
    <Router>
      <div className='Container'>
      <Navbar/>
        {/* <div className='backGround bg-slate-500'> */}
          
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/cart" element={<CartItems cartItems={cartItems} />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/orderPlaced" element={<OrderPlaced />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<Signup />} />


            

            {/* Add more routes here as needed */}
          </Routes>
        {/* </div> */}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
