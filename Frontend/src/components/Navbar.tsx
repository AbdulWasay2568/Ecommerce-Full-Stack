import { TiShoppingCart } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0">
      <div className="bg-gray-800 mx-auto flex justify-between items-center">
        <div className="space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/" className="text-white">All Products</Link>
          <Link to="#" className="text-white">Contact Us</Link>
        </div>
      
        <div className='space-x-4 flex justify-between items-center'>
          <Link to="/signUp" className="text-white">My Account</Link>
          <Link to="/login" className="text-white">Login</Link>
          <Link to="/cart" className="text-white"><TiShoppingCart/></Link>
        </div>
      
      </div>
    </nav>
  );
};

export default Navbar;
