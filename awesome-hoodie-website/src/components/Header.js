// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import { useCart } from '../context/CartContext';

const HeaderContainer = styled.header`
  background-color: black;
  color: white;
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  margin: 0;
`;

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CartIcon = styled.span`
  font-size: 24px;
  margin-right: 8px;
`;

const Header = () => {
  const { cart } = useCart();

  return (
    <HeaderContainer>
      <Logo>YouthVibe</Logo>
      <CartContainer>
        <CartIcon>🛒</CartIcon>
        <span>{cart.length}</span>
      </CartContainer>
    </HeaderContainer>
  );
};

export default Header;
