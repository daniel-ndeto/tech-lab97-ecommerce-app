import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CartPage() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch cart items from the backend API
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get('/api/cart');
        setCart(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching cart items:", err);
        setError("You have no items in your cart.");
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  // Handle removing an item from the cart
  const handleRemove = async (id) => {
    try {
      await axios.delete(`/api/cart/${id}`);
      // Updating local state after successful deletion
      setCart(cart.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Error removing item from cart:", err);
      alert("Failed to remove the item. Please try again.");
    }
  };

  if (loading) return <p>Loading cart...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item._id} className="cart-item">
              <img
                src={item.image || 'https://via.placeholder.com/150'}
                alt={item.name}
                onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }}
              />
              <div>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <button onClick={() => handleRemove(item._id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartPage;
