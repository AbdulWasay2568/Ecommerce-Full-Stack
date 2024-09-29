import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderPlaced: React.FC = () => {

    const navigate = useNavigate(); 

  return (
    <div className="flex justify-center items-center min-h-screen min-w-full bg-green-50">
      <div className="text-center bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl sm:text-3xl font-bold text-green-600 mb-4">Order Placed Successfully!</h1>
        <p className="text-sm sm:text-lg text-gray-700">Thank you for your purchase.</p>
        <p className="text-sm sm:text-lg text-gray-700">Your order is being processed and will be shipped soon.</p>
        <div className="mt-6">
          <button onClick={() => navigate('/')} 
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPlaced;
