import { useEffect, useState } from 'react';
import { fetchOrders } from '../services/orderService';

// Define the Order interface
interface Order {
  orderID: string;
  order_status: string;
  total_amount: number;
}

const Orders = () => {
  // Use the Order interface for the state
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const getOrders = async () => {
      const data = await fetchOrders();
      setOrders(data);
    };

    getOrders();
  }, []);

  if (orders.length === 0) return <p>You have no orders</p>;

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-6">Your Orders</h1>
      {orders.map(order => (
        <div key={order.orderID} className="border p-4 rounded mb-4">
          <p>Order ID: {order.orderID}</p>
          <p>Status: {order.order_status}</p>
          <p>Total: ${order.total_amount}</p>
        </div>
      ))}
    </div>
  );
};

export default Orders;
