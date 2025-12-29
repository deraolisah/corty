import React from 'react';
import { useParams } from 'react-router';
import { products } from '../../components/ProductGrid/ProductGrid';
import "./Product.scss";


const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id)); // Find the product by ID

  if (!product) {
    return <div>Product not found.</div>; // Handle case where product is not found
  }

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} />
      <p>Price: ${product.price}</p>
      {/* Add more product details as needed */}
      <button className='cta'>
        Add to Cart
      </button>
    </div>
  )
}

export default Product;