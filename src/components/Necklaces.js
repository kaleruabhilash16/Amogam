import React, { useState } from 'react';
import Card from './Card';
import p1 from '../p1.jpg';
import './Necklace.css';

const necklaceproducts = [
  { id: 1, image: p1, name: 'Dainty necklaces', price: '₹150' },
  { id: 2, image: p1, name: 'Elegant necklaces', price: '₹1500' },
  { id: 3, image: p1, name: 'Luxury necklaces', price: '₹5000' },
  { id: 4, image: p1, name: 'Chic necklaces', price: '₹2500' },
  // Add more products here
];

const Necklaces = () => {
  const [searchPrice, setSearchPrice] = useState('');
  const [sortOrder, setSortOrder] = useState(''); // State to track the sorting order

  // Function to convert price string to number for comparison
  const parsePrice = (price) => Number(price.replace('₹', ''));

  // Filter products based on the search input for price
  const filteredProducts = necklaceproducts.filter((product) => {
    if (!searchPrice) return true; // Show all if no search input
    return parsePrice(product.price) <= parseInt(searchPrice, 10);
  });

  // Function to handle sorting
  const sortProducts = (products) => {
    return [...products].sort((a, b) => {
      const priceA = parsePrice(a.price);
      const priceB = parsePrice(b.price);
      
      if (sortOrder === 'low-to-high') {
        return priceA - priceB; // Ascending order
      } else if (sortOrder === 'high-to-low') {
        return priceB - priceA; // Descending order
      }
      return 0; // No sorting
    });
  };

  // Handle button click to toggle sorting
  const handleSortClick = (order) => {
    setSortOrder(order);
  };

  // Apply sorting to the filtered products
  const sortedProducts = sortProducts(filteredProducts);

  return (
    <div className='sorting-box'>
      <h1>Necklaces Collection</h1>
      <div className="search-box">
        <label>Search by Maximum Price: </label>
        <input
          type="number"
          placeholder="Enter maximum price"
          value={searchPrice}
          onChange={(e) => setSearchPrice(e.target.value)}
        />
      </div>

      <div className="sort-buttons">
        <button onClick={() => handleSortClick('low-to-high')}>
          Sort: Low to High
        </button>
        <button onClick={() => handleSortClick('high-to-low')}>
          Sort: High to Low
        </button>
      </div>
      
      <div className="card-container-necklace">
        {sortedProducts.map((product) => (
          <div key={product.id}>
            <Card
              image={product.image}
              name={product.name}
              price={product.price}
            />
          </div>
        ))}
      </div>
      
      <p>Explore our range of elegant necklaces...</p>
    </div>
  );
};

export default Necklaces;
