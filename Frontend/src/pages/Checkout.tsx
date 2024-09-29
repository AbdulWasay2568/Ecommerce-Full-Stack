const Checkout = () => {
    return (
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Shipping Address</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="Enter your shipping address" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Payment Method</label>
            <select className="w-full p-2 border rounded">
              <option value="card">Card</option>
              <option value="cash">Cash on Delivery</option>
            </select>
          </div>
          <button type="submit" className="bg-indigo-500 text-white p-3 rounded">Place Order</button>
        </form>
      </div>
    );
  };
  
  export default Checkout;
  