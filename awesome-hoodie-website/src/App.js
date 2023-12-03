// src/App.js
import React from 'react';
import Hoodie from './components/Hoodie';
import Header from './components/Header';
import OrderForm from './components/orderForm';

const App = () => {
  const handlePlaceOrder = (formData) => {
    // Implement order placement logic
    console.log('Placing order:', formData);
  };

  return (
    <div>
      <Header />
      <Hoodie />
      <OrderForm onSubmit={handlePlaceOrder} />
    </div>
  );
};

export default App;
