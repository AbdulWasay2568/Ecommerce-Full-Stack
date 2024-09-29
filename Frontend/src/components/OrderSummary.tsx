import { useNavigate } from 'react-router-dom';

interface OrderSummaryProps {
  totalPrice: number;
  totalCount: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ totalPrice, totalCount }) => {

  const navigate = useNavigate(); 

  return (
    <div className="w-96 p-4 bg-white border border-gray-200 rounded-lg shadow-md text-sm">
        <h3 className="text-xl font-bold text-gray-800">Order Summary</h3>
        <p className="flex justify-between mt-2 text-gray-700">
        <span>Subtotal</span>
        <span>Rs. {totalPrice}</span>
        </p>
        <p className="flex justify-between mt-2 text-gray-700">
        <span>Shipping Fee</span>
        <span>Rs. 0</span>
        </p>
        <input
        type="text"
        placeholder="Enter Voucher Code"
        className="mt-4 w-full p-2 border border-gray-300 rounded-md"
        />
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
        APPLY
        </button>
        <p className="flex justify-between mt-4 text-xl font-bold text-gray-800">
        <span>Total</span>
        <span>Rs. {totalPrice}</span>
        </p>
        <button
          onClick={() => navigate('/checkout')}
         className="mt-4 w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700">
        PROCEED TO CHECKOUT ({totalCount})
        </button>
    </div>

  )
}

export default OrderSummary