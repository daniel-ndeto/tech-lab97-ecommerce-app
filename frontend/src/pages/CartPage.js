import React, { useState } from 'react';

function CartPage() {
  // For demonstration, the cart is managed in local state.
  // In a full application, you might retrieve this data from a global store or API.
  const [cart, setCart] = useState([]);

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

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
