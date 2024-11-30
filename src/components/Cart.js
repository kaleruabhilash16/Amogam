import React from 'react';
const Cart = () => {
  const cartItems = [
    { name: 'Gold Necklace', quantity: 1 },
    { name: 'Diamond Earrings', quantity: 2 },
  ];

  // Function to generate cart summary
  const getCartSummary = () => {
    return cartItems.map(item => `${item.quantity} x ${item.name}`).join('\n');
  };

  // Checkout function to handle click event
  const handleCheckout = () => {
    const cartSummary = getCartSummary();
    alert(`Your Cart:\n${cartSummary}\n\nCopy the above list and send it to us on Instagram.`);
    
    // Redirect to Instagram profile
    window.location.href = 'https://www.instagram.com/amogham_jewellery'; // Replace with actual Instagram link
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.quantity} x {item.name}</li>
        ))}
      </ul>
      <button id="checkoutButton" onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
