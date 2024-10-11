import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiClient } from '../services/axios'; 
import { fetchProducts } from '../services';
import { ProductData } from '../interfaces/product.interface';

export default function Main() {
  const navigate = useNavigate();

  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts(); 
        
        const processedProducts = fetchedProducts.map((product: any) => ({
          productID: product.productID,
          name: product.name,
          price: product.price,
          description: product.description,
          image: product.image , 
          categoryID: product.categoryID,
        }));
  
        setProducts(processedProducts);
        console.log(processedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
  
    loadProducts();
  }, []);
  

  const addToCart = async (item: ProductData) => {

    const userID = localStorage.getItem('userID');
    console.log(userID);

    if (!userID) {
      console.error('User is not logged in');

      navigate('/login');
      return;
    }

    const cartData = {
      userID: Number(userID), 
      productID: item.productID, 
      quantity: item.quantity || 1,
      total_amount: item.price * (item.quantity || 1), 
    };
  
    console.log('Adding to cart:', cartData);
  
    try {
      const response = await apiClient.post('/carts', cartData);
      console.log('Cart item added:', response.data);
  
      navigate('/cart', { state: { cartData } });
    } catch (error) {
      console.error("Failed to add item to cart:", error);
    }
  };
  
  return (
    <div className="min-h-screen bg-white text-black font-semibold">
      <div className="p-4 flex flex-col gap-4">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold">Recently Played</h2>
            <div className="flex justify-center items-center flex-wrap gap-6 mt-4">
              {products.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 p-4 hover:bg-gray-200 rounded-lg cursor-pointer transition duration-300 w-full sm:w-60 md:w-48 lg:w-40"
                >
                  <img 
                    src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZwM9lAidMMLgBkpBfc_mceHLJOSpgaeDHQ&s"} 
                    alt="Item Pic" 
                    className="rounded-lg w-full h-36 object-contain" 
                  />
                   {/* <img src={item.image} alt="Item Pic" className="rounded-lg w-full h-36 object-contain" /> */}
                  <div className="text-left">
                    <p className="text-black h-20 overflow-hidden text-ellipsis">{item.name}</p>
                    <p className="text-gray-600 text-sm">Rs. {item.price}</p>
                    <button
                      className="bg-green-700 hover:bg-green-500 text-white h-8 w-20 rounded-full mt-2"
                      onClick={() => addToCart(item)} 
                    >
                      Buy
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
