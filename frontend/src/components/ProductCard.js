import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.image ? product.image : 'https://via.placeholder.com/150'}
        alt={product.name}
        onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }}
      />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p>Rating: {product.rating} / 5</p>
      <Link to={`/product/${product._id}`}>Read More</Link>
    </div>
  );
}

export default ProductCard;
