import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

function Home() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`/api/products?page=${page}`)
      .then(res => {
        console.log("Fetched products:", res.data);
        setProducts(res.data);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
      });
  }, [page]);

  return (
    <div className="home-page">
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
      <div className="pagination">
        <button onClick={() => setPage(page > 1 ? page - 1 : 1)}>Prev</button>
        <span>Page {page}</span>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}

export default Home;
