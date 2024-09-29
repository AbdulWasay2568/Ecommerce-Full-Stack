import { useState, useEffect } from 'react';
import OrderSummary from './OrderSummary';
import { fetchCartByUser, removeCartItem } from '../services/cartService';

interface ItemData {
  id: number;
  productID: number;
  Product: {
    name: string;
    image_url: string;
    price: number;
  };
  quantity: number;
  total_amount: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<ItemData[]>([]);
  const [counts, setCounts] = useState<number[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const userID = 1; // Simulating logged-in userID

  // Fetch cart items for the user
  useEffect(() => {
    const fetchCart = async () => {
      setLoading(true);
      try {
        const fetchedItems = await fetchCartByUser(userID);
        if (Array.isArray(fetchedItems)) {
          setCartItems(fetchedItems);
          setCounts(fetchedItems.map(item => item.quantity || 0));
        } else {
          console.error("Fetched item is not in the expected format:", fetchedItems);
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [userID]);

  // Increment item quantity
  const handleIncrement = (index: number) => {
    setCounts(prevCounts => {
      const newCounts = [...prevCounts];
      newCounts[index] = (newCounts[index] || 1) + 1;
      return newCounts;
    });
  };

  // Decrement item quantity
  const handleDecrement = (index: number) => {
    setCounts(prevCounts => {
      const newCounts = [...prevCounts];
      if (newCounts[index] > 1) {
        newCounts[index] -= 1;
      }
      return newCounts;
    });
  };

  // Remove item from cart
  const handleRemoveItem = async (id: number) => {
    try {
      await removeCartItem(id);
      setCartItems(prevItems => prevItems.filter(item => item.id !== id));
      setCounts(prevCounts => prevCounts.filter((_, i) => cartItems[i]?.id !== id));
    } catch (error) {
      console.error("Error removing cart item:", error);
    }
  };

  // Recalculate total price and total count when items or counts change
  useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0;
      let count = 0;
      cartItems.forEach((item, index) => {
        const quantity = counts[index] || item.quantity;
        total += item.Product.price * quantity;
        count += quantity;
      });
      setTotalPrice(total);
      setTotalCount(count);
    };

    calculateTotalPrice();
  }, [counts, cartItems]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container min-h-screen mx-auto p-6 bg-gray-100 text-gray-900">
      <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-3">
        <div className="w-full bg-white rounded-lg shadow-md">
          <div className="flex justify-between p-4 border-b border-gray-300 bg-gray-50 rounded-t-lg">
            <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
            <button className="text-red-500 hover:text-red-700 font-semibold">DELETE</button>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {cartItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex flex-col lg:flex-row items-start p-4 border-b border-gray-200 bg-white">
                <input type="checkbox" className="mr-4 mt-2 lg:mt-0" />
                <img
                  src={item.Product.image_url}
                  alt={item.Product.name}
                  className="w-24 h-24 object-cover rounded-md border border-gray-300"
                />
                <div className="ml-4 flex-grow">
                  <p className="text-lg font-semibold text-gray-700">{item.Product.name}</p>
                  <p className="text-sm text-gray-500">Rs. {item.Product.price || 0}</p>
                  <p className="mt-2 text-xl font-bold text-gray-900">
                    Rs. {item.Product.price * (counts[index] || item.quantity || 0)}
                  </p>
                </div>
                <div className="flex flex-col justify-between gap-6 items-center mt-4 lg:mt-0">
                  <div>
                    <button
                      onClick={() => handleDecrement(index)}
                      className="px-3 py-1 border border-gray-400 rounded-md text-gray-700 hover:bg-gray-200"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={counts[index] || item.quantity || 0}
                      className="w-16 text-center border border-gray-300 mx-2 rounded-md"
                      readOnly
                    />
                    <button
                      onClick={() => handleIncrement(index)}
                      className="px-3 py-1 border border-gray-400 rounded-md text-gray-700 hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                  <button onClick={() => handleRemoveItem(item.id)} className="text-red-500 hover:text-red-700">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <OrderSummary totalPrice={totalPrice} totalCount={totalCount} />
      </div>
    </div>
  );
};

export default Cart;
