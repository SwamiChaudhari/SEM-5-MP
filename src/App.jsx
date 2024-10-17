import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import products from './products';
import ProductPage from './ProductPage';
import Cart from './Cart';
import Register from './register';  // Import Register component

const App = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div className="App">
        <header>
          <h1>ONE DISTRICT ONE PRODUCT</h1>
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Link to="/cart" className="cart-link">Cart ({cart.length})</Link>
          <Link to="/register" className="register-link">Register</Link> {/* Link to registration */}
        </header>
        <main>
          <h2>Available Products</h2>
          <div className="product-list">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <p>Rating: {'★'.repeat(Math.floor(product.rating))}</p>
                <p>Last Bid: {product.lastBid ? `$${product.lastBid}` : 'No bids yet'}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
                <Link to={`/bid/${product.id}`} className="bid-button">Bid Now</Link>
              </div>
            ))}
          </div>
        </main>
        <Routes>
          <Route path="/bid/:id" element={<ProductPage products={products} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/register" element={<Register />} /> {/* Route for registration form */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
