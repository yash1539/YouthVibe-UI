// src/components/Hoodie.js
import React from 'react';
import styled from 'styled-components';
import { useCart } from '../context/CartContext';

const HoodieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

const HoodieWrapper = styled.div`
  margin: 20px;
  text-align: center;
`;

const HoodieImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const ProductDetails = styled.div`
  margin-top: 20px;
`;

const ProductTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProductPrice = styled.span`
  font-size: 18px;
  color: #ff3f6c;
`;

const AddToCartButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
`;

const Hoodie = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const newCartItem = {
      title: 'Hoodie Title',
      price: 49.99,
      // Add more details like size, color, etc.
    };

    addToCart(newCartItem);
  };

  return (
    <HoodieContainer>
      <HoodieWrapper>
        <HoodieImage src="hood.jpeg" alt="Animated Hoodie" />
        <ProductDetails>
          <ProductTitle>Hoodie Title</ProductTitle>
          <ProductPrice>$49.99</ProductPrice>
          <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
        </ProductDetails>
      </HoodieWrapper>
    </HoodieContainer>
  );
};

export default Hoodie;
