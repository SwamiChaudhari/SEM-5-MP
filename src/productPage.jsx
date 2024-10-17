import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductPage = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [bidAmount, setBidAmount] = useState('');
  const navigate = useNavigate();

  const handleBidSubmit = () => {
    if (bidAmount && bidAmount >= product.price) {
      alert(`Your bid of $${bidAmount} on ${product.name} has been placed!`);
      product.lastBid = bidAmount; // Update the last bid
      navigate('/'); // Redirect to main page after submitting
    } else {
      alert('Please enter a valid bid amount.');
    }
  };

  return (
    <div className="product-page">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      <input
        type="number"
        placeholder="Enter your bid"
        min={product.price}
        value={bidAmount}
        onChange={(e) => setBidAmount(e.target.value)}
      />
      <button onClick={handleBidSubmit}>Place Bid</button>
      <button onClick={() => navigate('/')}>Back to Products</button>
    </div>
  );
};

export default ProductPage;
