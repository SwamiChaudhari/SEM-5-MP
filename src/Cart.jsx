import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart }) => {
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
      <Link to="/">Back to Products</Link>
    </div>
  );
};

export default Cart;
