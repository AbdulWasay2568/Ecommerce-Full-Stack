import { useState, useEffect } from 'react';
import CartItem from '../components/CartItem';
import { fetchCartItems, removeCartItem } from '../services/cartService';

interface CartItem {
  productID: number;
  name: string;
  quantity: number;
  price: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Replace this with the actual userID from your authentication state or context
  const userID = 1;

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const items = await fetchCartItems(userID);
        setCartItems(items);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    getCartItems();
  }, [userID]);

  const handleRemove = async (id: number) => {
    await removeCartItem(id);
    setCartItems(cartItems.filter(item => item.productID !== id));
  };

  if (cartItems.length === 0) return <p>Your cart is empty</p>;

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      {cartItems.map(item => (
        <CartItem key={item.productID} item={item} onRemove={handleRemove} />
      ))}
      <div className="mt-6">
        <button className="bg-indigo-500 text-white p-3 rounded">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
