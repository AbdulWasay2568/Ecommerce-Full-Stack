import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../services/productService';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const getProduct = async () => {
      const data = await fetchProductById(Number(id));
      setProduct(data);
    };

    getProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-col sm:flex-row">
        <img src={product.image_url} alt={product.name} className="w-full sm:w-1/2 h-auto object-cover" />
        <div className="sm:ml-8">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">${product.price}</p>
          <p className="mb-4">{product.description}</p>
          <button className="bg-indigo-500 text-white p-3 rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
