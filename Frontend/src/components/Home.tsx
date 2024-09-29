// // import { useEffect, useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { fetchProducts } from '../services'; 

// // interface Product {
// //   name: string;
// //   image: string;
// //   price: number;
// //   quantity?: number;
// // }

// // interface ItemData {
// //   ItemName: string;
// //   ItemImage: string;
// //   price: number;
// //   quantity: number;
// // }

// // export default function Main() {
// //   const navigate = useNavigate();

// //   // State to store products fetched from the backend
// //   const [products, setProducts] = useState<Product[]>([]);

// //   // Fetch products when the component mounts
// //   useEffect(() => {
// //     const loadProducts = async () => {
// //       try {
// //         const fetchedProducts = await fetchProducts(); // Fetch products from the backend
// //         setProducts(fetchedProducts);
// //       } catch (error) {
// //         console.error("Failed to fetch products:", error);
// //       }
// //     };

// //     loadProducts();
// //   }, []);

// //   const addToCart = (item: Product) => {
// //     const itemData: ItemData = {
// //       ItemName: item.name,
// //       ItemImage: item.image,  // Ensure this is correct
// //       price: item.price,
// //       quantity: item.quantity || 1, // Default quantity to 1 if not specified
// //     };

// //     console.log('Adding to cart:', itemData); // Debugging line

// //     // Navigate to cart page with selected item details
// //     navigate('/cart', { state: { itemData } });
// //   };

// //   return (
// //     <div className="min-h-screen bg-white text-black font-semibold">
// //       <div className="p-4 flex flex-col gap-4">
// //         <div className="flex flex-col gap-12">
// //           <div className="flex flex-col justify-center items-center">
// //             <h2 className="text-xl font-bold">Recently Played</h2>
// //             <div className="flex justify-center items-center flex-wrap gap-6 mt-4">
// //               {products.map((item, index) => (
// //                 <div
// //                   key={index}
// //                   className="flex flex-col items-center gap-2 p-4 hover:bg-gray-200 rounded-lg cursor-pointer transition duration-300 w-full sm:w-60 md:w-48 lg:w-40"
// //                 >
// //                   <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZwM9lAidMMLgBkpBfc_mceHLJOSpgaeDHQ&s"} alt="Item Pic" className="rounded-lg w-full h-36 object-contain" />
// //                   {/* <img src={item.image } alt="Item Pic" className="rounded-lg w-full h-36 object-contain" /> */}

// //                   <div className="text-left">
// //                     <p className="text-black h-20 overflow-hidden text-ellipsis">{item.name}</p>
// //                     <p className="text-gray-600 text-sm">Rs. {item.price}</p>
// //                     <button
// //                       className="bg-green-700 hover:bg-green-500 text-white h-8 w-20 rounded-full mt-2"
// //                       onClick={() => addToCart(item)}
// //                     >
// //                       Buy
// //                     </button>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }




// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { apiClient } from '../services/axios'; // Use the existing axios instance
// import { fetchProducts } from '../services'; 
// import axios from 'axios';

// interface Product {
//   name: string;
//   image: string;
//   price: number;
//   quantity?: number;
// }

// interface ItemData {
//   ItemName: string;
//   ItemImage: string;
//   price: number;
//   quantity: number;
// }

// export default function Main() {
//   const navigate = useNavigate();

//   // State to store products fetched from the backend
//   const [products, setProducts] = useState<Product[]>([]);

//   // Fetch products when the component mounts
//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         const fetchedProducts = await fetchProducts(); // Fetch products from the backend
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     };

//     loadProducts();
//   }, []);

//   // Add item to cart API
//   const addToCart = async (item: Product) => {
//     const itemData: ItemData = {
//       ItemName: item.name,
//       ItemImage: item.image, // Ensure this is correct
//       price: item.price,
//       quantity: item.quantity || 1, // Default quantity to 1 if not specified
//     };




//     console.log('Adding to cart:', itemData); // Debugging line

//     try {
//       // Use apiClient to send the POST request to the cart endpoint
//       await apiClient.post('/carts', itemData);

//       // Navigate to cart page with selected item details after successful API call
//       navigate('/cart', { state: { itemData } });
//     } catch (error) {
//       console.error("Failed to add item to cart:", error);
//       // Optionally show an error message to the user
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white text-black font-semibold">
//       <div className="p-4 flex flex-col gap-4">
//         <div className="flex flex-col gap-12">
//           <div className="flex flex-col justify-center items-center">
//             <h2 className="text-xl font-bold">Recently Played</h2>
//             <div className="flex justify-center items-center flex-wrap gap-6 mt-4">
//               {products.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col items-center gap-2 p-4 hover:bg-gray-200 rounded-lg cursor-pointer transition duration-300 w-full sm:w-60 md:w-48 lg:w-40"
//                 >
//                   <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZwM9lAidMMLgBkpBfc_mceHLJOSpgaeDHQ&s"} alt="Item Pic" className="rounded-lg w-full h-36 object-contain" />
//                   {/* <img src={item.image } alt="Item Pic" className="rounded-lg w-full h-36 object-contain" /> */}

//                   <div className="text-left">
//                     <p className="text-black h-20 overflow-hidden text-ellipsis">{item.name}</p>
//                     <p className="text-gray-600 text-sm">Rs. {item.price}</p>
//                     <button
//                       className="bg-green-700 hover:bg-green-500 text-white h-8 w-20 rounded-full mt-2"
//                       onClick={() => addToCart(item)}
//                     >
//                       Buy
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiClient } from '../services/axios'; // Use the existing axios instance
import { fetchProducts } from '../services'; 

interface Product {
  name: string;
  image: string;
  price: number;
  quantity?: number;
}

interface ItemData {
  ItemName: string;
  ItemImage: string;
  price: number;
  quantity: number;
}

export default function Main() {
  const navigate = useNavigate();

  // State to store products fetched from the backend
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products when the component mounts
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts(); // Fetch products from the backend
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    loadProducts();
  }, []);

  const addToCart = async (item: Product) => {
    const cartData = {
      userID: 1, // Replace with the actual logged-in user ID
      productID: 1, // Ensure that `productID` exists in the `Product` interface
      quantity: item.quantity || 1,
      total_amount: item.price * (item.quantity || 1), // Calculate total_amount based on price and quantity
    };
  
    console.log('Adding to cart:', cartData);
  
    try {
      const response = await apiClient.post('/carts', cartData);
      console.log('Cart item added:', response.data);
  
      navigate('/cart', { state: { cartData } });
    } catch (error) {
      console.error("Failed to add item to cart:");
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
                  <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZwM9lAidMMLgBkpBfc_mceHLJOSpgaeDHQ&s"} alt="Item Pic" className="rounded-lg w-full h-36 object-contain" />
                   {/* <img src={item.image } alt="Item Pic" className="rounded-lg w-full h-36 object-contain" /> */}

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
