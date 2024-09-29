import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentInfo: React.FC = () => {

    const navigate = useNavigate();


  return (
    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Payment Information</h2>
      <label className="block mb-2 text-sm text-gray-600">
        <input type="radio" name="paymentMethod" value="Cash" className="mr-2" /> Cash on Delivery
      </label>
      <label className="block mb-2 text-sm text-gray-600">
        <input type="radio" name="paymentMethod" value="Card" className="mr-2" /> Card on Delivery
      </label>

      <div>
        <button
            onClick={() => navigate('/orderPlaced')} 
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Confirm
        </button>
    </div>


    </div>

    
  );
};

export default PaymentInfo;
