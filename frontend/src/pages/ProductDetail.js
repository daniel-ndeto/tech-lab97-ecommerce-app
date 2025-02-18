import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductDetail({ params }) {
  const { id } = params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p>Loading product details...</p>;

  return (
    <div className="product-detail">
      <img src={product.image || 'https://via.placeholder.com/300'} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <p>Rating: {product.rating} / 5</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetail;
