import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CustomLoginForm = () => {
  const initialFormState = {
    userEmail: '',
    userPassword: '',
    firstName: '',
    lastName: '',
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="userEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={formData.userEmail}
          onChange={handleInputChange}
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group controlId="userPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={formData.userPassword}
          onChange={handleInputChange}
          placeholder="Password"
        />
      </Form.Group>

      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="Enter first name"
        />
      </Form.Group>

      <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Enter last name"
        />
      </Form.Group>

      <Button variant="danger" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default CustomLoginForm;
