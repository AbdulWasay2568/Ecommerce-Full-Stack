import { useState } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 flex justify-between items-center p-4 lg:p-6 sticky top-0 z-50">
      <div className="flex items-center">

        <Link to="/" className="text-white text-xl lg:text-2xl font-bold">
          My Store
        </Link>
      </div>

      <nav className="hidden lg:flex space-x-8 items-center">
        <Link to="/home" className="text-white hover:text-gray-400">Home</Link>
        <Link to="/" className="text-white hover:text-gray-400">All Products</Link>
        <Link to="#" className="text-white hover:text-gray-400">Contact Us</Link>
      </nav>

      <div className="hidden lg:flex space-x-6 items-center">
        <Link to="/login" className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-200">Login</Link>
        <Link to="/cart" className="text-white"><TiShoppingCart size={28} /></Link>
      </div>

      {/* Mobile Menu Toggle & Cart Icon */}
      <div className="lg:hidden flex items-center space-x-4">
        <Link to="/cart" className="text-white">
          <TiShoppingCart size={28} />
        </Link>
        <button onClick={toggleNavbar} className="text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-full bg-gray-800 flex flex-col items-center space-y-4 mt-4 py-4">
          <Link to="/home" className="text-white text-lg hover:text-gray-400" onClick={toggleNavbar}>Home</Link>
          <Link to="/" className="text-white text-lg hover:text-gray-400" onClick={toggleNavbar}>All Products</Link>
          <Link to="#" className="text-white text-lg hover:text-gray-400" onClick={toggleNavbar}>Contact Us</Link>
          <Link to="/login" className="text-white text-lg hover:text-gray-400" onClick={toggleNavbar}>Login</Link>
        </nav>
      )}
    </header>
  );
}
