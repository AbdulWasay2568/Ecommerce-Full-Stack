import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from '../pages/Home';
// import ProductDetail from '../pages/ProductDetail';
// import Cart from '../pages/Cart';
// import Checkout from '../pages/Checkout';
// import Orders from '../pages/Orders';
import Main from '../components/Home';
import Cart from '../components/CartItem'

const AppRouter = () => {
    return (
        // <Router>
        //     <Routes>
        //         <Route path="/" element={<Home />} />
        //         <Route path="/product/:id" element={<ProductDetail />} />
        //         <Route path="/cart" element={<Cart />} />
        //         <Route path="/checkout" element={<Checkout />} />
        //         <Route path="/orders" element={<Orders />} />
        //     </Routes>
        // </Router>
              <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
                    {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
                    <Route path="/cart" element={<Cart />} />
                    {/* <Route path="/checkout" element={<Checkout />} /> */}
                    {/* <Route path="/orders" element={<Orders />} /> */}
                </Routes>
            </Router>
    );
};

export default AppRouter;
