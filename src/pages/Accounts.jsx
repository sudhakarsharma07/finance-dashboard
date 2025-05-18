import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
// import './AccountsForm.css'; // Custom CSS styling

const AccountsForm = () => {
  const [formData, setFormData] = useState({
    accountName: '',
    accountType: 'Savings',
    openingBalance: '',
    currency: 'INR',
    description: '',
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Account Created:', formData);
    alert('Account successfully created!');
    // Here you can make an API call to save the form data
  };

  return (
    <div className='account-form-container container mt-4'>
      <h3>Add New Account</h3>
      <Form onSubmit={handleSubmit} className='p-4 account-form'>
        <Row className='mb-3'>
          <Col>
            <Form.Group controlId='accountName'>
              <Form.Label>Account Name</Form.Label>
              <Form.Control
                type='text'
                name='accountName'
                value={formData.accountName}
                onChange={handleChange}
                placeholder='Enter Account Name'
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='accountType'>
              <Form.Label>Account Type</Form.Label>
              <Form.Select
                name='accountType'
                value={formData.accountType}
                onChange={handleChange}
              >
                <option>Savings</option>
                <option>Current</option>
                <option>Credit Card</option>
                <option>Fixed Deposit</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className='mb-3'>
          <Col>
            <Form.Group controlId='openingBalance'>
              <Form.Label>Opening Balance</Form.Label>
              <Form.Control
                type='number'
                name='openingBalance'
                value={formData.openingBalance}
                onChange={handleChange}
                placeholder='Enter Opening Balance'
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='currency'>
              <Form.Label>Currency Type</Form.Label>
              <Form.Select
                name='currency'
                value={formData.currency}
                onChange={handleChange}
              >
                <option>INR</option>
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className='mb-3' controlId='description'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            name='description'
            value={formData.description}
            onChange={handleChange}
            placeholder='Add some description...'
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Create Account
        </Button>
      </Form>
    </div>
  );
};

export default AccountsForm;
