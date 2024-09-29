const ContactInformation = () => {
    return (
        <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-md">
            <div className="flex flex-col">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Contact Information</h2>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                    <div className="form-group">
                        <label htmlFor="full-name" className="block text-gray-700">Full name</label>
                        <input 
                            type="text" 
                            id="full-name" 
                            placeholder="Enter your full name" 
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
                        <input 
                            type="text" 
                            id="phone" 
                            placeholder="Enter your phone number" 
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="form-group col-span-1 sm:col-span-2">
                        <label htmlFor="address" className="block text-gray-700">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="abc@gmail.com" 
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="form-group col-span-1 sm:col-span-2">
                        <label htmlFor="address" className="block text-gray-700">Address</label>
                        <input 
                            type="text" 
                            id="address" 
                            placeholder="House# 123, Street# 123, Society, City, Province" 
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </form>

            </div>
            
            {/* <OrderSummary totalPrice={totalPrice} totalCount={totalCount} /> */}

        </div>
    );
}

export default ContactInformation;
