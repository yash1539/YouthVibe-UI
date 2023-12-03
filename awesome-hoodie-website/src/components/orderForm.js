// src/components/OrderForm.js
import React, { useState } from 'react';
import styled from 'styled-components';

const OrderFormContainer = styled.div`
  /* Add your order form styling here */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

const OrderForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!name || !address || !phone) {
      alert('Please fill in all fields.');
      return;
    }

    // Create an order object
    const order = {
      name,
      address,
      phone,
      // You can add more data like items in the cart, total amount, etc.
    };

    // Pass the order to the parent component
    onSubmit(order);

    // Optionally, you can reset the form fields
    setName('');
    setAddress('');
    setPhone('');
  };

  return (
    <OrderFormContainer>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Name:</Label>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Address:</Label>
          <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label>Phone:</Label>
          <Input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </FormGroup>
        <Button type="submit">Place COD Order</Button>
      </Form>
    </OrderFormContainer>
  );
};

export default OrderForm;
